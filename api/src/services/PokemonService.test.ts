import axios from 'axios';
import { pokemonServiceFactory } from './PokemonService';
import { IPokemon } from '../interfaces/external/PokemonApiInterfaces';

const mockPokemonData: IPokemon = {
  id: 25,
  name: 'pikachu',
  abilities: [
    {
      ability: { name: 'static', url: 'https://pokeapi.co/api/v2/ability/9/' },
      is_hidden: false,
      slot: 1,
    },
  ],
};

describe('PokemonService', () => {
  let axiosInstance: any;

  beforeEach(() => {
    axiosInstance = {
      get: jest.fn(),
    };
    jest.spyOn(axios, 'create').mockReturnValue(axiosInstance);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Deve retornar dados de um pokemon existente', async () => {
    (axiosInstance.get as jest.Mock).mockResolvedValue({ data: mockPokemonData });

    const pokemonService = pokemonServiceFactory();

    const result = await pokemonService.getPokemonByIdFromApi('pikachu');

    expect(result).toEqual({
      id: 25,
      name: 'pikachu',
      abilities: mockPokemonData.abilities,
    });
    expect(axiosInstance.get).toHaveBeenCalledWith('/pikachu');
  });

  it('Deve retornar erro 404 para um pokemon inexistente', async () => {
    (axiosInstance.get as jest.Mock).mockRejectedValue({
      response: { status: 404 },
    });

    const pokemonService = pokemonServiceFactory();

    const result = await pokemonService.getPokemonByIdFromApi('invalid');

    expect(result).toBeNull();
    expect(axiosInstance.get).toHaveBeenCalledWith('/invalid');
  });

  it('deve retornar um erro de status 500', async () => {
    (axiosInstance.get as jest.Mock).mockRejectedValue({
      response: { status: 500 },
      message: 'Internal server error',
    });

    const pokemonService = pokemonServiceFactory();

    await expect(pokemonService.getPokemonByIdFromApi('pikachu')).rejects.toThrow(
      'Erro ao buscar Pokémon pikachu: Erro ao buscar dados da API: Internal server error'
    );
    expect(axiosInstance.get).toHaveBeenCalledWith('/pikachu');
  });
});