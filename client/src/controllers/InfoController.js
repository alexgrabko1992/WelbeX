class InfoController {
    async getInfo() {
        const response = await fetch("http://localhost:5000/api/all")
        const jsonResponse = await response.json()
        return jsonResponse
    }
    async getFilteredInfo(query) {
        const response = await fetch("http://localhost:5000/api/query", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(query)
        })
        const jsonResponse = await response.json()
        return jsonResponse
    }
}

export default new InfoController()


