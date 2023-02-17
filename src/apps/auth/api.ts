/* eslint-disable @typescript-eslint/ban-types */

import { API } from '../../components/app-base/api-base';
import { AxiosLoginRequest } from './types';

export class LoginAPI extends API {
  constructor() {
    super('RRHH-GSI-API');
  }

  public async validateUserCredentials(loginCredentials: AxiosLoginRequest) {
    const body = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      identificationNumber: loginCredentials.identificationNumber,
      password: loginCredentials.password,
    };
    const response = await this.request({
      method: 'POST',
      url: 'login-request/validate-user',
      body,
    });

    return response.data;
  }
}
