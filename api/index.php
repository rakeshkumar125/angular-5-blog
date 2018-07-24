<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

//====== create connection for validation 
$conn = ($GLOBALS["___mysqli_ston"] = mysqli_connect("localhost",  "root",  "")) or die(mysqli_error($GLOBALS["___mysqli_ston"]));
mysqli_select_db($GLOBALS["___mysqli_ston"], "agular_application");

require 'vendor/autoload.php';
require 'validate.php';
$app = new \Slim\App;

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

//======= Code for DB Connection ======
function getConnection() {
    $dbhost="localhost";
    $dbuser="root";
    $dbpass="";
    $dbname="agular_application";
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
}

//======= Code for register User ======
$app->post('/signup', function (Request $request, Response $response, array $args) {
    $userRrequestedData = $request->getParsedBody();
    $config = array();
    $config['array_to_validate']    = $userRrequestedData;
    $config['email']    = "email";
    $config['required'] = "fullname,email,username,password";
    $config['unique_from_table'] = array(
                                        array(
                                            'field_name' =>'email',
                                            'table_name' =>'users',
                                            'table_field'=>'email'
                                        ),
                                        array(
                                            'field_name' =>'username',
                                            'table_name' =>'users',
                                            'table_field'=>'username'
                                        ),
                                    ); 
    $my_validator = new validator($config);
    $error = $my_validator->process_validation();
   
    if($error==false){
        $fullname = $_POST['fullname'];
        $email = $_POST['email'];
        $username = $_POST['username'];
        $password = $_POST['password'];
        $db = getConnection();
        $sql = "INSERT INTO `users` (`id`, `fullname`, `username`, `email`, `password`) VALUES (NULL, '".$fullname."', '".$username."', '".$email."', '".md5($password)."')";
        $stmt = $db->query($sql);
    } 
    return json_encode($error);
   // return $response;
});

//======= Code for login User ======
$app->post('/login', function (Request $request, Response $response, array $args) {

	$userRrequestedData = $request->getParsedBody();
    $config = array();
    $config['array_to_validate']    = $userRrequestedData;
    $config['required'] = "username,password";
    $my_validator = new validator($config);
    $error = $my_validator->process_validation();
    
    if(!$error){
	    $db = getConnection();
	    $username = $userRrequestedData['username'];
	    $password = $userRrequestedData['password'];
	    $sql = "select id,fullname from users where username='".$username."' and `password`=md5('".$password."')";
	    $stmt = $db->query($sql);
	    $user_data = $stmt->fetchAll(PDO::FETCH_OBJ);
	    if(count($user_data)){
        $data = array("status"=>1,"data_id"=>$user_data[0]->id,"fullname"=>$user_data[0]->fullname,"token"=>md5(uniqid(rand(), true)));
	    } else{
	       $data = array("status"=>0,"data"=>$user_data);
	    }
	    return json_encode($data);
	}else{
		return json_encode($error);
	}
});

//======= Code for get categories ======

$app->get('/categories', function (Request $request, Response $response, array $args) {
    
        $db = getConnection();
        $sql = "SELECT id,category_name FROM `cms_product_categories`";
        $stmt = $db->query($sql);
        $categoriesList = $stmt->fetchAll(PDO::FETCH_OBJ);
        return json_encode($categoriesList);
});

$app->post('/addpost', function (Request $request, Response $response, array $args) {

    $postRrequestedData = $request->getParsedBody();
    $config = array();
    $config['array_to_validate']    = $postRrequestedData;
    $config['required'] = "title,content,category";
    $config['min_character_limit']      = array(
                                        array(
                                            'field_name' =>'title',
                                            'no_of_character' =>'40',
                                        ),
                                        array(
                                            'field_name' =>'content',
                                            'no_of_character' =>'80'
                                        )
                                    );
    $my_validator = new validator($config);
    $error = $my_validator->process_validation();
    if(!$error){
        $db = getConnection();
        $sql = "INSERT INTO `posts` (`id`, `title`, `content`, `category`, `status`, `userID`) VALUES (NULL, ?, ?, ?, ?, ?)";
    
        $vars = array($postRrequestedData['title'],
        $postRrequestedData['content'],$postRrequestedData['category'],'publish',$postRrequestedData['userID']);
        $sth = $db->prepare($sql);  
        $sth->execute($vars);
        print_r($db->errorInfo());
        
    }

    return json_encode($error);
    


});

$app->run();