const GiftModel = require('../models/GiftModel')

exports.homeGift = (req, res) => {
   res.send('hã?')

   const newGiftModel = req.body;

   GiftModel.add(newGiftModel)
}