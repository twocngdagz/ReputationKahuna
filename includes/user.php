<?php
require_once(LIB_PATH.DS.'database.php');

class User extends DatabaseObject {
	protected static $table_name = "tbl_user";
	protected static $db_fields = array('id', 'fname', 'lname','username', 'password', 'email', 'companyname', 'companyphone', 'companyemail','companywebsite','companylogo');
	public $id;
	public $fname;
	public $lname;
	public $username;
	public $password;
	public $email;
	public $companyname;
	public $companyphone;
	public $companymail;
	public $companywebsite;
	public $companylogo;
	
	
	public static function authenticate($username="", $password="") {
		global $database;
		$username = $database->escape_value($username);
		$password = $database->escape_value($password);

		$sql  = "SELECT * FROM tbl_user ";
		$sql .= "WHERE username = '{$username}' ";
		$sql .= "AND password = '{$password}' ";
		$sql .= "LIMIT 1";
		$result_array = self::find_by_sql($sql);
		return !empty($result_array) ? array_shift($result_array) : false;
	}
}
?>