import { isUserLoggedIn } from '../../shared/user-session-managment';
import { Page } from '../../components/app-base/page-base';
import { LoginServices } from './services';
import $ from 'jquery';
import { LoginAPI } from './api';

const HOME_PATH = '../home/index.html';
window.addEventListener('load', async () => {
  const LoginPage = new LoginMain();
  try {
    LoginPage.init();
  } catch (error) {
    LoginPage.logger(error);
    LoginPage.showErrorAlert({ errorMessage: 'Error Inesperado' });
  }
});
export class LoginMain extends Page {
  private api;

  public services;

  private username: string;

  private password: string;

  private loginBtn: JQuery<HTMLButtonElement>;

  public userAttributes: any;

  constructor() {
    super();
    this.services = new LoginServices();
    this.api = new LoginAPI();
  }

  public async init() {
    await this.checkLogin();
    this.loginBtn = $('#login-btn');
    this.initEvents();
  }

  public initEvents() {
    this.loginBtn.on('click', () => {
      this.login();
    });
    $('#password').on('keypress', (event: any) => {
      if (event.keyCode === 13) {
        this.login();
      }
    });
  }

  private async checkLogin() {
    this.showLoadingScreen();
    const isCurrentUserLogginIn = await isUserLoggedIn();
    if (isCurrentUserLogginIn) {
      window.location.href = HOME_PATH;
    }
    this.hideLoadingScreen();
  }

  private checkLoginData() {
    this.username = $('#username').val()?.toString() || '';
    this.password = $('#password').val()?.toString() || '';

    return this.username && this.password;
  }

  public async login() {
    this.showLoadingScreen();
    if (!this.checkLoginData()) {
      this.showErrorAlert({ errorMessage: 'Informacion invalida' });

      return;
    }
    try {
      const response = await this.api.validateUserCredentials({
        identificationNumber: this.username,
        password: this.password,
      });
      if (response.length <= 0) throw 'Invalid response data';
      localStorage.setItem('user-local-data', JSON.stringify(response));
      window.location.href = HOME_PATH;
    } catch (error) {
      localStorage.clear();
      this.showErrorAlert({ errorMessage: 'Error al realizar login' });
      this.logger(error);
    }
  }
}
