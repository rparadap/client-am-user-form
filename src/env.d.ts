/// <reference types="vite/client" />

// eslint-disable-next-line @typescript-eslint/naming-convention
interface ImportMetaEnv {
  readonly VITE_POOL_PROD: string;
  readonly VITE_POOL_STG: string;
  readonly VITE_POOL_DEV: string;
  readonly VITE_CLIENT_ID_PROD: string;
  readonly VITE_CLIENT_ID_STG: string;
  readonly VITE_CLIENT_ID_DEV: string;
  readonly VITE_ENV: 'prod' | 'stg' | 'dev';
}
// eslint-disable-next-line @typescript-eslint/naming-convention
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
