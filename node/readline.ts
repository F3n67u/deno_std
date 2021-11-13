import {
  clearLine,
  clearScreenDown,
  cursorTo,
  moveCursor,
} from "./internal/readline/callbacks.js";
import { emitKeypressEvents } from "./internal/readline/emitKeypressEvents.js";
import promises from './internal/readline/promises.js';

export default {
  clearLine,
  clearScreenDown,
  cursorTo,
  moveCursor,
  emitKeypressEvents,
  promises
};
