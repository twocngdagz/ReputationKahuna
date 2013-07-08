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
		var companyList = new directory.CompanyCollection();
        companyList.fetch({
            success: function () {
				$(new directory.CompanyListView({collection: companyList}).render());
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
	directory.loadTemplates(['CompanyItemView', 'CompanyDialogView'],
		function() {
			directory.router = new directory.Router();
			Backbone.history.start();
		});
});