const mongoose = require('mongoose');

const HoldingsSchema = require ('../schemas/HoldingShema');

const HoldingsModel = mongoose.model("holding", HoldingsSchema)

module.exports = {HoldingsModel}