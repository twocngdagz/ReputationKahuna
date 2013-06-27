<?php
defined('DS') 			? null : define('DS', DIRECTORY_SEPARATOR);
defined('SITE_ROOT') 	? null : define('SITE_ROOT', 'C:'.DS.'wamp'.DS.'www'.DS.'ReputationKahuna');
//defined('LOG')			? null : define('LOG', SITE_ROOT.DS.'log.txt');
defined('LIB_PATH') 	? null : define('LIB_PATH', SITE_ROOT.DS.'includes');
require_once(LIB_PATH.DS.'config.php');
require_once(LIB_PATH.DS.'functions.php');
require_once(LIB_PATH.DS.'database.php');
require_once(LIB_PATH.DS.'database_object.php');
require_once(LIB_PATH.DS.'company.php');
require_once(LIB_PATH.DS.'file_upload.php');
require_once(LIB_PATH.DS.'session.php');
?>