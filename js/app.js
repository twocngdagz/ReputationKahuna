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
		//"": 'login',
		"": "home"
	}, 
	
	initialize: function() {
		console.log('Router');
	},
	
	login: function() {
		if (!directory.loginView) {
			directory.loginView = new directory.LoginView();
			directory.loginView.render();
		} else {
			directory.loginView.delegateEvents();
		}
		$('#app').html(directory.loginView.el);
	},
	home: function() {
		
	}
});

$(document).on("ready", function() {
	directory.loadTemplates(['BreadcrumbView', 'DashboardTabView', 'DashboardView','MenubarView','NavigationView',
	                         'SidebarView', 'FooterView'],
		function() {
			directory.router = new directory.Router();
			Backbone.history.start();
		});
});