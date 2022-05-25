import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { API_URL } from '@/constants/api';

export class HttpClient {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: API_URL,
      responseType: 'json',
      headers: {
        'content-type': 'application/json',
      },
    });
  }

  // eslint-disable-next-line no-unused-vars
  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig) {
    const headers = {
      ...config?.headers,
    };

    return this.axios
      .get(url, {
        ...config,
        headers,
      })
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => {
        return error;
      });
  }

  // eslint-disable-next-line no-unused-vars
  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) {
    const headers = {
      ...config?.headers,
    };
    return this.axios
      .post(url, data, { ...config, headers })
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => {
        return error;
      });
  }

  // eslint-disable-next-line no-unused-vars
  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) {
    const headers = {
      ...config?.headers,
    };
    return this.axios
      .put(url, data, { ...config, headers })
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => {
        return error;
      });
  }

  // eslint-disable-next-line no-unused-vars
  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ) {
    const headers = {
      ...config?.headers,
    };

    return this.axios
      .delete(url, { ...config, headers })
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => {
        return error;
      });
  }

  head<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    const headers = {
      ...config?.headers,
    };
    return this.axios.head(url, { ...config, headers });
  }

  options<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    const headers = {
      ...config?.headers,
    };
    return this.axios.options(url, { ...config, headers });
  }

  // eslint-disable-next-line no-unused-vars
  patch<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) {
    const headers = {
      ...config?.headers,
    };
    return this.axios
      .patch(url, data, { ...config, headers })
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => {
        return error;
      });
  }
}

const httpClient = new HttpClient();

export default httpClient;
