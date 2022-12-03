const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updatethought,
  deleteThought,
} = require('../../controllers/thoughtController.js');


router.route('/').get(getThought).post(createThought);


router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updatethought)
  .delete(deleteThought);

module.exports = router;
