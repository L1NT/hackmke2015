module.exports = function (db, models) {
    models.users = db.define("user", {
		name: String,
		phone: String,
		email: String
	});
    
    models.events = db.define("events", {
		name: String,
		location: String,
		date: Date,
		organization: Number 
	}, {
		methods: {
			getDateTime: function() {
				return this.date;
			}
		},
		validations: {
			//organization: orm.find
		}
	});
};
