require('dotenv').config()
const router = require('express').Router()
const controller = require('../controllers')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const fs = require('fs')
const S3 = require('aws-sdk/clients/s3')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)


const s3 = new S3({
    accessKeyId: process.env.S3_MULTER_ID,
    secretAccessKey: process.env.S3_MULTER_KEY,
    buketName: process.env.S3_MULTER_NAME,
    region: process.env.S3_MULTER_REGION
})

function uploadFile(file) {
    console.log(file)
    const fileStream = fs.createReadStream(file.path)

    const uploadParms = {
        Bucket: process.env.S3_MULTER_NAME,
        Body: fileStream,
        Key: file.filename
    }
    return s3.upload(uploadParms).promise()
}

function getFileStream(fileKey) {
    const downloadParams = {
        Key: fileKey,
        Bucket: process.env.S3_MULTER_NAME
    }

    return s3.getObject(downloadParams).createReadStream()
}


// 내정보 요청
router.get('/users', controller.users.users.get)
// 회원탈퇴
router.delete('/users', controller.users.users.delete)
// 내정보 변경
router.put('/users', controller.users.changeinfo.put)
// 로그아웃
router.get('/logout', controller.users.logout.get)
// 회원 가입
router.post('/signup', controller.users.signup.post)
// 로그인
router.post('/login', controller.users.login.post)
//개인 게시판 요청
router.get('/myProjects', controller.projects.private_post.get)
// 이미지 업로드
router.post('/image', upload.single('image'), async (req, res) => {
    console.log(req.file)
    const file = req.file
    const result = await uploadFile(file)
    await unlinkFile(file.path)
    res.status(200).send(result.Key)
})

router.get('/image/:key', (req, res) => {
    console.log(req.params)
    const key = req.params.key
    const readStream = getFileStream(key)

    readStream.pipe(res)
})

module.exports = router
