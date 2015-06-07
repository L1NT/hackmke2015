module.exports = function(db, callback) {
	return db.define("events", {
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
}
