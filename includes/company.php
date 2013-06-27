<?php
require_once(LIB_PATH.DS.'database.php');

class Company extends DatabaseObject {
	protected static $table_name = "tbl_company";
	protected static $db_fields = array('id', 'name', 'location', 'collected', 'posted', 'lastposted');
	public $id;
	public $name;
	public $location;
	public $collected;
	public $posted;
	public $lastposted;
}
?>