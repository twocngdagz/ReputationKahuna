<?php
require_once("../includes/initialize.php");

require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();
$app->post('/login', 'login');
$app->get('/is_login', 'is_login');
$app->get('/logout', 'logout');
$app->get('/companies', 'getCompanies');
$app->get('/offlinereviews/:id','getOfflineReview');
$app->post('/companies', 'addCompanies');
$app->get('/companies/:id', 'getCompany');
$app->put('/companies/:id', 'updateCompany');
$app->delete('/companies/:id', 'deleteCompany');
$app->run();

function login() {
	global $session;
	$user = $_POST['user'];
	$pass = $_POST['pass'];
	$found_user = User::authenticate($user, $pass);
	if ($found_user) {
		$session->login($found_user);
	}
	echo json_encode($found_user);
}

function is_login() {
	global $session;
	echo json_encode($session->is_logged_in());
}

function logout() {
	global $session;
	$session->logout();
	echo json_encode(!$session->is_logged_in());
}

function deleteCompany($id) {
	$m_company =Company::find_by_id($id);
	$m_company->delete();
	echo "{'delete': 'true'}";
}

function getCompanies() {
	$company = Company::find_all();
	echo json_encode($company);
}

function addCompanies() {
	$m_company = new Company();
	$request = \Slim\Slim::getInstance()->request();
	$body = $request->getBody();
	$company = json_decode($body);
	$m_company->name = $company->name;
	$m_company->location = $company->location;
	$m_company->zipcode = $company->zipcode;
	$m_company->city = $company->city;
	$m_company->companywebsite = $company->companywebsite;
	$m_company->owner_firstname = $company->owner_firstname;
	$m_company->owner_lastname = $company->owner_lastname;
	$m_company->owner_phone = $company->owner_phone;
	$m_company->owner_email = $company->owner_email;
	$m_company->manager_firstname = $company->manager_firstname;
	$m_company->manager_lastname = $company->manager_lastname;
	$m_company->manager_phone = $company->manager_phone;
	$m_company->manager_email = $company->manager_email;
	$m_company->save();
	echo json_encode($m_company);
}

function getCompany($id) {
	$company = Company::find_by_id($id);
	echo json_encode($company);
}

function updateCompany($id) {
	$m_company =Company::find_by_id($id);
	$request = \Slim\Slim::getInstance()->request();
	$body = $request->getBody();
	$company = json_decode($body);
	$m_company->name = $company->name;
	$m_company->location = $company->location;
	$m_company->zipcode = $company->zipcode;
	$m_company->city = $company->city;
	$m_company->companywebsite = $company->companywebsite;
	$m_company->owner_firstname = $company->owner_firstname;
	$m_company->owner_lastname = $company->owner_lastname;
	$m_company->owner_phone = $company->owner_phone;
	$m_company->owner_email = $company->owner_email;
	$m_company->manager_firstname = $company->manager_firstname;
	$m_company->manager_lastname = $company->manager_lastname;
	$m_company->manager_phone = $company->manager_phone;
	$m_company->manager_email = $company->manager_email;
	$m_company->save();
	echo json_encode($m_company);
}

function getOfflineReview($companyid) {
	$offline_review = OfflineReview::find_by_id($companyid);
	echo json_encode($offline_review);
}

?>