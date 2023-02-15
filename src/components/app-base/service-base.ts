import { User } from 'entities/User';

export class Services {
  private readonly localDataUpdatedEvent = new Event(
    'localDataUpdated'
  ) as CustomEvent;

  public getLocalStorageItem(id: string): string {
    return JSON.parse(localStorage.getItem(id) || '');
  }

  public getCurrentUserData() {
    const localData = localStorage.getItem('user-local-data');
    if (!localData) {
      throw 'Missing user data';
    }

    return localData;
  }

  public async convertFileToBase64(file: File): Promise<string> {
    const fileToLoad = file;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(fileToLoad);

    return new Promise<string>((resolve) => {
      fileReader.onload = () => {
        resolve(fileReader.result as string);
      };
    });
  }

  public updateUserLocalStorageUserData(data: User) {
    const localData = JSON.parse(localStorage.getItem('user-local-data') || '');
    const updatedData = { ...localData, ...data };
    localStorage.setItem('user-local-data', JSON.stringify(updatedData));
    document.dispatchEvent(this.localDataUpdatedEvent);
  }

  public getHTMLElement(element: string) {
    return document.getElementsByTagName(element)[0];
  }
}
