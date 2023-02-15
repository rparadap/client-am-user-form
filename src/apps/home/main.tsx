import { Page } from '../../components-old/app-base/page-base';
import BasicTableComponent from '../../components-old/table/basic-table';
import { render } from 'solid-js/web';
import { HomeServices } from './services';
import { TableHeader } from 'components/table/types';

window.addEventListener('load', async () => {
  new Home();
});
export class Home extends Page {
  readonly services;

  constructor() {
    super();
    this.services = new HomeServices();
    this.renderComponents();
  }

  private renderComponents() {
    if ('customElements' in window) {
      const data = [
        {
          name: 'Emily',
          lastname: 'Davis',
          office: 'Madrid',
          age: 25,
          start: '2015/02/01',
          detail: '',
        },
      ];
      const header: TableHeader[] = [
        { name: 'name', title: 'Nombre', type: 'text', width: 100 },
        { name: 'lastname', title: 'Apellido', type: 'text', width: 100 },
        { name: 'office', title: 'Officina', type: 'text', width: 100 },
        { name: 'age', title: 'Edad', type: 'text', width: 100 },
        { name: 'start', title: 'Fecha Inicio', type: 'text', width: 100 },
        {
          name: 'detail',
          title: 'Detalles',
          type: 'control',
          controlType: 'danger',
        },
      ];
      const userProfileContainer = this.services.getHTMLElement('basic-table');
      render(
        () => (
          <BasicTableComponent
            title={'Solicitudes de Proveedor'}
            data={data}
            header={header}
            pageSize={5}
            isTableStriped
            isSearchEnabled
            isExportEnabled
          />
        ),
        userProfileContainer
      );
    }
  }
}
