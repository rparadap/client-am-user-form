import { clientBasicInformation } from '../../config';

export class PageFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.getFooterComponent();
  }

  getFooterComponent() {
    return `
    <div class="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
      <!--begin::Links-->
      <div class="d-flex flex-center fw-semibold fs-6">
        <a href="${clientBasicInformation.clientURL}" class="text-muted text-hover-primary px-2"
          target="_blank">About</a>
        <a href="https://devs.keenthemes.com" class="text-muted text-hover-primary px-2"
          target="_blank">Support</a>
      </div>
      <!--end::Links-->
    </div>
        `;
  }

  /**
   * Runs each time the element is appended to or moved in the DOM
   */
  connectedCallback() {
    // eslint-disable-next-line no-console
    console.log('footer connected!', this);
  }

  /**
   * Runs when the element is removed from the DOM
   */
  disconnectedCallback() {
    // eslint-disable-next-line no-console
    console.log('footer disconnected', this);
  }
}
