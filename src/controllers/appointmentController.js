exports.appointment = (req, res) => {
   res.json({ message: "Hello check" })
}

exports.meupost = (req, res) => {
   console.log(req.body)
   res.json({ message: "Hello POST check" })
}