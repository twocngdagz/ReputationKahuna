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
		directory.breadcrumbView = new directory.BreadcrumbView();
		directory.dashboardtabView = new directory.DashboardTabView();
		directory.dashboardView = new directory.DashboardView();
		directory.menubarView = new directory.MenubarView();
		directory.navigationView = new directory.NavigationView();
		directory.sidebarView = new directory.SidebarView();
		directory.footerView = new directory.FooterView();
		directory.breadcrumbView.render();
		directory.dashboardtabView.render();
		directory.dashboardView.render();
		directory.menubarView.render();
		directory.navigationView.render();
		directory.sidebarView.render();
		directory.footerView.render();
		$('.container-fluid').html(directory.navigationView.el);
		$(directory.sidebarView.el).appendTo('#wrapper');
		$(directory.breadcrumbView.el).appendTo('#content');
		$(directory.dashboardView.el).appendTo('#content');
		$(directory.menubarView.el).appendTo('#content');
		$(directory.dashboardtabView.el).appendTo('#content');
		$(directory.footerView.el).appendTo('#footer');
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