var directory = {
		views: {},
		models: {},
		
		loadTemplates: function(view, callback) {
			var deferreds = [];
			$.each(view, function(index, view) {
				if (directory[view]) {
					deferreds.push($.get('tpl/' + view + '.html', function(data) {
						directory[view].prototype.template = _.template(data);
					}, 'html'));
				} else {
					alert(view + " not found");
				}
			});
			$.when.apply(null, deferreds).done(callback);
		}
};

directory.Router = Backbone.Router.extend({
	routes: {
		"": 'login'
		//"home": "home"
	}, 
	
	initialize: function() {
		console.log('Router');
		var isLogin = false;
	},
	
	login: function() {
		if (!directory.loginView) {
			directory.loginView = new directory.LoginView();
			directory.loginView.render();
		} else {
			directory.loginView.delegateEvents();
		}
		$('.container-fluid').html(directory.loginView.el);
		$('.container-fluid').addClass('login');
		$('.uniformjs').find("select, input, button, textarea").uniform();
	}
	//home: function() {
		
	//}
});



$(document).on("ready", function() {
	directory.loadTemplates(['CompanyItemView', 'CompanyDialogView', 
	                         'NavigationView', 'MenubarView', 'ContentView', 
	                         'FooterView', 'LoginView', 'AccountView'],
		function() {
			directory.event = {};
			_.extend(directory.event, Backbone.Events);
			directory.router = new directory.Router();
			Backbone.history.start();
		});
});