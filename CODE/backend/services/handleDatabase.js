// data kieu object

exports.getAll = async (Model) => {
  return await Model.find();
};

exports.getOne = async (Model, data) => {
  return await Model.findOne(data);
};

exports.getById = async (Model, id) => {
  return await Model.findById(id);
};

exports.create = async (Model, data) => {
  return await Model.create(data);
};

exports.update = async (Model, id, data) => {
  return await Model.findByIdAndUpdate(id, data);
};

exports.delete = async (Model, id) => {
  return await Model.findByIdAndDelete(id);
};
