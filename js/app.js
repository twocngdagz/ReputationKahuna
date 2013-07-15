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
		"home": "home"
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
	},
	home: function() {
		$('.container-fluid').removeClass('login');
		directory.companyList = new directory.CompanyCollection();
		$('.container-fluid').html(new directory.NavigationView().render().el);
		$(new directory.WrapperView().render().el).appendTo('.container-fluid');
		$(new directory.DialogView().render().el).appendTo('.container-fluid');
		$(new directory.FooterView().render().el).appendTo('.container-fluid');
		directory.companyList.fetch({
            success: function () {
				$(new directory.CompanyListView({collection: directory.companyList}).render());
				if ($('.dynamicTable').size() > 0)
				{
					$('.dynamicTable').dataTable({
						"sPaginationType": "bootstrap",
						"sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
						"oLanguage": {
							"sLengthMenu": "_MENU_ records per page"
						}
					});
				}
            }
        });
	}
});

$(document).on("ready", function() {
	directory.loadTemplates(['CompanyItemView', 'CompanyDialogView', 'NavigationView', 'MenubarView', 'ContentView', 'FooterView', 'LoginView'],
		function() {
			directory.router = new directory.Router();
			Backbone.history.start();
		});
});