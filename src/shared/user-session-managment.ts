export function logoutService() {
  localStorage.clear();
  window.location.href = '../auth/';
}
export function isUserLoggedIn() {
  try {
    const localData = localStorage.getItem('user-local-data');

    return localData ? true : true;
  } catch (error) {
    return false;
  }
}
export function getCurrentUserData() {
  const localData = localStorage.getItem('user-local-data');

  return JSON.parse(localData || '');
}
