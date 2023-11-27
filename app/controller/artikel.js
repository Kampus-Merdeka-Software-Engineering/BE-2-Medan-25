const modelArtikel = require('../model/artikel')

// di controller kita jalanin datanya
const getAllartikel = async (req,res)=> {
    try{const [Data] = await modelArtikel.getAllartikel();

    res.json({
        message: 'sukses',
        data:Data
    })
    } catch(error){
        res.status(500).json({
            message:'ada error',
            serverMessage : error
        })
    }

}

module.exports = {getAllartikel}