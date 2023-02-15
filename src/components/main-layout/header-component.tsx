import { projectBasicInformation } from '../../config/project-basic-info';
import {
  getCurrentUserData,
  isUserLoggedIn,
  logoutService,
} from '../../shared/user-session-managment';
import { useGlobalUser } from './components/global-user-context';
import DarkmodeCoponent from './header-features/header-darkmode';
import SearchbarComponent from './header-features/header-searchbar';
import img from '../../assets/media/logos/arcelormittal-logo.gif';

const HeaderComponent = () => {
  if (!isUserLoggedIn()) logoutService();
  const context = useGlobalUser();
  const { isDarkModeEnabled, isSearchEnabled } = projectBasicInformation;
  const logout = () => {
    logoutService();
  };
  document.addEventListener('localDataUpdated', () => {
    const { name, profilePicture, email } = getCurrentUserData();
    context?.setUser((user) => {
      user.name = name;
      user.profilePicture = profilePicture;
      user.email = email;

      return user;
    });
  });

  return (
    <div
      id="kt_header"
      class="header"
      data-kt-sticky="true"
      data-kt-sticky-name="header"
      data-kt-sticky-offset="{default: '200px', lg: '300px'}"
    >
      <div class="container-fluid d-flex align-items-stretch justify-content-between">
        <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
          <div class="d-flex align-items-center d-lg-none">
            <div
              class="btn btn-icon btn-active-color-primary ms-n2 me-1"
              id="kt_aside_toggle"
            >
              <span class="svg-icon svg-icon-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                    fill="currentColor"
                  />
                  <path
                    opacity="0.3"
                    d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
          </div>

          <a href="../index.html" class="d-lg-none">
            <img alt="Logo" src={img} class="mh-10px" />
          </a>

          <div
            class="btn btn-icon w-auto ps-0 btn-active-color-primary d-none d-lg-inline-flex me-2 me-lg-5"
            data-kt-toggle="true"
            data-kt-toggle-state="active"
            data-kt-toggle-target="body"
            data-kt-toggle-name="aside-minimize"
          >
            <span class="svg-icon svg-icon-2 rotate-180">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.60001 11H21C21.6 11 22 11.4 22 12C22 12.6 21.6 13 21 13H9.60001V11Z"
                  fill="currentColor"
                />
                <path
                  d="M6.2238 13.2561C5.54282 12.5572 5.54281 11.4429 6.22379 10.7439L10.377 6.48107C10.8779 5.96697 11.75 6.32158 11.75 7.03934V16.9607C11.75 17.6785 10.8779 18.0331 10.377 17.519L6.2238 13.2561Z"
                  fill="currentColor"
                />
                <rect
                  opacity="0.3"
                  x="2"
                  y="4"
                  width="2"
                  height="16"
                  rx="1"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
          <div class="d-flex align-items-stretch me-1">
            {isSearchEnabled && <SearchbarComponent />}
          </div>

          <div class="d-flex align-items-stretch flex-shrink-0">
            {isDarkModeEnabled && <DarkmodeCoponent />}
            <div
              class="d-flex align-items-center ms-2 ms-lg-3"
              id="kt_header_user_menu_toggle"
            >
              <div
                class="cursor-pointer symbol symbol-35px symbol-lg-35px"
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-attach="parent"
                data-kt-menu-placement="bottom-end"
              >
                <img
                  class="object-fit-cover"
                  alt="Pic"
                  src={context?.user().profilePicture}
                />
              </div>

              <div
                class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
                data-kt-menu="true"
              >
                <div class="menu-item px-3">
                  <div class="menu-content d-flex align-items-center px-3">
                    <div class="symbol symbol-50px me-5">
                      <img
                        class="object-fit-cover"
                        alt="Logo"
                        src={context?.user().profilePicture}
                      />
                    </div>

                    <div class="d-flex flex-column">
                      <div class="fw-bold d-flex align-items-center fs-5">
                        {context?.user().name}
                      </div>
                      <a
                        href="#"
                        class="fw-semibold text-muted text-hover-primary fs-7"
                      >
                        {context?.user().email}
                      </a>
                    </div>
                  </div>
                </div>

                <div class="separator my-2"></div>

                <div class="menu-item px-5">
                  <a href="../profile/" class="menu-link px-5">
                    Mi Perfil
                  </a>
                </div>

                <div class="separator my-2"></div>

                <div class="menu-item px-5">
                  <a
                    id="logout-button"
                    onclick={() => {
                      logout();
                    }}
                    class="menu-link px-5"
                  >
                    Salir
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderComponent;
