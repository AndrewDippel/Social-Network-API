const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updatethought,
  deleteThought,
} = require('../../controllers/thoughtController.js');

// /api/courses
router.route('/').get(getThought).post(createThought);

// /api/courses/:courseId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updatethought)
  .delete(deleteThought);

module.exports = router;
