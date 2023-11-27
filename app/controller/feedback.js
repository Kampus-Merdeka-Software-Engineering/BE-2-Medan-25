const modelFeedback = require('../model/feedback')


const feedback = async(req,res) => {
    const {body} = req;

    try {
        await modelFeedback.getAllfeedback(body);
        res.json({
            message : 'sukses input',
            data : body
        })

    } catch (error){
        res.status(500).json({
            message: 'ada input error',
            serverMessage : error
        })
    }
}

module.exports = {feedback}