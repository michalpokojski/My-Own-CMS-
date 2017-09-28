export default class DataTransformer {
  constructor (collection) {
    this.collection = collection
  }

  search (keys, phrase) {
    return new DataTransformer(this.collection.filter(row => {
      return Object.keys(row).some(name => keys.indexOf(name) > -1 && row[name].toLowerCase().indexOf(phrase.toLowerCase()) > -1)
    }))
  }

  test () {
    return new DataTransformer(this.collection.map(row => 'test'))
  }

  sort (phrase, collection) {

  }

  paginate () {

  }


}