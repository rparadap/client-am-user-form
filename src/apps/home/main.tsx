import { render } from 'solid-js/web';
import { Page } from '../../components/app-base/page-base';
import { HomeAPI } from './api';
import RegisterRequestDataContainer from './components/register-request-data-container';
import { HomeServices } from './services';
import 'dropify/dist/js/dropify';
import 'dropify/dist/css/dropify.css';
import {
  AxiosAcademicSection,
  AxiosFamilySection,
  AxiosLicensesSection,
  AxiosRegisterData,
  FileProperty,
  FileSection,
  RegisterRequestForm,
  SimpleFileSection,
} from './types';
import moment from 'moment';

window.addEventListener('load', async () => {
  const RegisterRequestPage = new Home();
  try {
    RegisterRequestPage.showLoadingScreen();
    await RegisterRequestPage.renderComponents();
    await RegisterRequestPage.init();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    RegisterRequestPage.logger(error);
    RegisterRequestPage.showErrorAlert({ errorMessage: 'Error Inesperado' });
  }
});
export class Home extends Page {
  readonly api;

  readonly services;

  private addCertificate: any;

  private addLicense: any;

  private addFamilyMember: any;

  private addDelincuenceForm: any;

  private modalRecommendationLetter: any;

  private selectNacionalities: JQuery<HTMLElement>;

  private fileSection: FileSection = {
    academicRecord: [],
    licensesRecord: [],
    delincuenceLetterRecord: [],
    recommendationLetterRecord: [],
  };

  private selectProvinces: JQuery<HTMLSelectElement>;

  private selectCanton: JQuery<HTMLSelectElement>;

  private selectDistrict: JQuery<HTMLSelectElement>;

  private selectTitleType: JQuery<HTMLElement>;

  private divHourModalCourse: JQuery<HTMLElement>;

  private divTypeCertified: JQuery<HTMLElement>;

  private divRowCertifies: JQuery<HTMLElement>;

  private divRowLicenses: JQuery<HTMLElement>;

  private divRowDelincuenceLetter: JQuery<HTMLElement>;

  private divRowRecommendationLetter: JQuery<HTMLElement>;

  private divRowFamily: JQuery<HTMLElement>;

  private inputAcademicTitle: JQuery<HTMLElement>;

  private inputTotalHours: JQuery<HTMLElement>;

  private inputTitleType: JQuery<HTMLElement>;

  private inputIssueDate: JQuery<HTMLElement>;

  private tableBodyContainer: JQuery<HTMLElement>;

  private btnSaveCertificate: JQuery<HTMLButtonElement>;

  private btnSaveLicense: JQuery<HTMLButtonElement>;

  private btnSaveDelicuenceLetter: JQuery<HTMLButtonElement>;

  private btnSaveFamilyMember: JQuery<HTMLButtonElement>;

  private btnSaveRecommendationLetter: JQuery<HTMLButtonElement>;

  private inputLicenseName: JQuery<HTMLElement>;

  private inputExpireDate: JQuery<HTMLElement>;

  private inputLicenseType: JQuery<HTMLElement>;

  private inputFamilyMemberName: JQuery<HTMLElement>;

  private inputFamilyMemberBirthDate: JQuery<HTMLElement>;

  private inputFamilyMemberPhone: JQuery<HTMLElement>;

  private inputFamilyMemberKinship: JQuery<HTMLElement>;

  private formData: AxiosRegisterData;

  constructor() {
    super();
    this.api = new HomeAPI();
    this.services = new HomeServices();
  }

  async init() {
    this.divHourModalCourse = $('#divModal_horasCurso');
    this.divTypeCertified = $('#divModal_tipoAtestado');
    this.divRowCertifies = $('#divRowTitles');
    this.divRowLicenses = $('#divRowLicenses');
    this.divRowFamily = $('#divFamilyList');
    this.inputTotalHours = $('#input_totalHorasCurso');
    this.inputTitleType = $('#input_tipoAtestados');
    this.inputAcademicTitle = $('#input_nombreTitulo');
    this.inputIssueDate = $('#input_fechaEmision');
    this.selectNacionalities = $('#selectNacionality');
    this.selectProvinces = $('#input_selectProvincia');
    this.selectCanton = $('#input_selectCanton');
    this.selectDistrict = $('#input_selectDistrito');
    this.selectTitleType = $('#input_tipoTitulos');
    this.addCertificate = $('#modalTitulo');
    this.addFamilyMember = $('#modalFamilia');
    this.addDelincuenceForm = $('#modalDelincuence');
    this.addLicense = $('#modalLicencia');
    this.modalRecommendationLetter = $('#modalRecommendationLetter');
    this.btnSaveCertificate = $('#btn-saveTitulo');
    this.btnSaveLicense = $('#btn-saveLicencia');
    this.btnSaveDelicuenceLetter = $('#btn-saveDelincuence');
    this.btnSaveFamilyMember = $('#btn-saveFamiliar');
    this.btnSaveRecommendationLetter = $('#btn-saveRecommendationLetter');
    this.inputLicenseName = $('#input_licenciaNombre');
    this.inputExpireDate = $('#input_fechaVencimientolic');
    this.inputLicenseType = $('#input_tipoLicencia');
    this.inputFamilyMemberName = $('#input_miembroFamiliaNombre');
    this.inputFamilyMemberBirthDate = $('#input_fechaNacimiento');
    this.inputFamilyMemberPhone = $('#input_telefono');
    this.inputFamilyMemberKinship = $('#input_parentesco');
    this.divRowDelincuenceLetter = $('#divRowDelincuence');
    this.divRowRecommendationLetter = $('#divRowRecomendations');
    await this.initServices();
    this.tableBodyContainer = $('#bodySection');
    this.initComponents();
    this.initEvents();
  }

  async initEvents() {
    this.divRowCertifies.click((event: any) => {
      this.certificatesRowsEventListener(event);
    });
    this.divRowRecommendationLetter.click((event: any) => {
      this.recommendationLetterRowsEventListener(event);
    });
    this.divRowDelincuenceLetter.click((event: any) => {
      this.delincuenceLetterRowsEventListener(event);
    });
    this.tableBodyContainer.click((event: any) => {
      this.familiesRowsEventListener(event);
    });
    this.divRowLicenses.click((event: any) => {
      this.licensesRowsEventListener(event);
    });
    this.selectTitleType.change(() => {
      this.controlCourseTypeBehavior();
    });
    this.btnSaveCertificate.click(() => {
      this.saveCertificate();
    });
    this.btnSaveRecommendationLetter.click(() => {
      this.saveRecommendationLetter();
    });
    this.btnSaveDelicuenceLetter.click(() => {
      this.saveDelincuenceLetter();
    });
    this.btnSaveLicense.click(() => {
      this.saveLicense();
    });
    this.btnSaveFamilyMember.click(() => {
      this.saveFamilyMember();
    });
    this.selectProvinces.change(async () => {
      await this.getCanton();
      await this.getDistrict();
    });
    this.selectCanton.change(async () => {
      await this.getDistrict();
    });
  }

  async initServices() {
    await this.getNacionalities();
    await this.getProvinces();
    await this.getCanton();
    await this.getDistrict();
    this.formData = await this.api.getFormData();
    await this.fillFormCertificatesSection(
      this.formData.colaboratorFormData.academicRecord
    );
    await this.fillFormLicensesSection(
      this.formData.colaboratorFormData.licensesRecord
    );
    await this.fillFormFamilySection(
      this.formData.colaboratorFormData.familyRecord
    );
    await this.fillRecommendationSection(
      this.formData.colaboratorFormData.recommendationLetterRecord
    );
    await this.fillDelincuenceLetterSection(
      this.formData.colaboratorFormData.delincuenceLetterRecord
    );
  }

  async certificatesRowsEventListener(event: any) {
    const targetElement = $(event.target);
    if ($.contains($(this.divRowCertifies)[0], targetElement[0])) {
      const closestButton = targetElement.closest('button');
      const buttonDataId = closestButton.attr('data-id');
      if (buttonDataId != undefined) this.refreshCertifiedList(buttonDataId);
    }
  }

  async recommendationLetterRowsEventListener(event: any) {
    const targetElement = $(event.target);
    if ($.contains($(this.divRowRecommendationLetter)[0], targetElement[0])) {
      const closestButton = targetElement.closest('button');
      const buttonDataId = closestButton.attr('data-id');
      if (buttonDataId != undefined)
        this.refreshRecommendationLetterList(buttonDataId);
    }
  }

  async delincuenceLetterRowsEventListener(event: any) {
    const targetElement = $(event.target);
    if ($.contains($(this.divRowDelincuenceLetter)[0], targetElement[0])) {
      const closestButton = targetElement.closest('button');
      const buttonDataId = closestButton.attr('data-id');
      if (buttonDataId != undefined)
        this.refreshDelincuenceLetterList(buttonDataId);
    }
  }

  async licensesRowsEventListener(event: any) {
    const targetElement = $(event.target);
    if ($.contains($(this.divRowLicenses)[0], targetElement[0])) {
      const closestButton = targetElement.closest('button');
      const buttonDataId = closestButton.attr('data-id');
      if (buttonDataId != undefined) this.refreshLicenseList(buttonDataId);
    }
  }

  async familiesRowsEventListener(event: any) {
    const targetElement = $(event.target);
    if ($.contains($(this.tableBodyContainer)[0], targetElement[0])) {
      const closestButton = targetElement.closest('button');
      const buttonDataId = closestButton.attr('data-id');
      if (buttonDataId != undefined) this.refreshFamilyList(buttonDataId);
    }
  }

  async fillFormCertificatesSection(academicData: AxiosAcademicSection[]) {
    $(this.divRowCertifies).empty();
    const htmlCertifiesComponent = await this.services.renderAcademicComponent(
      academicData
    );
    $(this.divRowCertifies).append(htmlCertifiesComponent.join(''));
  }

  async fillFormLicensesSection(licenseData: AxiosLicensesSection[]) {
    $(this.divRowLicenses).empty();
    const htmlLicensesComponent = await this.services.renderLicensesComponent(
      licenseData
    );
    $(this.divRowLicenses).append(htmlLicensesComponent.join(''));
  }

  async fillRecommendationSection(recommendationData: SimpleFileSection[]) {
    $(this.divRowRecommendationLetter).empty();
    const htmlRecommendationComponent =
      await this.services.renderRecommendationLetterComponent(
        recommendationData
      );
    $(this.divRowRecommendationLetter).append(
      htmlRecommendationComponent.join('')
    );
  }

  async fillDelincuenceLetterSection(delincuenceData: SimpleFileSection[]) {
    $(this.divRowDelincuenceLetter).empty();
    const htmlDelincuenceComponent =
      await this.services.renderDelincuenceLetterComponent(delincuenceData);
    $(this.divRowDelincuenceLetter).append(htmlDelincuenceComponent.join(''));
  }

  async fillFormFamilySection(familyData: AxiosFamilySection[]) {
    $('#bodySection').empty();
    if (familyData.length == 0) {
      $(this.divRowFamily).hide();
    } else {
      const htmlFamilyComponent = await this.services.renderFamilyComponent(
        familyData
      );
      $(this.divRowFamily).show();
      $('#divFamilyList tbody').append(htmlFamilyComponent.join(''));
    }
  }

  async getNacionalities() {
    const nacionalitiesList = await this.api.requestNacionalitiesList();
    const nacionalitiesSelectOptions =
      await this.services.mapNacionalitiesToSelectList(nacionalitiesList);
    this.selectNacionalities.append(nacionalitiesSelectOptions);
  }

  async getProvinces() {
    const provincesList = await this.api.requestProvincesList();
    const provincesSelectOptions = await this.services.mapLocationsToSelectList(
      provincesList
    );
    this.selectProvinces.append(provincesSelectOptions);
  }

  async getCanton() {
    $(this.selectCanton).empty();
    const selectedProvince = this.selectProvinces.val();
    const cantonList = await this.api.requestCantonList(selectedProvince);
    const cantonSelectOptions = await this.services.mapLocationsToSelectList(
      cantonList
    );
    this.selectCanton.append(cantonSelectOptions);
  }

  async getDistrict() {
    $(this.selectDistrict).empty();
    const selectedProvince = this.selectProvinces.val();
    const selectedCanton = this.selectCanton.val();
    const districtList = await this.api.requestDistrictList(
      selectedProvince,
      selectedCanton
    );
    const districtSelectOptions = await this.services.mapLocationsToSelectList(
      districtList
    );
    this.selectDistrict.append(districtSelectOptions);
  }

  async uploadFile(file: string, property: keyof FileSection, folder: string) {
    const fileInput = $(file);
    const selectedFile = fileInput.prop('files')[0];
    let param: FileProperty = {
      file: '',
      fileExtension: '',
      sourceLocation: '',
      name: '',
      root: '',
    };
    await this.services
      .convertFileToBase64(selectedFile)
      .then((base64File) => {
        param = {
          file: base64File,
          fileExtension: selectedFile.name.split('.')[1],
          sourceLocation: folder,
          name: selectedFile.name,
          root: 'colaborador-planilla-media',
        };
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
    await this.processUploadedFile(param, property, file);
  }

  async processUploadedFile(
    param: FileProperty,
    property: keyof FileSection,
    file: string
  ) {
    try {
      const results = await Promise.allSettled([
        this.api.requestFileUrl(param),
      ]);
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          if (
            file == '#file_fotoLicenciaAtras' ||
            file == '#file_recommendationLetterExtra'
          )
            param.urlExtra = result.value.url;
          param.url = result.value.url;
          this.fileSection[property].push(param);
        }
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  async saveCertificate() {
    this.fileSection.academicRecord = [];
    await this.uploadFile(
      '#file_archivoPdfTitulo',
      'academicRecord',
      'titulos'
    );
    const paramsCertificate = {
      academicTitle: $(this.inputAcademicTitle).val(),
      issueDate: $(this.inputIssueDate).val(),
      type: $(this.selectTitleType).val(),
      titleFile: this.fileSection.academicRecord[0].url,
      id: moment().format('YYYYMMDDHHmmssSSS'),
    } as AxiosAcademicSection;
    if (paramsCertificate.type == 'curso') {
      paramsCertificate.totalHours = $(this.inputTotalHours).val()?.toString();
    } else {
      paramsCertificate.typeCertified = $(this.inputTitleType)
        .val()
        ?.toString();
    }
    this.formData.colaboratorFormData.academicRecord.push(paramsCertificate);
    await this.fillFormCertificatesSection(
      this.formData.colaboratorFormData.academicRecord
    );
    this.addCertificate.modal('hide');
    //TODO: Validar archivos, Limpiar campos del modal
  }

  async saveRecommendationLetter() {
    this.fileSection.recommendationLetterRecord = [];
    await this.uploadFile(
      '#file_recommendationLetter',
      'recommendationLetterRecord',
      'recomendacion'
    );
    await this.uploadFile(
      '#file_recommendationLetterExtra',
      'recommendationLetterRecord',
      'recomendacion'
    );
    const paramsRecommendationLetter = {
      id: moment().format('YYYYMMDDHHmmssSSS'),
      url: this.fileSection.recommendationLetterRecord[0].url,
      urlExtra: this.fileSection.recommendationLetterRecord[1].url,
    } as SimpleFileSection;
    this.formData.colaboratorFormData.recommendationLetterRecord.push(
      paramsRecommendationLetter
    );
    await this.fillRecommendationSection(
      this.formData.colaboratorFormData.recommendationLetterRecord
    );
    this.modalRecommendationLetter.modal('hide');
    //TODO: Validar archivos, Limpiar campos del modal
  }

  async saveDelincuenceLetter() {
    this.fileSection.delincuenceLetterRecord = [];
    await this.uploadFile(
      '#file_delincuenceLetter',
      'delincuenceLetterRecord',
      'hoja_delincuencia'
    );
    const paramsDelincuenceLetter = {
      id: moment().format('YYYYMMDDHHmmssSSS'),
      url: this.fileSection.delincuenceLetterRecord[0].url,
    } as SimpleFileSection;
    this.formData.colaboratorFormData.delincuenceLetterRecord.push(
      paramsDelincuenceLetter
    );
    await this.fillDelincuenceLetterSection(
      this.formData.colaboratorFormData.delincuenceLetterRecord
    );
    this.addDelincuenceForm.modal('hide');
    //TODO: Validar archivos, Limpiar campos del modal
  }

  async saveLicense() {
    this.fileSection.licensesRecord = [];
    await this.uploadFile(
      '#file_fotoLicenciaFrente',
      'licensesRecord',
      'licencias'
    );
    await this.uploadFile(
      '#file_fotoLicenciaAtras',
      'licensesRecord',
      'licencias'
    );
    const paramsLicense = {
      licenseName: $(this.inputLicenseName).val(),
      id: moment().format('YYYYMMDDHHmmssSSS'),
      expireDate: $(this.inputExpireDate).val(),
      licenseType: $(this.inputLicenseType).val(),
      urlFront: this.fileSection.licensesRecord[0].url,
      urlBack: this.fileSection.licensesRecord[1].url,
    } as AxiosLicensesSection;
    this.formData.colaboratorFormData.licensesRecord.push(paramsLicense);
    await this.fillFormLicensesSection(
      this.formData.colaboratorFormData.licensesRecord
    );
    this.addLicense.modal('hide');
    //TODO: Validar archivos, Limpiar campos del modal
  }

  async saveFamilyMember() {
    const paramsFamilyMember = {
      name: $(this.inputFamilyMemberName).val(),
      id: moment().format('YYYYMMDDHHmmssSSS'),
      birthDate: $(this.inputFamilyMemberBirthDate).val(),
      phoneNumber: $(this.inputFamilyMemberPhone).val(),
      kinship: $(this.inputFamilyMemberKinship).val(),
    } as AxiosFamilySection;
    this.formData.colaboratorFormData.familyRecord.push(paramsFamilyMember);
    await this.fillFormFamilySection(
      this.formData.colaboratorFormData.familyRecord
    );
    this.addFamilyMember.modal('hide');
    //TODO: Validar archivos, Limpiar campos del modal
  }

  async controlCourseTypeBehavior() {
    const currVal = $(this.selectTitleType).val();
    if (currVal == 'curso') {
      $(this.divHourModalCourse).show();
      $(this.inputTotalHours).prop('required', true);
      $(this.inputTitleType).prop('required', false);
      $(this.divTypeCertified).hide();
    } else {
      $(this.divHourModalCourse).hide();
      $(this.inputTotalHours).prop('required', false);
      $(this.inputTitleType).prop('required', true);
      $(this.divTypeCertified).show();
    }
  }

  async refreshCertifiedList(certifiedToEliminate: string) {
    this.formData.colaboratorFormData.academicRecord =
      this.services.updateCertificateList(this.formData, certifiedToEliminate);
    await this.fillFormCertificatesSection(
      this.formData.colaboratorFormData.academicRecord
    );
  }

  async refreshRecommendationLetterList(recommendationToEliminate: string) {
    this.formData.colaboratorFormData.recommendationLetterRecord =
      this.services.updateRecommendationLetterList(
        this.formData,
        recommendationToEliminate
      );
    await this.fillRecommendationSection(
      this.formData.colaboratorFormData.recommendationLetterRecord
    );
  }

  async refreshDelincuenceLetterList(delincuenceToEliminate: string) {
    this.formData.colaboratorFormData.delincuenceLetterRecord =
      this.services.updateDelincuenceLetterList(
        this.formData,
        delincuenceToEliminate
      );
    await this.fillDelincuenceLetterSection(
      this.formData.colaboratorFormData.delincuenceLetterRecord
    );
  }

  async refreshFamilyList(memberToEliminate: string) {
    this.formData.colaboratorFormData.familyRecord =
      this.services.updateFamilyList(this.formData, memberToEliminate);
    await this.fillFormFamilySection(
      this.formData.colaboratorFormData.familyRecord
    );
  }

  async refreshLicenseList(licenseToEliminate: string) {
    this.formData.colaboratorFormData.licensesRecord =
      this.services.updateLicenseList(this.formData, licenseToEliminate);
    await this.fillFormLicensesSection(
      this.formData.colaboratorFormData.licensesRecord
    );
  }

  async initComponents() {
    ($('.dropify') as any).dropify();
  }

  async renderComponents() {
    try {
      if ('customElements' in window) {
        const userProfileContainer = this.services.getHTMLElement(
          'form-colaborator-register-container'
        );
        render(
          () => <RegisterRequestDataContainer onEdit={this} />,
          userProfileContainer
        );
      }
    } catch (error) {
      this.logger(error);
      this.showErrorAlert({
        errorMessage: 'Error al cargar el formulario de registro',
      });
    } finally {
      this.hideLoadingScreen();
    }
  }

  async openCertificateModal() {
    this.addCertificate.modal('show');
  }

  async openLicenseModal() {
    this.addLicense.modal('show');
  }

  async openFamilyModal() {
    this.addFamilyMember.modal('show');
  }

  async openDelincuenceModal() {
    this.addDelincuenceForm.modal('show');
  }

  async openRecommendationModal() {
    this.modalRecommendationLetter.modal('show');
  }

  async saveFormData(formPersonalInfomation: RegisterRequestForm) {
    try {
      this.showLoadingScreen();
      this.formData.colaboratorFormData.personalnformation =
        formPersonalInfomation;
      const saveFormResp = await this.api.saveFormData(this.formData);
      if (!saveFormResp) throw 'Invalid response data';
    } catch (error) {
      this.logger(error);
      this.showErrorAlert({
        errorMessage: 'Error al guardar evento en el calendario',
      });
    } finally {
      this.hideLoadingScreen();
      this.showSuccessAlert({
        successMessage: 'Registro creado correctamente',
        url: 'index.html',
        loaderException: true,
      });
    }
  }
}
