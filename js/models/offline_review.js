directory.OfflineReview = Backbone.Model.extend({
	urlRoot:"/reputationkahuna/api/offlinereviews",
	defaults: {
		id: null
	}
});

directory.OfflineReviewCollection = Backbone.Collection.extend({
    model: directory.OfflineReview,
    url:"/reputationkahuna/api/offlinereviews"
});