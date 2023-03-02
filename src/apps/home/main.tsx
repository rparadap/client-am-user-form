import { Page } from '../../components/app-base/page-base';
import { HomeServices } from './services';

window.addEventListener('load', async () => {
  new Home();
});
export class Home extends Page {
  readonly services;

  constructor() {
    super();
    this.services = new HomeServices();
  }
}
