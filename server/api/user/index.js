'use strict';

var express = require('express');
var controller = require('./user.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

var passPrimaryParams = function(req, res, next) {
    req.primaryParams = req.params;
    next();
}



router.use('/:id/pages', passPrimaryParams)
router.use('/:id/pages', auth.isAuthenticated())
router.use('/:id/pages', require('../page'));


router.get('/', controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.create);

module.exports = router;
