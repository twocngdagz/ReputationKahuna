<?php
require_once(LIB_PATH.DS.'database.php');

class Company extends DatabaseObject {
	protected static $table_name = "tbl_company";
	protected static $db_fields = array('id', 'name', 'location', 'zipcode', 'city', 'companywebsite','owner_firstname',
										'owner_lastname','owner_phone','owner_email','manager_firstname','manager_lastname','manager_phone','manager_email');
	public $id;
	public $name;
	public $location;
	public $zipcode;
	public $city;
	public $companywebsite;
	public $owner_firstname;
	public $owner_lastname;
	public $owner_phone;
	public $owner_email;
	public $manager_firstname;
	public $manager_lastname;
	public $manager_phone;
	public $manager_email;
}
?>