const mongoose = require('mongoose');

const Faculty = mongoose.model(
    'faculty',
    {
        title: String,
        content: String,
        parts:String,
    },
    'faculty'
);

const getAll = async () => {
    return Faculty.find({});
};

const getOne = async (id) => {
    return Faculty.findOne({_id: id});
};

const create = async (data) => {
    let faculty_name = Faculty(data);
    return faculty_name.save();
};

const updateOne = async (id, data) => {
    return Faculty.updateOne({_id: id}, data);
}

module.exports = {
    getAll,
    getOne,
    create,
    updateOne
};