/* eslint-disable @typescript-eslint/ban-types */

import { API } from '../../components/app-base/api-base';

export class LoginAPI extends API {

  constructor() {
    super('user');
  }

  public async getUserInformation(username: string) {
    const body = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      codigo_colaborador: username,
    };
    const response = await this.request({
      method: 'POST',
      url: 'acceso/get-user-info-plus-sidebar',
      body,
    });

    return response.data;
  }
}
