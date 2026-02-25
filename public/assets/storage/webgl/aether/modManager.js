export default class ModManager {
    constructor() {
        this.dbName = 'BrowserForgeMods';
        this.storeName = 'modpacks';
        this.db = null;
    }

    async init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, 1);
            request.onerror = (event) => reject(event.target.error);
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains(this.storeName)) {
                    db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
                }
            };
            request.onsuccess = (event) => {
                this.db = event.target.result;
                resolve();
            };
        });
    }

    async createModpack(name, description, iconBlob, modFiles, config = {}) {
        const modpack = {
            name,
            description,
            icon: iconBlob,
            mods: modFiles,
            config: {
                memory: config.memory || 'default',
                opengl: config.opengl !== undefined ? config.opengl : false,
                gc: config.gc || '',
                aggressive: config.aggressive !== undefined ? config.aggressive : false,
                width: config.width || 854,
                height: config.height || 480,
                flags: config.flags || ''
            },
            created: new Date().toISOString()
        };
        return this._addToStore(modpack);
    }

    async updateModpack(id, updates) {
        const modpack = await this.getModpack(id);
        if (!modpack) throw new Error("Modpack not found");

        const updatedModpack = { ...modpack, ...updates };

        if (!updatedModpack.config) updatedModpack.config = {};

        if (updates.config) {
            updatedModpack.config = { ...modpack.config, ...updates.config };
        }

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.put(updatedModpack);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    async getAllModpacks() {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readonly');
            const store = transaction.objectStore(this.storeName);
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    async getModpack(id) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readonly');
            const store = transaction.objectStore(this.storeName);
            const request = store.get(id);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    async deleteModpack(id) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.delete(id);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }

    async exportModpack(id) {
        const modpack = await this.getModpack(id);
        const zip = new JSZip();

        const metadata = {
            name: modpack.name,
            description: modpack.description,
            created: modpack.created,
            config: modpack.config || {}
        };
        zip.file('manifest.json', JSON.stringify(metadata, null, 2));

        if (modpack.icon) {
            zip.file('icon.png', modpack.icon);
        }

        const modsFolder = zip.folder('mods');
        for (let i = 0; i < modpack.mods.length; i++) {
            const file = modpack.mods[i];
            modsFolder.file(file.name, file);
        }

        const content = await zip.generateAsync({ type: 'blob' });
        return { blob: content, filename: `${modpack.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.browserforge` };
    }

    async importModpack(file) {
        try {
            const zip = await JSZip.loadAsync(file);
            const manifestValid = zip.file('manifest.json');
            if (!manifestValid) throw new Error("Invalid .browserforge file: missing manifest.json");

            const manifestStr = await zip.file('manifest.json').async('string');
            const manifest = JSON.parse(manifestStr);

            let iconBlob = null;
            if (zip.file('icon.png')) {
                iconBlob = await zip.file('icon.png').async('blob');
            }

            const mods = [];
            const modsFolder = zip.folder('mods');
            if (modsFolder) {
                const modFiles = [];
                zip.folder('mods').forEach((relativePath, file) => {
                    modFiles.push(file);
                });

                for (const file of modFiles) {
                    const blob = await file.async('blob');
                    const name = file.name.split('/').pop();
                    if (!name) continue;
                    mods.push(new File([blob], name));
                }
            }

            return this.createModpack(manifest.name, manifest.description, iconBlob, mods, manifest.config);
        } catch (e) {
            console.error("Import failed:", e);
            throw e;
        }
    }

    _addToStore(data) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.add(data);
            request.onsuccess = () => resolve(request.result);

            request.onerror = () => reject(request.error);
        });
    }
}

