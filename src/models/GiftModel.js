const connection = require('../config/connection')

class GiftModel {
   add(gift) {
      const createDate = new Date()
      const Giftdated = {...gift, createDate}
      const sql = 'INSERT INTO Gifts SET ?'

                  //query   body
      connection.query(sql, Giftdated, (error, results) => {
         if(error) {
            results.status(400).json(error)
         } else {
            results.status(201).json(results)
         }
      })
   }
}

module.exports = new GiftModel;