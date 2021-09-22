class GiftTable {
   init(connection) {
      this.connection = connection;

      this.createGifts()
   }

   createGifts() {
      const sql = 'CREATE TABLE IF NOT EXISTS Gifts (id int NOT NULL AUTO_INCREMENT, description text NOT NULL, site varchar(50), price int NOT NULL, PRIMARY KEY(id))'

      this.connection.query(sql, (error) => {
         if(error) {
            console.log(error);
         } else {
            console.log("Created success");
         }
      })
   }
}

module.exports = new GiftTable;