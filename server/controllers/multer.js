require('dotenv').config()
const fs = require('fs')
const S3 = require('aws-sdk/clients/s3')


const s3 = new S3({
    accessKeyId: process.env.S3_MULTER_ID,
    secretAccessKey: process.env.S3_MULTER_KEY,
    buketName: process.env.S3_MULTER_NAME,
    region: process.env.S3_MULTER_REGION
})

function uploadFile(file) {
    const fileStream = fs.createReadStream(file.path)

    const uploadParms = {
        Bucket: process.env.S3_MULTER_NAME,
        Body: fileStream,
        Key: file.filename
    }
    return s3.upload(uploadParms).promise()
}


module.exports = {
    multer: {
        post: async (req, res) => {
            const file = req.file
            console.log(file)
            const result = await uploadFile(file)
            console.log(result)
            const description = req.Body.description
            res.send('Upload Success')
        }
    }
}


// multerS3({
//     bucket: process.env.S3_MULTER_NAME,
//     contentType: multerS3.AUTO_CONTENT_TYPE,
//     acl: 'public-read-write',
//     key: (req, file, cb) => {
//       const extension = path.extname(file.originalname)
//       cb(null, Date.now().toString() + extension)
//     },
//     limits: { fileSize: 5 * 1024 * 1024 },
//   }),
// }