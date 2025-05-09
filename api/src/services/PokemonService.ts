// src/services/PokemonService.ts
import AxiosAdapter from './AxiosAdapter';
import axios, { AxiosError } from 'axios';
import { IPokemonService } from '../interfaces/services/PokemonServiceIntefaces';
import { IPokemon } from '../interfaces/external/PokemonApiInterfaces';
import { IHttpClient } from '../interfaces/external/HttpClient';
import { IParsedPokemon } from '../interfaces/models/PokemonModelInterfaces';

class PokemonService implements IPokemonService {
  httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.httpClient = httpClient;
  }

  private fetchData = async (endpoint: string): Promise<IParsedPokemon> => {
    try {
      const { data } = await this.httpClient.get<IPokemon>(endpoint);
      return {
        id: data.id,
        name: data.name,
        abilities: data.abilities as any,
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 404) {
        throw new Error('Pokémon não encontrado na API');
      }
      throw new Error(
        `Erro ao buscar dados da API: ${axiosError.message || 'Erro desconhecido'}`
      );
    }
  };

  getPokemonByIdFromApi = async (
    pokemonName: string
  ): Promise<IParsedPokemon | null> => {
    try {      
      const res = await this.fetchData(`/${pokemonName.toLowerCase()}`);
      return res;
    } catch (error) {
      if (error instanceof Error && error.message.includes('Pokémon não encontrado')) {
        return null;
      }
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      throw new Error(`Erro ao buscar Pokémon ${pokemonName}: ${errorMessage}`);
    }
  };
}

export function pokemonServiceFactory() {
  const httpClient = new AxiosAdapter(
    axios.create({
      baseURL: 'https://pokeapi.co/api/v2/pokemon',
    })
  );

  return new PokemonService(httpClient);
}