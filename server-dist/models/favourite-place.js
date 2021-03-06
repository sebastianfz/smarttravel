'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var favouritePlaceSchema = new _mongoose2.default.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    placeId: {
        type: String,
        required: true,
        trim: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    }

});
// Expose the model so that it can be imported and used in the controller (to search, delete, etc)
exports.default = _mongoose2.default.model('FavouritePlace', favouritePlaceSchema);
//# sourceMappingURL=favourite-place.js.map