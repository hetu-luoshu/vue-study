export default () => ({
    async request(url = '', option = { method: 'GET' }) {
        return await fetch(`http://127.0.0.1:3003/news/${url}`, option).then(r => r.json());
    },
    async get() {
        return await this.request();
    },
    async delete(id) {
        return await this.request(id, { method: 'DELETE' });
    },
    async post(data) {
        return await this.request('', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
});