import FireBaseService from './firebase.services'

const dataBaseService = new FireBaseService();

export const dataBaseChild = child => (dataBaseService.get(child));
export const dataRequest = (child, type, id, data = "") => {
  return(dataBaseService[type](child, id, data));
};
export default dataBaseChild;