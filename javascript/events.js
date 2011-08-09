$(document).ready(function() {

	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();

	$('#calendar').fullCalendar({
		editable: false,
		events: [
			{
				title: 'Medsoc Presentation (with Krispy Kreme sale)',
				start: '2011-09-22'
			},
			{
				title: "Freshers' fair",
				start: '2011-09-23'
			},
			{
				title: "Medsin Explained (LT3)",
				start: '2011-10-04 18:30:00'
			},
			{
				title: "Bristol Pear Student Stop AIDS Speaker Tour",
				start: '2011-10-14 19:30:00'
			},
			{
				title: "Dr Nichol Health at Guantanamo Bay (Location TBC)",
				start: '2011-11-14 18:30:00'
			},
			{
				title: "World AIDS Day Krispy Kreme and cake sale",
				start: '2011-12-01'
			},
			{
				title: "Health Poverty Action - Careers Abroad (TBC)",
				start: '2011-12-05'
			},
			{
				title: "Medsin Grants",
				start: '2011-12-13'
			},
			// {
			// 	title: 'Click for Google',
			// 	start: new Date(y, m, 28),
			// 	end: new Date(y, m, 29),
			// 	url: 'http://google.com/'
			// }
		]
	});

});