// CRUD movie
const movieService = require("../services/movieService.js")

// Get All movie
const findAll = async (req, res, next) => {
    try {

        const data = await movieService.findAll();

        res.status(200).json(data)
    } catch(err) {
        next(err);
    }
}

// Get Detail movie
const findOne = async (req, res, next) => {
    try {
        const data = await movieService.findOne(req.params);

        res.status(200).json(data);
    } catch(err) {
        next(err);
    }
}

// Create movie
const create = async (req, res, next) => {
    try {

        const data = await movieService.create(req.body);

        res.status(201).json(data);
    } catch(err) {
        next(err);
    }
}

// Update movie
const update = async (req, res, next) => {
    try {

        const params = {
            id: req.params.id,
            body: req.body
        }
        const data = await movieService.update(params);

        res.status(200).json(data)
    } catch(err) {
        next(err);
    }
}

// Delete movie
const destroy = async (req, res, next) => {
    try {
        
        await movieService.destroy(req.params);

        res.status(200).json({message: "movie deleted..."})
    } catch(err) {
        next(err);
    }
}

const uploadImage = async (req, res, next) => {
    try {
        const data = await movieService.uploadImage({file: req.file});

        res.status(200).json({
            message: "Upload success",
            url: data
        })
    } catch(err) {
        next(err);
    }
}

module.exports = {
    findAll,
    findOne,
    create,
    update,
    destroy,
    uploadImage
}