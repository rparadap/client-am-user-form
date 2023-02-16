import axios, { AxiosInstance } from 'axios';
import {
  APIService,
  serviceLibrary,
  APIStages,
} from '../../service/service-library';
import { CustomIncommingRequest, IncommingRequest } from './types';

export class API {
  private axiosInstance: AxiosInstance;

  private mainAPI: APIService;

  readonly env: APIStages = import.meta.env.VITE_ENV as APIStages;

  constructor(mainAPI: APIService) {
    this.mainAPI = mainAPI;
    this.init();
  }

  private async init() {
    this.axiosInstance = this.getAxiosIsntance(this.mainAPI);
  }

  private getAxiosIsntance(api: APIService) {
    const baseURL: string = this.getBaseURL(api);

    return axios.create({
      baseURL,
      timeout: 30000,
      headers: { accept: ' application/json' },
    });
  }

  private getBaseURL(api: APIService) {
    const service = serviceLibrary[this.env].find(
      (service) => service.name === api
    );
    if (!service) throw 'Missing service base URL';

    return service.url;
  }

  public async request(data: IncommingRequest) {
    return this.axiosInstance({
      method: data.method,
      url: data.url,
      data: data.body,
      params: data.params,
    });
  }

  public async customRequest(data: CustomIncommingRequest) {
    const baseURL = this.getBaseURL(data.api);

    return axios({
      baseURL,
      url: data.url,
      method: data.method,
      data: data.body,
      params: data.params,
    });
  }
}
