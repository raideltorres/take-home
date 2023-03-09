export const getStringFromLocalStorage = ({ key }) => localStorage.getItem(key);
export const saveStringToLocalStorage = ({ key, value }) => localStorage.setItem(key, value);
export const deleteItemFromLocalStorage = ({ key }) => localStorage.removeItem(key);
export const getObjectFromLocalStorage = ({ key }) => JSON.parse(localStorage.getItem(key));
export const saveObjectToLocalStorage = ({ key, value }) => localStorage.setItem(key, JSON.stringify(value));
