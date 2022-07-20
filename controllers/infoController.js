const db = require('../db')

class InfoController {
    async getInfo(req, res) {
        const info = await db.query('SELECT * FROM info')
        res.json(info.rows)
    }
    async getQueryInfo(req, res) {
        const query = req.body
        res.json(query)
    }
}

module.exports = new InfoController();