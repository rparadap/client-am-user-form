import {
  CognitoUserPool,
  CognitoUserSession,
  ICognitoUserPoolData,
} from 'amazon-cognito-identity-js';
import axios, { AxiosInstance } from 'axios';
import { CognitoUserPoolData } from '../../service/cognito-user-pool';
import {
  APIService,
  serviceLibrary,
  APIStages,
} from '../../service/service-library';
import { CustomIncommingRequest, IncommingRequest } from './types';

export class API {
  private axiosInstance: AxiosInstance;

  public token: string;

  public poolData: ICognitoUserPoolData;

  private mainAPI: APIService;

  readonly env: APIStages = import.meta.env.VITE_ENV as APIStages;

  constructor(mainAPI: APIService) {
    this.mainAPI = mainAPI;
    this.init();
  }

  private async init() {
    this.poolData = this.getPoolData();
    this.token = await this.getUserToken();
    this.axiosInstance = this.getAxiosIsntance(this.mainAPI);
  }

  private getAxiosIsntance(api: APIService) {
    const baseURL: string = this.getBaseURL(api);

    return axios.create({
      baseURL,
      timeout: 30000,
      headers: { Authorization: this.token || '', accept: ' application/json' },
    });
  }

  private getBaseURL(api: APIService) {
    const service = serviceLibrary[this.env].find(
      (service) => service.name === api
    );
    if (!service) throw 'Missing service base URL';

    return service.url;
  }

  private getPoolData() {
    const poolData = CognitoUserPoolData[this.env];
    if (!poolData) throw 'Missing cognito pool data';

    return poolData;
  }

  private getUserToken(): Promise<string> {
    return new Promise((resolve) => {
      const userPool = new CognitoUserPool(this.poolData);
      const user = userPool.getCurrentUser();
      if (!user) {
        resolve('');

        return;
      }
      user.getSession(function (
        error: Error | null,
        session: CognitoUserSession
      ) {
        if (!error) resolve(session.getIdToken().getJwtToken());
      });
    });
  }

  public async request(data: IncommingRequest) {
    if (!this.token) {
      await this.init();
    }

    return this.axiosInstance({
      method: data.method,
      url: data.url,
      data: data.body,
      params: data.params,
    });
  }

  public async customRequest(data: CustomIncommingRequest) {
    if (!this.token) {
      await this.init();
    }
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
