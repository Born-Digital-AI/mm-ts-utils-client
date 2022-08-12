/**
 * Storage based on using a runtime Map object.
 * API is compatible with sessionStorage or localStorage.
 *
 */
export class FallbackStorage {
    protected _length: number;
    protected _items: Map<string, any>;

    public get length() {
        return this._items.size;
    }

    public getItem(key: string) {
        return this._items[key];
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

