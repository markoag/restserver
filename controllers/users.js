const { response } = require('express');

const usersGet = (req, res = response) => {
    res.json({
        msg: 'get API - controlador'
    });
}
const usersPut = (req, res = response) => {
    res.json({
        msg: 'put API - controlador'
    });
}
const usersPost = (req, res = response) => {

const {nombre} = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre
    });
}
const usersDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
};