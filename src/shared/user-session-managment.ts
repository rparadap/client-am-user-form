import {
  CognitoUserPool,
  ICognitoUserPoolData,
} from 'amazon-cognito-identity-js';
import { User } from 'entities/User';
import { CognitoUserPoolData } from '../service/cognito-user-pool';
import { APIStages } from '../service/service-library';

export function getPoolData() {
  const env: APIStages = import.meta.env.VITE_ENV as APIStages;
  if (!env) throw 'missing cognito pool data';

  return CognitoUserPoolData[env];
}
export function logoutService(poolData?: ICognitoUserPoolData) {
  const pool = poolData ? poolData : getPoolData();
  const userPool = new CognitoUserPool(pool);
  const user = userPool.getCurrentUser();
  user?.signOut();
  localStorage.clear();
  window.location.href = '../auth/sign-in/';
}
export async function isUserLoggedIn() {
  try {
    const pool = getPoolData();

    return new Promise((resolve) => {
      const userPool = new CognitoUserPool(pool);
      const user = userPool.getCurrentUser();
      if (!user) {
        resolve(false);

        return;
      }
      user.getSession(function (error: Error | null) {
        if (!error) resolve(true);
      });
    });
  } catch (error) {
    return false;
  }
}
export function getCurrentUserData(): User {
  const localData = localStorage.getItem('user-local-data');

  return JSON.parse(localData || '') as User;
}
