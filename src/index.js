// @flow
// file src/index.js
const adapter = new FileSync('db.json')

// With lowdb/FileAsync
db.read()
  .then(() => console.log('database loaded!'))

// db has stars --> 
db.has('stars')
  .value()  

// sort top 15
  db.get('post')
    .filter({published: true})
    .sortBy('views')
    .take(15)
    .value()