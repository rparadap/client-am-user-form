import {
  isUserLoggedIn,
  logoutService,
} from '../../shared/user-session-managment';
import { render } from 'solid-js/web';
import FooterComponent from './footer-component';
import HeadComponent from './head-component';
import HeaderComponent from './header-component';
import LoaderComponent from './loader-component';
import SidebarComponent from './sidebar-component';
import { GlobalUserProvider } from './components/global-user-context';

const HEADER_CUSTOM_ELEMENT = 'custom-header';
const SIDEBAR_CUSTOM_ELEMENT = 'custom-sidebar';
const FOOTER_CUSTOM_ELEMENT = 'custom-footer';
const LOADER_CUSTOM_ELEMENT = 'custom-loader';
export class MainLayout {
  constructor() {
    this.init();
    $('#kt_body').fadeIn();
    this.renderComponents();
  }

  renderComponents() {
    if ('customElements' in window) {
      this.renderHead();
      this.renderHeader();
      this.renderFooter();
      this.renderLoader();
      this.renderSidebar();
    }
  }

  private async init() {
    const isUserActive = await isUserLoggedIn();
    if (!isUserActive) logoutService();
  }

  private renderHead() {
    const headContainer = document.getElementsByTagName('head')[0];
    headContainer && render(() => <HeadComponent />, headContainer);
  }

  private renderHeader() {
    const headerContainer = document.getElementsByTagName(
      HEADER_CUSTOM_ELEMENT
    )[0];
    headerContainer &&
      render(
        () => (
          <GlobalUserProvider>
            <HeaderComponent />
          </GlobalUserProvider>
        ),
        headerContainer
      );
  }

  private renderSidebar() {
    const sidebarContainer = document.getElementsByTagName(
      SIDEBAR_CUSTOM_ELEMENT
    )[0];
    sidebarContainer && render(() => <SidebarComponent />, sidebarContainer);
  }

  private renderFooter() {
    const footerContainer = document.getElementsByTagName(
      FOOTER_CUSTOM_ELEMENT
    )[0];
    footerContainer && render(() => <FooterComponent />, footerContainer);
  }

  private renderLoader() {
    const loaderContainer = document.getElementsByTagName(
      LOADER_CUSTOM_ELEMENT
    )[0];
    loaderContainer && render(() => <LoaderComponent />, loaderContainer);
  }
}
new MainLayout();
