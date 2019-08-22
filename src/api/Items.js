import Base from './Base';

export default class extends Base {
    async fetchItems(url, query) {
        const data = await this.apiClient.get(url, query);

        return data;
    }

    async createItem(url, payload) {
        const data = await this.apiClient.post(url, payload);

        return data;
    }

    async deleteItem(url) {
        const data = await this.apiClient.delete(url);

        return data;
    }

    async updateItem(url, payload) {
        const data = await this.apiClient.put(url, payload);

        return data;
    }
}
