const dbPool = require('../database/db')


// di model kita ambil data
const getAllfeedback = (body) => {
    const SQLquery = `Insert Into feedback(First_name, Last_name, Email_address,Phone_Number, Feedback) 
                      Values ('${body.first_name}','${body.last_name}','${body.email}','${body.phone}','${body.feedback}')`

    return dbPool.execute(SQLquery)
}

module.exports = {getAllfeedback}