import DataBaseService from 'services/dataBase.services'

const dataBaseService = new DataBaseService();

export const dataBaseChild = child => (dataBaseService.get(child));
export const dataRequest = (child, type, id, data = "") => {
  return(dataBaseService[type](child, id, data));
};
export default dataBaseChild;