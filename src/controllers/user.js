const httpStatus = require("http-status");
const User = require("../models/user");

const getUser = async (req, res, next) => {
  try {
    const { id } = req.query;
    if (id && id !== "") {
      await User.findOne({ _id: id })
        .then((data) => {
          res.status(httpStatus.OK).send(data);
        })
        .catch((error) => {
          return res.status(httpStatus.BAD_REQUEST).send(error);
        });
    } else {
      await User.find()
        .then((data) => {
          res.status(httpStatus.OK).send(data);
        })
        .catch((error) => {
          return res.status(httpStatus.BAD_REQUEST).send(error);
        });
    }
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
};

const addUser = async (req, res, next) => {
  try {
    let body = req.body;
    const create = new User(body);
    await create
      .save()
      .then((data) => {
        res.status(httpStatus.OK).send(data);
      })
      .catch((error) => {
        return res.status(httpStatus.BAD_REQUEST).send(error);
      });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
};

const updateUsers = async (req, res, next) => {
  try {
    const body = req.body;
    await User.findOneAndUpdate({ _id: req.query.id }, body)
      .then((data) => {
        res.status(httpStatus.OK).send(data);
      })
      .catch((error) => {
        return res.status(httpStatus.BAD_REQUEST).send(error);
      });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await User.findOneAndDelete({ _id: req.query.id })
      .then((data) => {
        res.status(httpStatus.OK).send(data);
      })
      .catch((error) => {
        return res.status(httpStatus.BAD_REQUEST).send(error);
      });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
};

module.exports = {
  getUser,
  addUser,
  updateUsers,
  deleteUser,
  readCSV,
};
