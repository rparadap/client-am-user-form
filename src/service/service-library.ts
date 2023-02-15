export type APIService = 'user';
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
    name: 'user',
    url: 'https://s21e6lx64b.execute-api.us-east-1.amazonaws.com/dev/',
  },
];
export const serviceLibrary = {
  prod: [...productionServiceLibrary],
  stg: [...developmentServiceLibrary],
  dev: [...developmentServiceLibrary],
};
