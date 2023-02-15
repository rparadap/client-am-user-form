import { isUserLoggedIn } from '../../shared/user-session-managment';
import { PageFooter } from './page-footer';
import { PageHead } from './page-header';
import { PageLoader } from './page-loader';

const FOOTER_CUSTOM_ELEMENT = 'custom-footer';
const LOADER_CUSTOM_ELEMENT = 'custom-loader';
export class MainLayout {
  private pageHead;

  constructor() {
    this.pageHead = new PageHead();
    this.renderComponents();
    this.init();
  }

  private async init() {
    const isUserActive = await isUserLoggedIn();
    if (isUserActive) {
      window.location.href = '../../home/index.html';
    }
  }

  renderComponents() {
    this.pageHead.init();
    if ('customElements' in window) {
      this.renderFooter();
      this.renderLoader();
    }
  }

  private renderFooter() {
    customElements.define(FOOTER_CUSTOM_ELEMENT, PageFooter);
  }

  private renderLoader() {
    customElements.define(LOADER_CUSTOM_ELEMENT, PageLoader);
  }
}
new MainLayout();
