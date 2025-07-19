const multer = require('multer')

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }
})

const uploadImages = upload.array('image', 10)
const uploadAvatar = upload.single('avatar')

module.exports = {
  uploadImages,
  uploadAvatar
}
