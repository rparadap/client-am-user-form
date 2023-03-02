// CSS clases
import '../../vendors/mdi/css/materialdesignicons.min.css';
import '../../vendors/flag-icon-css/css/flag-icon.min.css';
import '../../vendors/css/vendor.bundle.base.css';
import '../../css/vertical-layout-light/style.css';
import '../../css/vertical-layout-light/scrollbar.css';
import Swal from 'sweetalert2';

export class Page {
  private swalWithBootstrapButtons;

  constructor() {
    this.swalWithBootstrapButtons = this.setCustomButtons();
    this.initMainEvents();
  }

  private initMainEvents() {
    $('body').fadeIn(800, function () {
      $('.main-panel').fadeIn(50);
    });
  }

  private setCustomButtons() {
    return Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });
  }

  public showLoadingScreen() {
    $('#loader-overlay').fadeIn(500);
  }

  public hideLoadingScreen() {
    $('#loader-overlay').fadeOut(500);
  }

  public pageRedirect(url: string) {
    window.location.href = url;
  }

  public logger(error: any) {
    if (import.meta.env.VITE_ENV === 'dev') {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(error));
    }
  }

  showWarningAlert({
    errorMessage,
    url,
    loaderException,
  }: {
    errorMessage: string;
    url?: string;
    loaderException?: boolean;
  }) {
    this.swalWithBootstrapButtons
      .fire({
        title: 'Alerta',
        text: errorMessage,
        icon: 'warning',
        allowOutsideClick: false,
        allowEscapeKey: false,
        showCancelButton: false,
        confirmButtonText: 'OK',
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
    errorMessage,
    url,
    loaderException,
  }: {
    errorMessage: string;
    url?: string;
    loaderException?: boolean;
  }) {
    this.swalWithBootstrapButtons
      .fire({
        title: 'Error',
        text: errorMessage,
        icon: 'error',
        allowOutsideClick: false,
        allowEscapeKey: false,
        showCancelButton: false,
        confirmButtonText: 'OK',
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
    successMessage,
    url,
    loaderException,
  }: {
    successMessage: string;
    url?: string;
    loaderException?: boolean;
  }) {
    this.swalWithBootstrapButtons
      .fire({
        title: 'Exito',
        text: successMessage,
        icon: 'success',
        allowOutsideClick: false,
        allowEscapeKey: false,
        showCancelButton: false,
        confirmButtonText: 'OK',
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
