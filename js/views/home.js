directory.LoginView = Backbone.View.extend({
	id: 'login',
	initialize: function() {
		console.log('Initialize Login View');
	},
	events: {
		"click #loginButton": "login"
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}, 
	login: function(event) {
		event.preventDefault();
		var url = 'api/login';
		var formValues = {
				user: $('#login_user').val(),
				pass: $('#login_password').val()
			};
		console.log('AJAX started');
		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: formValues,
			success: function(data) {
				console.log('Success');
				directory.router.navigate('/home', {trigger:true});
				if(data.error) {
					console.log(data.error.text);
				}
			}
		});
	}
});

directory.DialogView = Backbone.View.extend({
	className: 'modal hide fade in',
	id: 'myModal',
	initialize: function() {
		console.log('Initialized Dialog View');
	},
	render: function() {
		return this;
	}
});

directory.FooterView = Backbone.View.extend({
	id: 'footer',
	initialize: function() {
		console.log('Initialize Footer View');
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});

directory.WrapperView = Backbone.View.extend({
	id: 'wrapper',
	initialize: function() {
		console.log('Initialize Wrapper View');
	},
	render: function() {
		var menuBarView = new directory.MenubarView();
		var contentView = new directory.ContentView();
		this.$el.html(menuBarView.render().el);
		$(contentView.render().el).appendTo(this.$el);
		return this;
	}
});

directory.NavigationView = Backbone.View.extend({
	className: 'navbar main',
	events: {
		"click .btn-navbar": "toggle"
	},
	initialize: function() {
		console.log('Initialize Navigation View');
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	},
	toggle: function() {
		console.log('toggle');
		$('.container-fluid:first').toggleClass('menu-hidden');
		$('#menu').toggleClass('hidden-phone');
		
		if (typeof masonryGallery != 'undefined') 
			masonryGallery();
	}
});

directory.MenubarView = Backbone.View.extend({
	className: 'hidden-phone',
	id: 'menu',
	initialize: function() {
		console.log('Initialize Menu View');
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});

directory.ContentView = Backbone.View.extend({
	id: 'content',
	initialize: function() {
		console.log('Initialize Content View');
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});


directory.CompanyDialogView = Backbone.View.extend({
	
	initialize: function() {
		console.log('Initialize Dialog View');
	}, 
	
	events: {
		"click #save-action": "save",
		"change input": "modify",
		"click #close-action": "close"
	},
	
	render: function() {
		this.$el.html(this.template(this.model.attributes));
		this.$el.find('#myModalLabel').text('Company');
		this.$el.find('#lastposted').datepicker().on('changeDate', function(e){
			$('#lastposted').datepicker('hide');
		});
		return this;
	},
	
	save: function(e) {
		console.log('save dialog company');
		if (null == this.model.id) {
			directory.CompanyCollection.create(this.model);
		} else {
			this.model.save();
		}
		$('#myModal').modal('hide');
	}, 
	modify: function(e) {
		var attribute = {};
		attribute[e.currentTarget.name] = e.currentTarget.value;
		console.log(attribute);
		this.model.set(attribute);
	},
	close: function() {
		$('#myModal').modal('hide');
	}
});

directory.CompanyItemView = Backbone.View.extend({
	tagName: 'tr',
	initialize: function() {
		console.log('Initialize CompanyList View');
		this.render = _.bind(this.render, this);
		this.model.bind('change', this.render)
	},
	events: {
		"click a": "editModal"
	},
	render: function() {
		$(this.el).html(this.template(this.model.attributes))
		return this;
	},
	
	editModal: function(e) {
		e.preventDefault();
		$('#myModal').html(new directory.CompanyDialogView({model: this.model}).render().el);	
	}
});

directory.CompanyListView = Backbone.View.extend({
	
	initialize: function() {
		_(this).bindAll('add');
		this._companies = [];
		this.collection.each(this.add);
		this.collection.bind('add', this.add);
	},
	
	render: function() {
		this._rendered = true;
		this.$el.empty();
		_(this._companies).each(function(item) {
			$('#companies').append(item.render().el);
		});
	},
	
	add: function(company) {
		var companyItem = new directory.CompanyItemView({model: company});
		this._companies.push(companyItem);
		if(this._rendered) {
			$(this.el).append(companyItem.render().el);
		}
	}
});