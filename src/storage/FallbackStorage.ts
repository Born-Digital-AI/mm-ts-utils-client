/**
 * Storage based on using a runtime Map object.
 * API is compatible with sessionStorage or localStorage.
 *
 */

// shared map across all instances
const MODULE_DB = new Map();

export class FallbackStorage {
    protected _items: Map<string, any>;

    constructor(useCommonDB:boolean = true) {
        if(useCommonDB){
            this._items = MODULE_DB;
        }
        else{
            this._items = new Map<string, any>();
        }
    }

    public get length() {
        return this._items.size;
    }

    public getItem(key: string) {
        return this._items.get(key) || null;
    }

    public key(key: number) {
        return null; // not implemented
    }

    public removeItem(key: string) {
        this._items.delete(key);
    }

    public setItem(key: string, value: any) {
        this._items.set(key, value);
    }

    public clear() {
        this._items.clear();
    }
}

