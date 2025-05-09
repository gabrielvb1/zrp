import { Request, Response } from 'express';
import { IPokemonService } from '../interfaces/services/PokemonServiceIntefaces';
import { pokemonServiceFactory } from '../services/PokemonService';

class PokemonController {
  private pokemonService: IPokemonService;

  constructor(pokemonService: IPokemonService) {
    this.pokemonService = pokemonService;
  }

  getPokemonById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { pokeName } = req.params;
      const pokemon = await this.pokemonService.getPokemonByIdFromApi(pokeName);

      if (!pokemon) {
        res.status(404).json({ message: `Pokémon ${pokeName} não encontrado` });
        return;
      }

      res.status(200).json(pokemon);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro interno do servidor';
      res.status(500).json({ message: errorMessage });
    }
  };
}

export function pokemonControllerFactory() {
  const pokemonServiceInstance = pokemonServiceFactory();
  return new PokemonController(pokemonServiceInstance);
}