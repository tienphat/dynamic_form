<?php
$debug = 100;
define('DEBUG_MODE', $debug);
define('SITE_ROOT','/dynamic_form/');

if (!preg_match('/^http:/', SITE_ROOT) OR ! preg_match('/^https:/', SITE_ROOT))
{
    if (empty($_SERVER['HTTPS']))
    {
        define('FULL_SITE_ROOT', 'http://' . $_SERVER['HTTP_HOST'] . SITE_ROOT);
    }
    else
    {
        define('FULL_SITE_ROOT', 'https://' . $_SERVER['HTTP_HOST'] . SITE_ROOT);
    }
}
else
{
    define('FULL_SITE_ROOT', SITE_ROOT);
}

if (DEBUG_MODE > 0)
{
    error_reporting(E_ALL);
    ini_set('display_errors',1);
}
else
{
    error_reporting(0);
    ini_set('display_errors',0);
}