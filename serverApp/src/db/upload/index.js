const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/public/')
    },
    filename: function (req, file, cb) {
        console.log(req.body)
        cb(null, Date.now().toString() + file.originalname)
    }
})

module.exports = multer({ storage })