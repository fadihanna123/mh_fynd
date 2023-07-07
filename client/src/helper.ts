export class Helper {
  constructor() {}

  getStorage(key?: string) {
    let result;

    if (!key) {
      result = sessionStorage.getItem('lang');
    }

    result = sessionStorage.getItem(key || '');
    return result;
  }

  saveStorage(key: string, newVal: string) {
    if (!key) {
      return;
    }

    sessionStorage.setItem(key, newVal);
  }
}
