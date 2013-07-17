directory.LoginView = Backbone.View.extend({
	initialize: function() {
		console.log('Initialize Login View');
	}, 
	events: {
		"click #loginButton": "login"
	},
	render: function() {
		$(this.el).html(this.template());
		return this;
	},
	login: function(e) {
		e.preventDefault();
		var url = 'api/login';
		var formValues = {
				user: $('#login_user').val(),
				pass: $('#login_password').val()
			};
		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: formValues,
			success: function(data) {
				console.log(data);
				directory.router.navigate('/home', {trigger:true});
				if(data.error) {
					console.log(data.error.text);
				}
			}
		});
	}
});