/**
 * @class LocalStorageSerializer
 * @description A utility class for JSON serializing and deserializing data to and from localStorage.
 */
export default class LocalStorageSerializer {
    /**
     * @constructor
     * @description Initializes the serializer with a storage key.
     * @param {string} storageKey - The key used in localStorage.
     */
    constructor(storageKey) {
        if (!storageKey || typeof storageKey !== "string") {
            throw new Error("Storage key must be a non-empty string");
        }
        this.storageKey = storageKey;
    }

    /**
     * @method save
     * @description Saves any JSON serializable data to localStorage.
     * @param {*} data - The data to be serialized and stored.
     */
    save(data) {
        try {
            const jsonString = JSON.stringify(data);
            localStorage.setItem(this.storageKey, jsonString);
        } catch (error) {
            console.error(
                `Error saving data to localStorage (${this.storageKey}):`,
                error
            );
        }
    }

    /**
     * @method load
     * @description Loads and parses data from localStorage.
     * @returns {*} - The parsed data, or null if not found or failed.
     */
    load() {
        try {
            const jsonString = localStorage.getItem(this.storageKey);
            return jsonString ? JSON.parse(jsonString) : null;
        } catch (error) {
            console.error(
                `Error loading data from localStorage (${this.storageKey}):`,
                error
            );
            return null;
        }
    }

    /**
     * @method clear
     * @description Clears the stored data from localStorage.
     */
    clear() {
        localStorage.removeItem(this.storageKey);
    }

    /**
     * @method exists
     * @description Checks if data exists in localStorage for the current key.
     * @returns {boolean}
     */
    exists() {
        return localStorage.getItem(this.storageKey) !== null;
    }
}
