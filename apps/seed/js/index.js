'use strict';

import angular from 'angular';
import appComponent from './component';

module.exports = angular.module('myApp', []);

module.exports.component('appComponent', appComponent);
