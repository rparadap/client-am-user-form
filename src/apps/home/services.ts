import { Services } from '../../components/app-base/service-base';
import {
  AxiosAcademicSection,
  AxiosFamilySection,
  AxiosLicensesSection,
  AxiosNacionalities,
  AxiosRegisterData,
  SimpleFileSection,
} from './types';

export class HomeServices extends Services {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  async mapNacionalitiesToSelectList(nacionalitiesList: AxiosNacionalities[]) {
    return nacionalitiesList.map(
      (nacionality) => new Option(nacionality.name, nacionality.name)
    );
  }

  async mapLocationsToSelectList(locationList: any) {
    const opcions: HTMLOptionElement[] = Object.keys(locationList).map(
      (key) => {
        const option = document.createElement('option');
        option.value = key;
        option.text = locationList[key];

        return option;
      }
    );

    return opcions;
  }

  async renderAcademicComponent(academicData: AxiosAcademicSection[]) {
    const htmlListCertifiedRows: Array<string> = [];
    if (academicData.length == 0) {
      const htmlCertifiedRow = `<div style="border: 1px solid #eee; padding: 0.5rem 1.75rem;margin-right:0px;margin-left:0px" class="row">
        <div class="col-12" align="center">
          <label>Sin Titulos</label>
        </div>
      </div>`;
      htmlListCertifiedRows.push(htmlCertifiedRow);
    } else {
      for (let n = academicData.length - 1; n >= 0; n--) {
        const element = academicData[n];
        const htmlCertifiedRow = `
          <div class="contend-box tituloItem">
            <button type="button" class="close certificateItem" data-id=${
              element.id
            } aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="col-md-12 row">
                <div class="col-md-8 col-sm-12">
                <h5 style="text-align: left;">${element.academicTitle}</h5>  
                </div>
                <div class="col-md-4 col-sm-12" style="align-self: self-end;text-align: right;">
                <h6 class="titulo_fecha_escolaridad" style="">Fecha de Emisión: ${
                  element.issueDate
                }</h6>
                </div>
            </div>
            <div class="col-12 row">
                <div class="col-md-8 col-sm-12">
                <p style="text-align: initial;">Tipo :  ${element.type}</p>
                ${
                  element.type == 'curso'
                    ? '<p style="text-align: initial;">Total de Horas :' +
                      element.totalHours +
                      ' </p>'
                    : '<p style="text-align: initial;">Tipo de atestado :' +
                      element.typeCertified +
                      '</p>'
                }
                </div>
                <div class="col-md-4 col-sm-12 align-bottom" style="align-self: self-end;text-align: right;">
                <a href="${
                  element.titleFile
                }" style="align-self: self-end;cursor: pointer;" download="">
                    Descargar<i class="mdi mdi-download"></i>
                </a>
                </div>
            </div>
          </div>              
        `;
        htmlListCertifiedRows.push(htmlCertifiedRow);
      }
    }

    return htmlListCertifiedRows;
  }

  async renderLicensesComponent(licenseData: AxiosLicensesSection[]) {
    const htmlListLicenseRows: Array<string> = [];
    if (licenseData.length == 0) {
      const htmlLicenseRow = `<div style="border: 1px solid #eee; padding: 0.5rem 1.75rem;margin-right:0px;margin-left:0px" class="row">
        <div class="col-12" align="center">
          <label>Sin Licencias</label>
        </div>
      </div>`;
      htmlListLicenseRows.push(htmlLicenseRow);
    } else {
      for (let n = licenseData.length - 1; n >= 0; n--) {
        const element = licenseData[n];
        const htmlLicenseRow = `
              <div id="${element.id}" class="form-group licenciaItem form-group-default padding-30" style="margin-bottom: 15px; padding: 0.825rem 1rem;">
                <button href="#" type="button" data-id="${element.id}" class="close licenseItem" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                <div class="row">
                  <div class="col-xl-12">
                    <form role="form" autocomplete="off">
                      <div class="form-group form-group-attached ">
                        <div class="row clearfix mb-3">
                          <div class="col-sm-12">
                            <div class="form-group">
                              <label style="text-transform: none !important;">Nombre de licencia</label>
                              <label type="text" style="text-transform: none !important;" name="puesto" placeholder="Nombre" class="form-control" required="">${element.licenseName}</label>
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-12">
                            <div class="form-group form-group-default ">
                              <label style="text-transform: none !important;">Fecha de Vencimiento</label>
                              <label type="text" style="text-transform: none !important;" name="fechaHoraInicio" placeholder="Fecha Vencimiento" class="form-control" required="">${element.expireDate}</label>
                            </div>
                          </div>
          
                          <div class="col-md-6 col-sm-12">
                            <div class="form-group form-group-default ">
                              <label style="text-transform: none !important;">Tipo de Licencia</label>
                              <label type="text" style="text-transform: none !important;" name="tipoLicencia" id="tipoLicencia" class="form-control" required="">${element.licenseType}</label>
                            </div>
                          </div>                          
                        </div>
                        <div class="row" style="text-align: center;">                          
                          <div class="col-sm-12 col-md-6" style="max-height: 250px;">
                              <img style="width: 50%; height: 250px;" src="${element.urlFront}" alt="Licencia Frente" class="rounded mw-100">
                          </div>
                          <div class="col-sm-12 col-md-6" style="max-height: 250px;">
                            <img style="width: 50%; height: 250px;" src="${element.urlBack}" alt="Licencia Posterior" class="rounded mw-100">
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>            
            `;
        htmlListLicenseRows.push(htmlLicenseRow);
      }
    }

    return htmlListLicenseRows;
  }

  async renderRecommendationLetterComponent(
    recommendationLetterData: SimpleFileSection[]
  ) {
    const htmlListRecommendationLetterRows: Array<string> = [];
    if (recommendationLetterData.length == 0) {
      const htmlRecommendationRow = `<div style="border: 1px solid #eee; padding: 0.5rem 1.75rem;margin-right:0px;margin-left:0px" class="row">
        <div class="col-12" align="center">
          <label>Sin Recomendación</label>
        </div>
      </div>`;
      htmlListRecommendationLetterRows.push(htmlRecommendationRow);
    } else {
      for (let n = recommendationLetterData.length - 1; n >= 0; n--) {
        const element = recommendationLetterData[n];
        const htmlRecommendationRow = `
              <div id="${element.id}" class="form-group licenciaItem form-group-default padding-30" style="margin-bottom: 15px; padding: 0.825rem 1rem;">
                <button href="#" type="button" data-id="${element.id}" class="close licenseItem" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                <div class="row">
                  <div class="col-xl-12">
                    <form role="form" autocomplete="off">
                      <div class="form-group form-group-attached ">
                        <div class="row clearfix mb-3">    
                          <div class="col-sm-12 col-md-6" style="max-height: 100px; text-align: center;">
                            <img style="width: 100px; margin-bottom: 3px; height: 100px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" class="rounded mw-100">
                            <a href="${element.url}" style="display: block;">Descargar</a>
                          </div>
                          <div class="col-sm-12 col-md-6" style="max-height: 100px; text-align: center;">
                            <img style="width: 100px; margin-bottom: 3px; height: 100px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" class="rounded mw-100">
                            <a href="${element.urlExtra}" style="display: block;">Descargar</a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>            
            `;
        htmlListRecommendationLetterRows.push(htmlRecommendationRow);
      }
    }

    return htmlListRecommendationLetterRows;
  }

  async renderDelincuenceLetterComponent(
    delincuenceLetterData: SimpleFileSection[]
  ) {
    const htmlListDelincuenceLetterRows: Array<string> = [];
    if (delincuenceLetterData.length == 0) {
      const htmlDelincuenceRow = `<div style="border: 1px solid #eee; padding: 0.5rem 1.75rem;margin-right:0px;margin-left:0px" class="row">
        <div class="col-12" align="center">
          <label>Sin Hoja De Delincuencia</label>
        </div>
      </div>`;
      htmlListDelincuenceLetterRows.push(htmlDelincuenceRow);
    } else {
      for (let n = delincuenceLetterData.length - 1; n >= 0; n--) {
        const element = delincuenceLetterData[n];
        const htmlDelincuenceRow = `
              <div id="${element.id}" class="form-group licenciaItem form-group-default padding-30" style="margin-bottom: 15px; padding: 0.825rem 1rem;">
                <button href="#" type="button" data-id="${element.id}" class="close licenseItem" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                <div class="row">
                  <div class="col-xl-12">
                    <form role="form" autocomplete="off">
                      <div class="form-group form-group-attached">
                        <div class="row clearfix mb-3">    
                          <div class="col-sm-12 col-md-12" style="max-height: 100px; text-align: center;">
                            <img style="width: 100px; margin-bottom: 3px; height: 100px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" class="rounded mw-100">
                            <a href="${element.url}" style="display: block;">Descargar</a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>            
            `;
        htmlListDelincuenceLetterRows.push(htmlDelincuenceRow);
      }
    }

    return htmlListDelincuenceLetterRows;
  }

  async renderFamilyComponent(familyData: AxiosFamilySection[]) {
    const htmlListFamilyRows: Array<string> = [];
    if (familyData.length == 0) {
      const htmlFamilyRow = `<div style="border: 1px solid #eee; padding: 0.5rem 1.75rem;margin-right:0px;margin-left:0px" class="row">
        <div class="col-12" align="center">
          <label>Sin Familiares Registrados</label>
        </div>
      </div>`;
      htmlListFamilyRows.push(htmlFamilyRow);
    } else {
      for (let k = familyData.length - 1; k >= 0; k--) {
        const htmlFamilyRow = `<tr class="data-item">
                  <td>
                    <a style="color:black;">${familyData[k].name}</a>
                  </td>
                  <td>
                    <a style="color:black;">${familyData[k].birthDate}</a>
                  </td>
                  <td>
                    <a style="color:black;">${familyData[k].phoneNumber}</a>  
                  </td>
                  <td>
                    <a style="color:black;">${familyData[k].kinship}</a>
                  </td>
                  <td  style="width: 110px;">
                    <button data-id="${familyData[k].id}" class="btn btn-primary btn-icon" title="Eliminar"><i class="mdi mdi-trash-can"></i></button>
                  </td>
              </tr>`;
        htmlListFamilyRows.push(htmlFamilyRow);
      }
    }

    return htmlListFamilyRows;
  }

  updateCertificateList(lista: AxiosRegisterData, id: string) {
    return lista.colaboratorFormData.academicRecord.filter(
      (element) => element.id != id && element
    );
  }

  updateDelincuenceLetterList(lista: AxiosRegisterData, id: string) {
    return lista.colaboratorFormData.delincuenceLetterRecord.filter(
      (element) => element.id != id && element
    );
  }

  updateRecommendationLetterList(lista: AxiosRegisterData, id: string) {
    return lista.colaboratorFormData.recommendationLetterRecord.filter(
      (element) => element.id != id && element
    );
  }

  updateFamilyList(lista: AxiosRegisterData, id: string) {
    return lista.colaboratorFormData.familyRecord.filter(
      (element) => element.id != id && element
    );
  }

  updateLicenseList(lista: AxiosRegisterData, id: string) {
    return lista.colaboratorFormData.licensesRecord.filter(
      (element) => element.id != id && element
    );
  }

  async convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64File = reader.result as string;
        resolve(base64File);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
}
