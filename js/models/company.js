directory.Company = Backbone.Model.extend({

});

directory.CompanyCollection = Backbone.Collection.extend({
    model: directory.Company,
    url:"/api/companies"
});