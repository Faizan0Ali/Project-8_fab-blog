const blogModel = require("../Models/blog.Model")

const uploadFile = require('./awsController')
const awsController = require('./awsController')

const postBlog = async (req, res) => {
    try {
        const data = req.body
        let files = req.files

        const { title, summary, img } = data

        if (!title) return res.status(400).send({ status: false, msg: "Title is required" })
        if (!summary) return res.status(400).send({ status: false, msg: "Summary is required" })

        if (files && files.length > 0) {

            let uploadedFileURL = await awsController.uploadFile(files[0])
            data.img = uploadedFileURL
        }

        const postBlog = await blogModel.create(data)

        let sendData = {
            title: postBlog.title,
            summary: postBlog.summary,
            img : postBlog.img
        }

        return res.status(201).send({ status: true, msg: "Created successfully", data: sendData })
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })

    }
}
const getBlog = async (req, res) => {
    try {


        const getBlog = await blogModel.find().sort({ 'createdAt': -1 })

        let sendData = {
            title: getBlog.title,
            summary: getBlog.summary
        }

        return res.status(200).send({ status: true, data: getBlog })
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })

    }
}


module.exports = { postBlog, getBlog }