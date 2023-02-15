export const CognitoUserPoolData = {
  prod: {
    UserPoolId: import.meta.env.VITE_POOL_PROD,
    ClientId: import.meta.env.VITE_CLIENT_ID_PROD,
  },
  stg: {
    UserPoolId: import.meta.env.VITE_POOL_STG,
    ClientId: import.meta.env.VITE_CLIENT_ID_STG,
  },
  dev: {
    UserPoolId: import.meta.env.VITE_POOL_DEV,
    ClientId: import.meta.env.VITE_CLIENT_ID_DEV,
  },
};
