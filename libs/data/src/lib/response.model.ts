export class Error {
  message: string;
}

export class Response<T> {
  data?: T | null;
  error?: Error | null;
}
