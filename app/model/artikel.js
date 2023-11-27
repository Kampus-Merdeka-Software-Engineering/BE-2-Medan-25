const dbPool = require('../database/db')


// di model kita ambil data
const getAllartikel = () => {
    const SQLquery = 'SELECT * FROM artikel'

    return dbPool.execute(SQLquery)
}

module.exports = {getAllartikel}