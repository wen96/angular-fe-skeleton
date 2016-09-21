'use strict';

module.exports = {
    template: 'Hello {{ $ctrl.user }}',
    controller: function() {
        this.user = 'world';
    }
};
