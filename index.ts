import { Engine } from './core/engine';
import { Game } from './core/game';

const gameEngine = new Engine();
const gameInstance = new Game(gameEngine);

gameEngine.start(gameInstance);