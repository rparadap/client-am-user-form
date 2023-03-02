export type APIService = 'RRHH-GSI-API';
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
];
export const serviceLibrary = {
  prod: [...productionServiceLibrary],
  stg: [...developmentServiceLibrary],
  dev: [...developmentServiceLibrary],
};
