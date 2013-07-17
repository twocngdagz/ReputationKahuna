directory.Company = Backbone.Model.extend({
	urlRoot:"/reputationkahuna/api/companies",
	defaults: {
		id: null,
		name: '',
		location: '',
		collected: '',
		posted: '',
		lastposted: ''
	}
});

directory.CompanyCollection = Backbone.Collection.extend({
    model: directory.Company,
    url:"/reputationkahuna/api/companies"
});