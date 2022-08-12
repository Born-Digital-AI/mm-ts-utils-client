"use strict";
/**
 * Storage based on using a runtime Map object.
 * API is compatible with sessionStorage or localStorage.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FallbackStorage = void 0;
// shared map across all instances
var MODULE_DB = new Map();
var FallbackStorage = /** @class */ (function () {
    function FallbackStorage(useCommonDB) {
        if (useCommonDB === void 0) { useCommonDB = true; }
        if (useCommonDB) {
            this._items = MODULE_DB;
        }
        else {
            this._items = new Map();
        }
    }
    Object.defineProperty(FallbackStorage.prototype, "length", {
        get: function () {
            return this._items.size;
        },
        enumerable: false,
        configurable: true
    });
    FallbackStorage.prototype.getItem = function (key) {
        return this._items.get(key) || null;
    };
    FallbackStorage.prototype.key = function (key) {
        return null; // not implemented
    };
    FallbackStorage.prototype.removeItem = function (key) {
        this._items.delete(key);
    };
    FallbackStorage.prototype.setItem = function (key, value) {
        this._items.set(key, value);
    };
    FallbackStorage.prototype.clear = function () {
        this._items.clear();
    };
    return FallbackStorage;
}());
exports.FallbackStorage = FallbackStorage;
