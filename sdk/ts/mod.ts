/// <reference types="./mashin.d.ts" />

import { StateRecord } from "./mashin.d.ts";

export class Mashin {
  get resourceId() {
    return globalThis.__mashin.rid;
  }

  async setup(backend?: number) {
    if (globalThis.__mashin.rid) {
      throw new Error("Engine already started");
    }
    globalThis.__mashin.rid = await Deno.core.opAsync(
      "as__client_new",
      backend
    );
    globalThis.__mashin.engine = this;
  }

  async finished() {
    await Deno.core.opAsync("as__client_finished", globalThis.__mashin.rid);
  }
}

export abstract class Backend<T> {
  abstract name: string;
  abstract version: string;
  config: T;
  abstract save(encryptedState: StateRecord): Promise<void>;
  abstract load(): Promise<StateRecord | undefined>;
  abstract close(): Promise<void>;

  constructor(config: T) {
    this.config = config;
  }
}
