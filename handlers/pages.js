const faculty = require('../models/faculty');

const main = async (req, res) => {
    try {
        let data = await faculty.getAll();
        return res.render('main', {data});
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const facultyAdd = async (req, res) => {
    try {
        return res.render('faculty_add');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const facultyEdit = async (req, res) => {
    try {
        let data = await faculty.getOne(req.params.id);
        return res.render('faculty_edit', {data});
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    main,
    facultyAdd,
    facultyEdit
};