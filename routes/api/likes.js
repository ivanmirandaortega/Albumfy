const express = require('express');
const router = express.Router();
const likesCtrl = require('../../controllers/likes')
/*---------- Public Routes ----------*/
router.post('/posts/:id/likes', likesCtrl.create)
router.delete('/likes/:id', likesCtrl.deleteLike)

/*---------- Protected Routes ----------*/

module.exports = router;