import fire from 'config/Fire';

const dataBase = fire.database().ref();

export default class FireBaseService {
  // Services
    get = child => (dataBase.child(child))

    create = (child, id, data) => (
      dataBase.child(child).child(id).set(data)
    )
    
    update = (child, id, data) =>(
      dataBase.child(child).child(id).update(data)
    )

    delete = (child, id, data) => (
      dataBase.child(child).child(id).remove()
    )
}