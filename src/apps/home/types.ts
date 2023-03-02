export type RegisterRequestDataContainerProps<T> = {
  onEdit: T;
};
export type RegisterRequestForm = {
  secondaryMail: string;
  phoneNumber: string;
  birthDate: string;
  genre: string;
  nacionality: string;
  maritalStatus: string;
  profession: string;
  province: string;
  canton: string;
  district: string;
  completeAddress: string;
  workRoute: string;
  birthPlace: string;
  shirtSize: string;
  pantsSize: string;
  shoeSize: string;
};
export type AxiosNacionalities = {
  name: string;
};
export type AxiosRegisterData = {
  colaboratorFormData: AxiosColaboratorFormData;
};
export type AxiosColaboratorFormData = {
  academicRecord: AxiosAcademicSection[];
  licensesRecord: AxiosLicensesSection[];
  familyRecord: AxiosFamilySection[];
  delincuenceLetterRecord: SimpleFileSection[];
  recommendationLetterRecord: SimpleFileSection[];
  personalnformation: RegisterRequestForm;
  identificationNumber: string;
};
export type AxiosAcademicSection = {
  academicTitle: string;
  issueDate: string;
  type: string;
  typeCertified?: string;
  totalHours?: string;
  titleFile: string;
  id: string;
};
export type AxiosLicensesSection = {
  licenseName: string;
  id: string;
  expireDate: string;
  licenseType: string;
  urlFront: string;
  urlBack: string;
};
export type AxiosFamilySection = {
  name: string;
  id: string;
  birthDate: string;
  phoneNumber: string;
  kinship: string;
};
export type FileSection = {
  academicRecord: FileProperty[];
  licensesRecord: FileProperty[];
  delincuenceLetterRecord: FileProperty[];
  recommendationLetterRecord: FileProperty[];
};
export type FileProperty = {
  file: string;
  fileExtension: string;
  sourceLocation: string;
  name: string;
  root: string;
  url?: string;
  urlExtra?: string;
};
export type SimpleFileSection = {
  id: string;
  url: string;
  urlExtra?: string;
};
