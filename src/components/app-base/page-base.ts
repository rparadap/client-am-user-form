import Swal from 'sweetalert2';

export class Page {
  private swal;

  constructor() {
    this.swal = Swal;
    this.swal.mixin({
      allowOutsideClick: false,
      allowEscapeKey: false,
      showCancelButton: false,
      confirmButtonText: 'OK',
      buttonsStyling: false,
      customClass: {},
    });
  }

  public showLoadingScreen() {
    document.body.classList.add('page-loading');
    document.body.setAttribute('data-kt-app-page-loading', 'on');
  }

  public hideLoadingScreen() {
    document.body.classList.remove('page-loading');
    document.body.removeAttribute('data-kt-app-page-loading');
  }

  public pageRedirect(url: string) {
    window.location.href = url;
  }

  public logger(error: Error | string | unknown) {
    if (import.meta.env.VITE_ENV === 'dev') {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(error));
    }
  }

  showWarningAlert({
    message,
    url,
    loaderException,
  }: {
    message: string;
    url?: string;
    loaderException?: boolean;
  }) {
    this.swal
      .fire({
        title: 'Alerta',
        text: message,
        icon: 'warning',
        customClass: {
          confirmButton: 'btn btn-warning',
          cancelButton: 'btn btn-secondary',
        },
      })
      .then((value) => {
        if (value.isConfirmed) {
          !loaderException && this.hideLoadingScreen();
          url && this.pageRedirect(url);

          return;
        }
      });
  }

  showErrorAlert({
    message,
    url,
    loaderException,
  }: {
    message: string;
    url?: string;
    loaderException?: boolean;
  }) {
    this.swal
      .fire({
        title: 'Error',
        text: message,
        icon: 'error',
        customClass: {
          confirmButton: 'btn btn-danger',
          cancelButton: 'btn btn-secondary',
        },
      })
      .then((value) => {
        if (value.isConfirmed) {
          !loaderException && this.hideLoadingScreen();
          url && this.pageRedirect(url);

          return;
        }
      });
  }

  showSuccessAlert({
    message,
    url,
    loaderException,
  }: {
    message: string;
    url?: string;
    loaderException?: boolean;
  }) {
    this.swal
      .fire({
        title: 'Exito',
        text: message,
        icon: 'success',
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-secondary',
        },
      })
      .then((value) => {
        if (value.isConfirmed) {
          !loaderException && this.hideLoadingScreen();
          url && this.pageRedirect(url);

          return;
        }
      });
  }

  showInfoAlert({
    message,
    url,
    loaderException,
  }: {
    message: string;
    url?: string;
    loaderException?: boolean;
  }) {
    this.swal
      .fire({
        title: 'Alerta',
        text: message,
        icon: 'info',
        customClass: {
          confirmButton: 'btn btn-info',
          cancelButton: 'btn btn-secondary',
        },
      })
      .then((value) => {
        if (value.isConfirmed) {
          !loaderException && this.hideLoadingScreen();
          url && this.pageRedirect(url);

          return;
        }
      });
  }
}
