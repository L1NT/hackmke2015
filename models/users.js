module.exports = function(db, models) {
	db.define("user", {
		name: String,
		phone: String,
		email: String
	});
}
