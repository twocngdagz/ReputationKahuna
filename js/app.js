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
		"": 'login',
		"logout": 'logout'
	}, 
	
	initialize: function() {
		var isLogin = false;
	},
	
	login: function() {
		var url = 'api/is_login';
		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				if(data) {
					directory.loginView = new directory.LoginView();
					directory.loginView.showHome();
				} else {
					if (!directory.loginView) {
						console.log('login');
						directory.loginView = new directory.LoginView();
						directory.loginView.render();
					} else {
						directory.loginView.delegateEvents();
					}
					$('.container-fluid').html(directory.loginView.el);
					$('.container-fluid').addClass('login');
					$('.uniformjs').find("select, input, button, textarea").uniform();
				}
				if(data.error) {
					console.log(data.error.text);
				}
			},
			error: function(jqXHR, status, errorString) {
				console.log(errorString);
			}
		});
	}
});



$(document).on("ready", function() {
	directory.loadTemplates(['CompanyItemView', 'CompanyDialogView', 
	                         'NavigationView', 'MenubarView', 'ContentView', 
	                         'FooterView', 'LoginView', 'AccountView',
	                         'DialogView','OfflineReviewView'],
		function() {
			directory.event = {};
			_.extend(directory.event, Backbone.Events);
			directory.router = new directory.Router();
			Backbone.history.start();
		});
});