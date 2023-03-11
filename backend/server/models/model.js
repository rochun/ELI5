const responses = require('../database/db');


exports.readResponses = () => {
  return (
    db.find({})
      .sort('createdAt')
      .then((result) => result)
      .catch((err) => {
        console.log(err);
        throw err;
      })
  );
}

exports.putResponses = (data) => {
  return (
    db.create(data)
      .then((result) => result)
      .catch((err) => {
        console.log(err);
        throw err;
      })
  );
}