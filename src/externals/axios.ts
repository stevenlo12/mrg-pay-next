import axios, { type AxiosRequestConfig } from 'axios';

export interface IOptions {
  accessToken?: string;
  customHeaders?: Record<string, string>;
  timeout?: number;
  withCredentials?: boolean;
}

function buildHeaders(options?: IOptions, extra?: Record<string, string>) {
  const headers: Record<string, string> = {
    ...options?.customHeaders,
    ...(extra ?? {}),
  };
  if (options?.accessToken) {
    headers.Authorization = `Bearer ${options.accessToken}`;
  }
  return headers;
}

function baseConfig(options?: IOptions): Pick<AxiosRequestConfig, 'headers' | 'timeout' | 'withCredentials'> {
  return {
    headers: buildHeaders(options),
    timeout: options?.timeout,
    withCredentials: options?.withCredentials ?? true,
  };
}

export default class AxiosHelper {
  public static async get(url: string, params: object, options?: IOptions) {
    const result = await axios.get(url, {
      ...baseConfig(options),
      params,
      timeout: options?.timeout ?? 5000,
    });
    return result.data;
  }

  public static async getWithParams(url: string, params: object, options?: IOptions, userAgent?: string) {
    const result = await axios.get(url, {
      ...baseConfig(options),
      params,
      timeout: options?.timeout ?? 5000,
      headers: buildHeaders(options, userAgent ? { 'User-Agent': userAgent } : undefined),
    });
    return result.data;
  }

  public static async post(url: string, params: object, options?: IOptions) {
    const result = await axios.post(url, params, {
      ...baseConfig(options),
      timeout: options?.timeout ?? 10000,
    });
    return result.data;
  }

  public static async put(url: string, params: object, options?: IOptions) {
    const result = await axios.put(url, params, {
      ...baseConfig(options),
      timeout: options?.timeout ?? 10000,
    });
    return result.data;
  }

  public static async patch(url: string, params: object, options?: IOptions) {
    const result = await axios.patch(url, params, {
      ...baseConfig(options),
      timeout: options?.timeout ?? 10000,
    });
    return result.data;
  }

  public static async delete(url: string, params: object, options?: IOptions) {
    const result = await axios.delete(url, {
      ...baseConfig(options),
      data: params,
      timeout: options?.timeout ?? 10000,
    });
    return result.data;
  }
}
