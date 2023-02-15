import { APIService } from '../../service/service-library';

export type IncommingRequest = {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: unknown;
  params?: unknown;
};
export type CustomIncommingRequest = {
  api: APIService;
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: unknown;
  params?: unknown;
};
