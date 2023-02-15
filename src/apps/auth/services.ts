import { Services } from '../../components/app-base/service-base';

export class LoginServices extends Services {
  public manageUserData(userInformation: any) {
    try {
      if (Object.keys(userInformation).length > 0) {
        if (
          userInformation.userInfo?.fotoPerfil == '../../images/icon/cuenta.png'
        ) {
          userInformation.userInfo.fotoPerfil =
            'https://testcopycuenta.s3.amazonaws.com/cuenta.png';
        }
        localStorage.setItem(
          'accesoInfo',
          JSON.stringify(userInformation.accesoInfo)
        );
        localStorage.setItem(
          'deptInfo',
          JSON.stringify(userInformation.deptInfo)
        );
        localStorage.setItem(
          'userInfo',
          JSON.stringify(userInformation.userInfo)
        );

        return true;
      } else {
        throw 'Missing user information';
      }
    } catch (error) {
      return false;
    }
  }
}
