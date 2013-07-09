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