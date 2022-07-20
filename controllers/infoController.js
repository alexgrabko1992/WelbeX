const db = require('../db')

class InfoController {
    async getInfo(req, res) {
        const info = await db.query('SELECT * FROM info')
        res.json(info.rows)
    }
    async getQueryInfo(req, res) {
        const query = req.body
        let info;
        switch (query.option) {
            case 'equal':
                info = await db.query(`SELECT * FROM info WHERE ${query.column} = '${query.filter}'`)
                res.json(info.rows)
                break
            case 'include':
                info = await db.query(`SELECT * FROM info WHERE CAST(${query.column} as TEXT) LIKE '%${query.filter}%'`)
                res.json(info.rows)
                break
            case 'more':
                info = await db.query(`SELECT * FROM info WHERE ${query.column} > '${query.filter}'`)
                res.json(info.rows)
                break
            case 'less':
                info = await db.query(`SELECT * FROM info WHERE ${query.column} < '${query.filter}'`)
                res.json(info.rows)
                break
        }
    }
}

module.exports = new InfoController();