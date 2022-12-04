const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updatethought,
  deleteThought,
  createReactions,
  deleteReactions
} = require('../../controllers/thoughtController.js');


router
  .route('/')
  .get(getThought)
  .post(createThought);

router
  .route('/api/thoughts/:thoughtId/reactions')
  .post(createReactions)

router
  .route('/api/thoughts/:thoughtId/reactionsId')
  .delete(deleteReactions);
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updatethought)
  .delete(deleteThought);

module.exports = router;
