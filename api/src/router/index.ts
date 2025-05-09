import { Router } from 'express';
import { pokemonControllerFactory } from '../controllers/PokemonController';

const router = Router();

const pokemonController = pokemonControllerFactory();

router.get('/pokemon/:pokeName', pokemonController.getPokemonById);

export default router;
