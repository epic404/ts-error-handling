import { errorDefinitions } from './errorDefinitions';

export class FetchError extends Error {
  readonly data?: unknown;

  constructor(
    type: keyof typeof errorDefinitions,
    options?: {
      cause?: Error;
      data?: unknown;
    },
  ) {
    super(errorDefinitions[type].message);
    Object.assign(this, errorDefinitions[type]);
    Object.setPrototypeOf(this, FetchError.prototype);

    if (options?.cause) {
      Object.defineProperty(this, 'cause', {
        enumerable: false,
        value: options.cause,
      });
    }

    if (options?.data) {
      this.data = options.data;
    }
  }
}