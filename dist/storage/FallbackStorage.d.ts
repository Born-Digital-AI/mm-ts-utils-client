/**
 * Storage based on using a runtime Map object.
 * API is compatible with sessionStorage or localStorage.
 *
 */
export declare class FallbackStorage {
    protected _items: Map<string, any>;
    constructor(useCommonDB?: boolean);
    get length(): number;
    getItem(key: string): any;
    key(key: number): any;
    removeItem(key: string): void;
    setItem(key: string, value: any): void;
    clear(): void;
}
