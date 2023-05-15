const faculty = require('../models/faculty');

const create = async (req, res) => {
    try {
        let data = {
            ...req.body,
            publish_date: new Date()
        };
        await faculty.create(data);
        res.redirect('/');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const update = async (req, res) => {
    try {
        let data = {
            ...req.body
        };
        await faculty.updateOne(req.params.id, data);
        res.redirect('/');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};


const remove = (req, res) => {
    res.send('Implement Remove'); 
};

module.exports = {
    create,
    update,
    remove
};