/* eslint-disable no-console */
import { API } from '../../components/app-base/api-base';
import { AxiosNacionalities, AxiosRegisterData, FileProperty } from './types';

export class HomeAPI extends API {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super('RRHH-GSI-API');
  }

  public async requestFileUrl(data: FileProperty) {
    const response = await this.request({
      method: 'POST',
      url: 'file/upload',
      body: data,
    });

    return response.data;
  }

  public async saveFormData(data: AxiosRegisterData) {
    const response = await this.request({
      method: 'POST',
      url: 'register-request/create-register',
      body: data,
    });

    return response.data;
  }

  public async requestNacionalitiesList() {
    const response = await this.customRequest({
      api: 'CustomAPI-Nacionalities',
      method: 'GET',
      url: 'https://restcountries.com/v2/all',
      body: {},
    });

    return response.data as AxiosNacionalities[];
  }

  public async requestProvincesList() {
    const response = await this.customRequest({
      method: 'GET',
      api: 'CustomAPI-Provinces',
      url: 'https://ubicaciones.paginasweb.cr/provincias.json',
      params: {},
    });

    return response.data;
  }

  public async requestCantonList(provinceOption: any) {
    const response = await this.customRequest({
      method: 'GET',
      api: 'CustomAPI-Provinces',
      url:
        'https://ubicaciones.paginasweb.cr/provincia/' +
        provinceOption +
        '/cantones.json',
      params: {},
    });

    return response.data;
  }

  public async requestDistrictList(provinceOption: any, cantonOption: any) {
    const response = await this.customRequest({
      method: 'GET',
      api: 'CustomAPI-Provinces',
      url:
        'https://ubicaciones.paginasweb.cr/provincia/' +
        provinceOption +
        '/canton/' +
        cantonOption +
        '/distritos.json',
      params: {},
    });

    return response.data;
  }

  public async getFormData() {
    const FORM_DATA = {
      colaboratorFormData: {
        academicRecord: [],
        licensesRecord: [],
        delincuenceLetterRecord: [],
        recommendationLetterRecord: [],
        familyRecord: [],
        personalnformation: {},
      },
      identificationNumber: 'a',
    };

    return FORM_DATA as unknown as AxiosRegisterData;
  }
}
