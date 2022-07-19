class InfoController {
    async getInfo() {
        const response = await fetch("http://localhost:5000/api")
        const jsonResponse = await response.json()
        return jsonResponse
    }
}

export default new InfoController()


