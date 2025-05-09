import { IParsedPokemon } from '../models/PokemonModelInterfaces';

export interface IPokemonService {
  getPokemonByIdFromApi(pokeName: string): Promise<IParsedPokemon | null>;
}
