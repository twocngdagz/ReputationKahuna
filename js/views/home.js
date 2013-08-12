directory.LoginView = Backbone.View.extend({
	id: 'login',
	initialize: function() {
		$('.alert .close').live("click", function(e) {
		    $(this).parent().hide();
		});
	},
	events: {
		"click #loginButton": "login",
		"click .alert .close": "close"
	},
	render: function() {
		this.$el.html(this.template());
		this.$el.find('.alert').hide();
		return this;
	},
	login: function(event) {
		var self = this;
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
				if(data) {
					//directory.router.navigate('/home', {trigger:true});
					self.showHome();
				} else {
					$('.alert').show();
				}
				if(data.error) {
					console.log(data.error.text);
				}
			}
		});
	},
	showHome: function() {
		directory.wrapperView = new directory.WrapperView();
		directory.dialogView = new directory.DialogView();
		directory.footerView = new directory.FooterView();
		directory.navigationView = new directory.NavigationView();
		$('.container-fluid').removeClass('login');
		directory.companyList = new directory.CompanyCollection();
		$('.container-fluid').html(directory.navigationView.render().el);
		$(directory.wrapperView.render().el).appendTo('.container-fluid');
		$(directory.dialogView.render().el).appendTo('.container-fluid');
		$(directory.footerView.render().el).appendTo('.container-fluid');
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

directory.AccountView = Backbone.View.extend({
	initialize: function() {
		console.log('Initialize Account View');
	},
	render: function() {
		this.$el.html(this.template());
		this.$el.find('#birthdate').datepicker().on('changeDate', function(e){
			$('#birthdate').datepicker('hide');
		});
		return this;
	}
});

directory.DialogView = Backbone.View.extend({
	className: 'modal hide fade in',
	id: 'myModal',
	initialize: function() {
		console.log('Initialized Dialog View');
	},
	render: function() {
		this.$el.html(this.template());
		$(this.el).attr("data-width", 1024);
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
		"click .btn-navbar": "toggle",
		"click #signout": "logout"
	},
	initialize: function() {
		console.log('Initialize Navigation View');
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	},
	logout: function() {
		var url = 'api/logout';
		$.ajax({
			url: url,
			type: 'get',
			dataType: 'json',
			success: function(data) {
				if(data) {
					directory.loginView.render();
					$('.container-fluid').html(directory.loginView.el);
					$('.container-fluid').addClass('login');
					$('.uniformjs').find("select, input, button, textarea").uniform();
				} else {
					$('.alert').show();
				}
				if(data.error) {
					console.log(data.error.text);
				}
			}
		});
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
	events: {
		"click #accountsetup": "account",
		"click #dashboard": "dashboard"
	},
	initialize: function() {
		console.log('Initialize Menu View');
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	},
	account: function(e) {
		e.preventDefault();
		directory.accountView = new directory.AccountView();
		$('#contentWrapper').html(directory.accountView.render().el);
		if ($('textarea.wysihtml5').size() > 0)
			$('textarea.wysihtml5').wysihtml5();
		$('#dashboard').parent().removeClass('active');
		$('#accountsetup').parent().addClass('active');
	},
	dashboard: function(e) {
		e.preventDefault();
		$('.container-fluid').html(directory.navigationView.render().el);
		$(directory.wrapperView.render().el).appendTo('.container-fluid');
		$(directory.dialogView.render().el).appendTo('.container-fluid');
		$(directory.footerView.render().el).appendTo('.container-fluid');
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
		$('#dashboard').parent().addClass('active');
		$('#accountsetup').parent().removeClass('active');
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


directory.OfflineReviewView = Backbone.View.extend({
	id: 'offline-review',
	className: 'tab-pane',
	initialize: function() {
		console.log('Initialize Offline Review View');
		$('#myModal').on('hidden', function () {
			$('#offline-review').remove();
			$('#ul-offline-review').remove();
		});
	},
	
	render: function() {
		this.$el.html(this.template);
		this.$el.find('#colorpicker-js').colorpicker();
		return this;
	}
});

directory.CompanyDialogView = Backbone.View.extend({
	id: 'company-info',
	className: 'tab-pane active',
	initialize: function() {
		console.log('Initialize Dialog View');
		directory.previous_attr = {};
		$('#myModal').on('hidden', function () {
			$('#company-info').remove();
			$('#ul-company-info').remove();
		});
	}, 
	
	events: {
		"click #save-action": "save",
		"change input": "modify",
		"click #close-action, .close": "close"
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
			directory.companyList.create(this.model);
		} else {
			this.model.save();
		}
		$('#myModal').modal('hide');
	}, 
	modify: function(e) {
		var attribute = {};
		attribute[e.currentTarget.name] = e.currentTarget.value;
		directory.previous_attr[e.currentTarget.name] = this.model.attributes[e.currentTarget.name];
		console.log(directory.previous_attr);
		this.model.set(attribute);
	},
	close: function() {
		this.cancel();
		this.model.set(directory.previous_attr);
		$('#myModal').modal('hide');
	}
});

directory.CompanyItemView = Backbone.View.extend({
	tagName: 'tr',
	initialize: function() {
		console.log('Initialize CompanyList View');
		this.render = _.bind(this.render, this);
		this.model.bind('change', this.render);
		
	},
	events: {
		"click #editCompany": "editModal",
		"click #addCompany": "addModal",
		"click #deleteCompany": "deleteCompany"
	},
	render: function() {
		$(this.el).html(this.template(this.model.attributes));
		return this;
	},
	
	editModal: function(e) {
		e.preventDefault();
		$('#dialogtabid').append("<li id=\"ul-company-info\" class=\"active\"><a class=\"glyphicons user\" href=\"#company-info\" data-toggle=\"tab\"><i></i>Company Info</a></li>");
		$('#dialogtabid').append("<li id=\"ul-offline-review\"><a class=\"glyphicons user\" href=\"#offline-review\" data-toggle=\"tab\"><i></i>Offline Review Page</a></li>");
		$('#tab-content-id').append(new directory.CompanyDialogView({model: this.model}).render().el);
		$('#tab-content-id').append(new directory.OfflineReviewView().render().el);
		// if ($('textarea.wysihtml5').size() > 0)
		// 	$('textarea.wysihtml5').wysihtml5();
		CKEDITOR.replace('wysihtml-thankyou');
		CKEDITOR.replace('disclaimer');
		CKEDITOR.replace('term-service');
		if ($('#colorpicker').size() > 0)
			$('#colorpicker').farbtastic('#colorpickerColor');
		if ($('.colorpicker').size() > 0) {
			$('#cp1').colorpicker();
			$('#cp2').colorpicker();
			$('#cp3').colorpicker();
			$('.dropdown-menu').css('z-index','9999');
		}
		$('.toggle-button').toggleButtons();
		$('#myModalLabel').html(this.model.get('name'));
	},
	addModal: function(e) {
		e.preventDefault();
		$('#myModal').html(new directory.CompanyDialogView({model: new directory.Company()}).render().el);
	},
	deleteCompany: function(e) {
		e.preventDefault();
		this.model.destroy();
		this.$el.remove();
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