// CRUD MOVIE
const {Movie} = require("../models")

// Get All Movie
const findAll = async (params) => {
    
    const data = await Movie.findAll();

    return data;
}

// Get Detail Movie
const findOne = async (params) => {
    const data = await Movie.findOne(params);

    return data;
}

// Create Movie
const create = async (params) => {

    const data = await Movie.create(params, {returning: true});

    return data;
}

// Update Movie
const update = async (params) => {

    const {filterOption, body} = params;

    let data = await Movie.findOne(filterOption)

    if(!data)
        throw {name: "ErrorNotFound"}

    data = await data.update(body, {returning: true});

    return data;
}

// Delete Movie
const destroy = async (params) => {

    const data = await Movie.findOne(params);

    if(!data)
        throw {name: "ErrorNotFound"}

    await data.destroy();
}

module.exports = {
    findAll,
    findOne,
    create,
    update,
    destroy
}