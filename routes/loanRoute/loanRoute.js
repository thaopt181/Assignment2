const express = require('express');
const router = express.Router();
const { getAll, getById, create, getByMemberId } = require('../../controllers/loanController/loanController');

router.get('/member/:memberId', getByMemberId);

router.route('/')
    .get(getAll)
    .post(create);

router.route('/:id')
    .get(getById);

module.exports = router;