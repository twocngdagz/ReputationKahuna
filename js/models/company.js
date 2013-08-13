directory.Company = Backbone.Model.extend({
	urlRoot:"/reputationkahuna/api/companies",
	defaults: {
		id: null,
		name: '',
		location: '',
		zipcode: '',
		city: '',
		companywebsite: '',
		owner_firstname: '',
		owner_lastname: '',
		owner_phone: '',
		owner_email: '',
		manager_firstname: '',
		manager_lastname: '',
		manager_phone: '',
		manager_email:''
	}
});

directory.CompanyCollection = Backbone.Collection.extend({
    model: directory.Company,
    url:"/reputationkahuna/api/companies"
});