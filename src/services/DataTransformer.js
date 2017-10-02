export default class DataTransformer {
  constructor(collection) {
    this.collection = collection
  }

  search(keys, phrase) {
    return new DataTransformer(this.collection.filter(row => {
      return Object.keys(row).some(name => keys.indexOf(name) > -1 && row[name].toLowerCase().indexOf(phrase.toLowerCase()) > -1)
    }))
  }

  sort(phrase, collection) {

  }

  editUser (usersEdited, newUsersData) {
    return new DataTransformer(this.collection
      .filter(row =>
        !usersEdited.some(name => name === row.email))
      .concat(newUsersData))
  }

  paginate (rowSize, page) {
    return new DataTransformer(this.collection
      .slice(rowSize * (page - 1), rowSize * page))

  }

  filerOutRemovedUsers (usersToFilterOut) {
    return new DataTransformer(this.collection
      .filter(row => !usersToFilterOut.some(name => name === row.email)))
  }
}