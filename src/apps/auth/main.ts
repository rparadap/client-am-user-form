import { Page } from '../../components/app-base/page-base';
import { LoginAPI } from './api';
import { LoginServices } from './services';

const HOME_PATH = '../home/index.html';
window.addEventListener('load', async () => {
  const LoginPage = new LoginMain();
  try {
    LoginPage.init();
  } catch (error) {
    LoginPage.logger(error);
    LoginPage.showErrorAlert({ message: 'Error Inesperado' });
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
    this.api = new LoginAPI();
    this.services = new LoginServices();
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
    $('#password').on('keypress', (event) => {
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
      this.showErrorAlert({ message: 'Informacion invalida' });

      return;
    }
    try {
      const result = await this.api.login({
        username: this.username,
        password: this.password,
      });
      if (result.response === 'VALID') {
        if (result.data.accessToken.payload.username) {
          this.username = result.data.accessToken.payload.username;
          this.getUserInformation();
        } else {
          throw 'Missing cognito username';
        }
      }
      if (result.response === 'NEW_PASSWORD') {
        this.userAttributes = result.data;
        delete this.userAttributes.email_verified;
        $('#formIngreso').fadeOut('fast', function () {
          $('#formNewPass').fadeIn('slow');
        });
        this.hideLoadingScreen();
      }
    } catch (error) {
      localStorage.clear();
      this.showErrorAlert({ message: 'Erorr al realizar login' });
      this.logger(error);
    }
  }

  private async getUserInformation() {
    try {
      const userInformation: any = await this.api.getUserInformation(
        this.username
      );
      const isUserDataValid = this.services.manageUserData(userInformation);
      if (!isUserDataValid) {
        this.showErrorAlert({
          message: 'Ha ocurrido un error con la información del colaborador. ',
        });
        logoutService();
      }
      setTimeout(() => {
        window.location.href = HOME_PATH;
      }, 1000);
    } catch (error) {
      this.logger(error);
      this.showErrorAlert({
        message: 'Error al almacenar la información del usuario',
      });
    }
  }
}
