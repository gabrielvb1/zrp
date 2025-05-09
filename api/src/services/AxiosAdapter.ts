import { AxiosInstance } from 'axios';
import { IHttpClient } from '../interfaces/external/HttpClient';

class AxiosAdapter implements IHttpClient {
  private axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async get<T>(url: string): Promise<{ data: T }> {
    return this.axios.get<T>(url);
  }
}

export default AxiosAdapter;
