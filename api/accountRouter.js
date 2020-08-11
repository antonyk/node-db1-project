const account = require('../data/accountModel');
const router = require('express').Router();
module.exports = router;

// Create
router.post('/', (req, res, next) => {
  // validate body
  account.create(req.body)
  .then(result => {
    res.status(200).json({data: result})
  })
  .catch(error => {
    console.log(error);
  })
})

// Retrieve
router.get('/:id', (req, res, next) => {
  account.getOne(req.params.id)
  .then(result => {
    res.status(200).json({data: result})
  })
  .catch(error => {
    console.log(error);
  })
})
router.get('/', (req, res, next) => {
  account.getSet()
  .then(result => {
    res.status(200).json({data: result})
  })
  .catch(error => {
    console.log(error);
  })
})

// Update
router.put('/:id', (req, res, next) => {
  account.update(req.params.id, req.body)
  .then(result => {
    res.status(200).json({data: result})
  })
  .catch(error => {
    console.log(error);
  })
})

// Delete
router.delete('/:id', (req, res, next) => {
  account.del(req.params.id)
  .then(result => {
    res.status(200).json({message: OK})
  })
  .catch(error => {
    console.log(error);
  })
})


