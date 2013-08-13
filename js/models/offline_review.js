directory.OfflineReview = Backbone.Model.extend({
	urlRoot:"/reputationkahuna/api/offlinereviews",
	defaults: {
		id: null,
		company_id: '',
		review_url: '',
		review_url_name: '',
		url_redirect_to: '',
		custom_url:'',
		special_offer_html: '',
		background_image: '',
		background_color:'',
		font_family:'',
		font_size:'',
		font_color:'',
		form_color:'',
		remove_streaming_review:'',
		number_char_per_review:'',
		number_review:'',
		reviewer_email:'',
		reviewer_phone:'',
		reviewer_city:'',
		reviewer_state:'',
		disclaimer:'',
		term_of_service:''
	}
});

directory.OfflineReviewCollection = Backbone.Collection.extend({
    model: directory.OfflineReview,
    url:"/reputationkahuna/api/offlinereviews"
});