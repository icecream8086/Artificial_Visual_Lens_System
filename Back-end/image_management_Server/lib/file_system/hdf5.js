import fs from 'fs/promises';

class JsonFile {
    constructor(file_path) {
        this.file_path = file_path;
    }

    async create_dataset(dataset_name, data) {
        let existing_data = await this.read();
        existing_data[dataset_name] = data;
        await this.write(existing_data);
    }

    async read_dataset(dataset_name) {
        let data = await this.read();
        return data[dataset_name] || null;
    }

    close() {
        this.file_path = null;
    }

    async fileExists(path) {
        try {
            await fs.access(path);
            return true;
        } catch {
            return false;
        }
    }

    async read() {
        if (!await this.fileExists(this.file_path)) {
            return {};
        }
        let data = await fs.readFile(this.file_path, 'utf8');
        return JSON.parse(data);
    }

    async write(data) {
        await fs.writeFile(this.file_path, JSON.stringify(data));
    }
    
}

export default JsonFile;