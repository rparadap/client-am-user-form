import { logoutService } from '../../shared/user-session-managment';

const HeaderComponent = () => {
  const logout = () => {
    logoutService();
  };

  return (
    <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        {' '}
        <a class="navbar-brand brand-logo" href="../home/index.html">
          <img src="../../images/logo-full.png" alt="logo" />
        </a>{' '}
        <a class="navbar-brand brand-logo-mini" href="../../index.html">
          <img src="../../images/arcelormittal-mini-logo.jpeg" alt="logo" />
        </a>{' '}
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <ul class="navbar-nav navbar-nav-right">
          <li class="nav-item dropdown">
            <div
              class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
              aria-labelledby="notificationDropdown"
            >
              <p class="mb-0 font-weight-normal float-left dropdown-header">
                Notifications
              </p>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-success">
                    <i class="mdi mdi-information mx-0"></i>
                  </div>
                </div>
                <div class="preview-item-content">
                  <h6 class="preview-subject font-weight-normal">
                    Application Error
                  </h6>
                  <p class="font-weight-light small-text mb-0 text-muted">
                    Just now
                  </p>
                </div>
              </a>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-warning">
                    <i class="mdi mdi-settings mx-0"></i>
                  </div>
                </div>
                <div class="preview-item-content">
                  <h6 class="preview-subject font-weight-normal">Settings</h6>
                  <p class="font-weight-light small-text mb-0 text-muted">
                    Private message
                  </p>
                </div>
              </a>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-info">
                    <i class="mdi mdi-account-box mx-0"></i>
                  </div>
                </div>
                <div class="preview-item-content">
                  <h6 class="preview-subject font-weight-normal">
                    New user registration
                  </h6>
                  <p class="font-weight-light small-text mb-0 text-muted">
                    2 days ago
                  </p>
                </div>
              </a>
            </div>
          </li>
          <a
            role="button"
            class="nav-link m-auto p-0"
            onClick={() => {
              logout();
            }}
            data-toggle="dropdown"
            id="profileDropdown"
          >
            {' '}
            <i class="mdi mdi-logout text-primary"> Salir</i>
          </a>
        </ul>
        <button
          class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          {' '}
          <span class="mdi mdi-menu"></span>{' '}
        </button>
      </div>
    </nav>
  );
};
export default HeaderComponent;
