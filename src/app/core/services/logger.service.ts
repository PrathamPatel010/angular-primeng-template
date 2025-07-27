import { Injectable } from '@angular/core';

export interface Logger {
  info(message: string, ...args: any[]): void;
  warn(message: string, ...args: any[]): void;
  error(message: string, ...args: any[]): void;
  debug(message: string, ...args: any[]): void;
}

@Injectable({
  providedIn: 'root',
})
@Injectable({ providedIn: 'root' })
export class LoggerService {
  getLogger(source: string): Logger {
    source = source.slice(1);
    return {
      info: (msg: string, ...args) =>
        console.info(`%c[${source}] ✅ ${msg}`, 'color: aqua', ...args),

      warn: (msg: string, ...args) =>
        console.warn(`%c[${source}] ⚠️ ${msg}`, 'color: orange', ...args),

      error: (msg: string, ...args) =>
        console.error(`%c[${source}] ❌ ${msg}`, 'color: red', ...args),

      debug: (msg: string, ...args) =>
        console.debug(`%c[${source}] 🐞 ${msg}`, 'color: yellow', ...args),
    };
  }
}
