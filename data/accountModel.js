const db = require('./dbConfig')
module.exports = {
  create,
  del,
  update,
  get,
  getOne,
  getSet
}

// columns
const cols = ['id', 'name', 'budget'];
// tables
const acct = db('accounts');

// CRUG (create, remove, update, get) operations
// Don't handle exceptions on this layer 
// => allow for Caller to see them!

// Create
function create(data) {
  return acct
    .insert(data, cols)
    .then(res => {
    // if inserted and found, return item; if no item, return error
      if (res.length > 0) {
        return res[0];
      } else {
        return null;
      }
    })
    .catch(err => {
      return null;
    })
}

// Remove
function del(id) {
  return acct
    .where('id', id)
    .del()
}

// Update
function update(id, data) {
  return acct
    .where('id', id)
    .update(data, cols);
}

// Get
// combination method
function get(id, options = {page: 0, size: 10, order: 'id'}) {
  if (id) {
    return getOne(id);
  } else {
    return getSet(options);
  }
}
// individual methods
function getOne(id) {
  return acct
    .where('id', id)
    .first();
}
function getSet(options = {page: 0, size: 10, order: 'id'}) {
  return acct
    .orderBy(options.order)
    .offset(options.page*options.size)
    .limit(options.size);
}
