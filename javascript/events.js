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
				start: '2011-10-04 18:30:00',
				description: "Do you want to get involved in charity at Medschool and have a lot of fun while doing something amazing? If so come along to LT3 at 6.30pm on Tuesday 4th October - get that date in your diary - it will all make sense when you arrive! All the charities in Medschool will briefly tell you what they do and then you'll have the chance to sign up for the ones you think look best. Remember, refreshments are supplied! See you there!"
			},
			{
				title: "Bristol Pear Student Stop AIDS Speaker Tour",
				start: '2011-10-14 19:30:00',
				description: "The Student Stop AIDS speaker tour is an informative and emotive event. Held in an informal setting, the Bristol Pear pub and with light refreshments provided, 3 speakers who have been affected by (but not necessarily infected by) HIV/AIDS tell us their stories. Bring as many friends as you can, this is an evening for anyone who takes an interest in people! It will start between 7 and 8pm (more details nearer the time) and as ever there will be a lively Medbar afterwards. So get a round in and settle down for interesting evening."
			},
			{
				title: "Dr Nicholl Health at Guantanamo Bay (Location TBC)",
				start: '2011-11-14 18:30:00',
				description: "Dr David Nicholl is a neurologist, human rights activist, fundraiser for Amnesty International, and online columnist from Belfast, Northern Ireland. In March 2006 he initiated a letter in the medical journal The Lancet, signed by more than 250 medical experts urging the United States to stop force-feeding at the Guantanamo Bay and close down the prison camp. Nicholl holds the position of consultant neurologist at City Hospital Hospital & Queen Elizabeth Hospital, Birmingham, and is honorary senior lecturer at the University of Birmingham."
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
			}
			// {
			// 	title: 'Click for Google',
			// 	start: new Date(y, m, 28),
			// 	end: new Date(y, m, 29),
			// 	url: 'http://google.com/'
			// }
		],
		
		eventRender: function(event, element) {
			if (event.description) {
			element.qtip({
				content: event.description
			});
			}
		}
		
	});
	
});