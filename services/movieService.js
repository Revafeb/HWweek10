// CRUD movie
const movieRepository = require("../repositories/movieRepository.js")

// Get All movies
const findAll = async (params) => {

    const data = await movieRepository.findAll();

    return data;
}

// Get Detail movie
const findOne = async (params) => {

    const { id } = params;

    const filterOption = {
        where: {
            id: +id
        }
    }

    const data = await movieRepository.findOne(filterOption);

    if (!data) {
        throw { name: "ErrorNotFound" }
    }

    return data;
}

// Create movie
const create = async (params) => {

    const data = await movieRepository.create(params)
    return data;
}

// Update movie
const update = async (params) => {

    const { id, body } = params;

    const filterOption = {
        where: {
            id: +id
        }
    }

    const updateParams = {
        filterOption,
        body
    }

    const data = await movieRepository.update(updateParams);

    return data;
}

// Delete movie
const destroy = async (params) => {

    const { id } = params;

    const filterOption = {
        where: {
            id: +id
        }
    }

    await movieRepository.destroy(filterOption);


}

const uploadImage = async (params) => {

    const { file } = params;

    if (!file)
        throw { name: "InvalidFile" }

    const allowedExtensions = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

    if (allowedExtensions.includes(file.mimetype)) {
        const imageUrl = `http://localhost:3000/api/images/${file}`
        return imageUrl;
    } else {
        throw { name: "InvalidExt" }
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