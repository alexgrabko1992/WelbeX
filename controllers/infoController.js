const db = require('../db')

class InfoController {
    async getInfo(req, res) {
        const info = await db.query('SELECT * FROM info')
        res.json(info.rows)
    }
}

module.exports = new InfoController();