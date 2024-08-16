<?php

require_once '../server/classes/Session.php';
$Session = new Session();

$Session->destroy();
header('Location: ./login/index.php');
die;
