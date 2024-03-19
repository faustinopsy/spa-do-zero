export class ApiLocalStorage {
    static setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getItem(key, defaultValue) {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    }
}
