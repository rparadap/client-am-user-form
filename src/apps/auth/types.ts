// eslint-disable-next-line @typescript-eslint/naming-convention
type COGNITO_AUTH_RESPONSE_MESSAGE = 'VALID' | 'NEW_PASSWORD';
// eslint-disable-next-line @typescript-eslint/naming-convention
export type COGNITO_AUTH_RESPONSE = {
  response: COGNITO_AUTH_RESPONSE_MESSAGE;
  data: any;
};
