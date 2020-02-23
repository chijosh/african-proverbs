const Proverb = require('../models/proverbModel');
const factory = require('./handlerFactory');

exports.createProverb = factory.createOne(Proverb);
exports.getAllProverb = factory.getAll(Proverb);
