<?php
require_once(LIB_PATH.DS.'database.php');

class OfflineReview extends DatabaseObject {
	protected static $table_name = "tbl_offline_review";
	protected static $db_fields = array('id', 'company_id', 'review_url', 'review_url_name', 'url_redirect_to', 'custom_url','special_offer_html',
										'background_image','background_color','font_family','font_size','font_color','form_color','remove_streaming_review','number_char_per_review','number_review','reviewer_email','reviewer_phone','reviewer_city','reviewer_state','disclaimer','term_of_service');
	public $id;
	public $company_id;
	public $review_url;
	public $review_url_name;
	public $url_redirect_to;
	public $custom_url;
	public $special_offer_html;
	public $background_image;
	public $background_color;
	public $font_family;
	public $font_size;
	public $font_color;
	public $form_color;
	public $remove_streaming_review;
	public $number_char_per_review;
	public $number_review;
	public $reviewer_email;
	public $reviewer_phone;
	public $reviewer_city;
	public $reviewer_state;
	public $disclaimer;
	public $term_of_service;
}
?>