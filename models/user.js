const findOrCreate = require('mongoose-findorcreate')

module.exports = class User {
    constructor(mongooseInstance) {
        this.schema = new mongooseInstance.Schema({
              _id: String,
              levelNumber: Number,
              googleToken: String,
        });

        this.schema.plugin(findOrCreate);

        this.model = mongooseInstance.model('User', this.schema);
    }
};
