const Post = require("../models/post")
const S3 = require("aws-sdk/clients/s3")
const { v4: uuidv4 } = require("uuid")

const s3 = new S3()

module.exports = {
    create,
    index
}

function create(req, res) {
    console.log(req.file, req.body, req.user, '<- this is create method')
    try {
        const filePath = `${uuidv4()}/${req.file.originalname}`
        const params = { Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer }
        s3.upload(params, async function (err, data) {
            console.log(err, '< from aws')
            const post = await Post.create({ caption: req.body.caption, user: req.user, photoUrl: data.Location })
            console.log(post, '< post from create')
            await post.populate('user')
            res.status(201).json({ post: post })
        })
    } catch (err) {
        console.log(err)
        res.json({ data: err })
    }
}

async function index(req, res) {
    try {
        const posts = await Post.find({}).populate('user').exec()
        res.status(200).json({ posts })
    } catch (err) {
        res.status(400).json({ err })
    }
}