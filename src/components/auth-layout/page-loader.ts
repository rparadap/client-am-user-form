export class PageLoader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.getPageLoader();
    this.init();
  }

  private init() {
    const loadingEl = document.createElement('div');
    document.body.prepend(loadingEl);
    loadingEl.classList.add('page-loader');
    loadingEl.classList.add('flex-column');
    loadingEl.innerHTML = `
        <span class="spinner-border text-primary" role="status"></span>
        <span class="text-muted fs-6 fw-semibold mt-5">Loading...</span>
    `;
  }

  private getPageLoader() {
    return `
    <div class="page-loader flex-column">
        <span class="spinner-border text-primary" role="status"></span>
        <span class="text-muted fs-6 fw-semibold mt-5">Loading...</span>
    </div> 
    `;
  }
}
