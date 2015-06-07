var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	req.models.events.count({name: '*'}, function(err, eventscount) {
		res.send(JSON.stringify(eventscount));
	});
	
	var data = [{
		name: '17th & Vine Playground Discussion',
		location: 'House of Peace, 1702 Walnut St, Milwuakee, WI, 53205',
		coords: '43.0261722,-88.0073259',
		date: '6/9/2015',
		time: {
			start: '5pm',
			end: '7pm'
		},
		organization: {
			name: 'MKE Plays'
		},
		contact: {
			name: 'Luke Icenogle',
			
		}
	}, {
		name: 'Park Build Day',
		location: 'Washington Park, 1234 Main, Milwuakee, WI, 53206',
		date: '11/5/2015',
		time: {
			start: '9am',
			end: '5pm'
		},
		organization: {
			name: 'We build parks',
			website: 'http://greatertogether.me'
		},
		contact: {
			name: 'John Doe',
			phone: '555-555-1234',
			email: 'john@greatertogether.me'
		}
	}, {
		name: 'Park Build Day #2',
		location: 'Washington Park, 1234 Main, Milwuakee, WI, 53206',
		date: '12/5/2015',
		time: {
			start: '9am',
			end: '5pm'
		},
		organization: {
			name: 'We build parks',
			website: 'http://greatertogether.me'
		},
		contact: {
			name: 'John Doe',
			phone: '555-555-1234',
			email: 'john@greatertogether.me'
		}
	}];
//  res.send(JSON.stringify(data));
});

module.exports = router;
