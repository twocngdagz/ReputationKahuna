directory.BreadcrumbView = Backbone.View.extend({
	initialize: function() {
		console.log('Initialize Breadcrumb View');
	}, 
	render: function() {
		$(this.el).html(this.template());
		return this;
	}
});



directory.DashboardTabView = Backbone.View.extend({
	initialize: function() {
		console.log('Initialize Dashboard Tab View');
	}, 
	render: function() {
		$(this.el).html(this.template());
		return this;
	}
});


directory.DashboardView = Backbone.View.extend({
	initialize: function() {
		console.log('Initialize Dashboard View');
	}, 
	render: function() {
		$(this.el).html(this.template());
		return this;
	}
});


directory.MenubarView = Backbone.View.extend({
	initialize: function() {
		console.log('Initialize Menubar View');
	}, 
	render: function() {
		$(this.el).html(this.template());
		return this;
	}
});

directory.NavigationView = Backbone.View.extend({
	className: 'navbar main',
	initialize: function() {
		console.log('Initialize Navigation View');
	},
	events: {
		"click #save": "save"
	}, 
	render: function() {
		$(this.el).html(this.template());
		return this;
	},
	save: function() {
		console.log('save event');
	}
});

directory.SidebarView = Backbone.View.extend({
	initialize: function() {
		console.log('Initialize Sidebar View');
	}, 
	render: function() {
		$(this.el).html(this.template());
		return this;
	}
});

directory.FooterView = Backbone.View.extend({
	initialize: function() {
		console.log('Initialize Footer View');
	}, 
	render: function() {
		$(this.el).html(this.template());
		return this;
	}
});



