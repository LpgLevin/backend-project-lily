exports.invalidPathwayError = (req, res, next) => {

    res.status(404).send({ message: 'invalid pathway'});

};