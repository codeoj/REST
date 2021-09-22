const connection = require('../config/connection')

class GiftModel {
   add(gift) {
      const sql = 'INSERT INTO Gifts SET ?'

                  //query   body
      connection.query(sql, gift, (error, results) => {
         if(error) {
            console.log(error)
         } else {
            console.log(results)
         }
      })
   }
}

module.exports = new GiftModel;