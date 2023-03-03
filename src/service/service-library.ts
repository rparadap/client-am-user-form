export type APIService =
  | 'RRHH-GSI-API'
  | 'CustomAPI-Nacionalities'
  | 'CustomAPI-Provinces';
export type APIStages = 'prod' | 'stg' | 'dev';
export type Service = {
  service: APIService;
  url: string;
};
type ServiceLibraryResource = {
  name: APIService;
  url: string;
};
const productionServiceLibrary: ServiceLibraryResource[] = [];
const developmentServiceLibrary: ServiceLibraryResource[] = [
  {
    name: 'RRHH-GSI-API',
    url: 'https://v435bvrqid.execute-api.us-east-1.amazonaws.com/DEV',
  },
  {
    name: 'CustomAPI-Nacionalities',
    url: 'https://restcountries.com/v2/all',
  },
  {
    name: 'CustomAPI-Provinces',
    url: 'https://ubicaciones.paginasweb.cr/provincias.json',
  },
];
export const serviceLibrary = {
  prod: [...productionServiceLibrary],
  stg: [...developmentServiceLibrary],
  dev: [...developmentServiceLibrary],
};
