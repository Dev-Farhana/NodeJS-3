import express  from "express";
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
const upload = multer({ storage: storage })

const router = express.Router();
router.post("/", upload.single('file') ,(req,res) => {
    res.status(200).send({message: "Uploaded"})
})

export default router;