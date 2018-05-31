var celebritiesModel = require('../models/celebrities');

exports.create = function (req, res) {
    // Create and Save a new celebrity
    celebritiesModel.create(req.body, function (err,data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.status(201).send();
    })
};

exports.findAll = function (req, res) {
    // Retrieve and return all notes from the database.d
    celebritiesModel.findAll(function (err, data) {
            if (err) {
                res.status(400).send(err);
                return;
            }
            res.send(data);
        }
    );
};

exports.findOne = function (req, res) {
    // Find a single note with a noteId
        celebritiesModel.findOne(req.params.celebrityId, function(err, data) {
        if (err) {
                res.status(400).send(err);
                return;
            }
        res.send(data);
    });
};

exports.update = function (req, res) {
    // Update a note identified by the noteId in the request
    var update = req.body;
    update.id = req.params.celebrityId;
    celebritiesModel.update(update, function (err,data) {
        if (err) {
            res.status(400).send(err);
            return;
            }
        res.send(data);
    })
};

exports.delete = function (req, res) {
    // Delete a note with the specified noteId in the request
    celebritiesModel.delete(req.params.celebrityId, function (err,data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.status(201).send();
    })
};