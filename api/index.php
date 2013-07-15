<?php
require_once("../includes/initialize.php");

require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();
$app->post('/login', 'login');
$app->get('/companies', 'getCompanies');
$app->post('/companies', 'addCompanies');
$app->get('/companies/:id', 'getCompany');
$app->put('/companies/:id', 'updateCompany');
$app->run();

function login() {
	$request = \Slim\Slim::getInstance()->request();
	echo json_encode($request);
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
	$m_company->collected = $company->collected;
	$m_company->posted = $company->posted;
	$m_company->lastposted = $company->lastposted;
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
	$m_company->collected = $company->collected;
	$m_company->posted = $company->posted;
	$m_company->lastposted = $company->lastposted;
	$m_company->save();
	echo json_encode($company);
}

?>