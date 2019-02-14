
## NORME
http://eilgin.github.io/php-the-right-way/
https://github.com/dseguy/clearPHP
https://phpbestpractices.org

## SECURITY
https://www.acunetix.com/websitesecurity/php-security-1/
http://phpsecurity.readthedocs.io/en/latest/index.html
http://securingphp.com

## LISTS
https://github.com/ziadoz/awesome-php
https://www.cloudways.com/blog/top-php-github-projects/

## SLIM PHP LIST
https://github.com/xssc/awesome-slim

## SLIM PHP SKELETON
https://github.com/slimphp/Slim-Skeleton
https://github.com/odan/prisma
https://github.com/tuupola/slim-api-skeleton
http://php-di.org/doc/frameworks/slim.html
https://github.com/gothinkster/slim-php-realworld-example-app
https://github.com/railto/realworld-slim

## SLIM PHP TEST
https://medium.com/@Andela/writing-testable-api-apps-in-slim-framework-29905970941b

## ASYNCRONOUS ASYNCRONOUS
https://amphp.org

## AUTODEPLOY
http://rocketeer.autopergamene.eu/
https://deployer.org/
https://github.com/dg/ftp-deployment
https://github.com/git-ftp/git-ftp

## IDE + EXTENSION
http://calebporzio.com/my-vs-code-setup-2/

## CQRS / DDD / EventSourcing
https://github.com/real34/cqrs-es-camboui
https://gist.github.com/jsor/6e79afb989c866915f20
http://martinfowler.com/eaaDev/EventSourcing.html
http://cqrs.nu/
https://dddcommunity.org/resources/ddd_terms/

## XAMPP
xampp multiple !: 
http://webdevzoom.com/install-run-multiple-xampp-windows/


## ENV CONF
http://jgrundner.com/slim-oo-003-decoupling-the-configuration/
https://www.ekito.fr/people/setup-a-development-configuration-for-angularjs-and-a-php-mysql-rest-server-solving-the-cors-issue/

## SSO
https://github.com/jasny/sso
http://stackoverflow.com/questions/4061537/best-way-to-implement-single-sign-on-with-all-major-providers


## IMAGE
https://github.com/eventviva/php-image-resize

## OAUTH2
https://github.com/akrabat/slim-bookshelf-api
https://speakerdeck.com/akrabat/2017-04-08-phpyorkshire-slim-oauth2

## COMPOSER
composer dump-autoload (GENERATE import class)
composer update (update dependecies & generate import class)


## MYSQL
https://github.com/hholzgra/mysql-udf-regexp/tree/master/regexp
https://www.codeproject.com/Articles/1221422/Importance-of-Logging-in-MySQL


## ORM
https://medium.com/@romaninsh/objectively-comparing-orm-dal-libraries-e4f095de80b5
http://woz.posthaven.com/what-orms-have-taught-me-just-learn-sql
https://redbeanphp.com

## PDO WRAPPER (ORM ALTERNATIVE)
https://phpdelusions.net/pdo/pdo_wrapper
https://phpdelusions.net/pdo_examples/dynamical_where
http://slashnode.com/pdo-for-elegant-php-database-access/
https://github.com/fhmj/pdo-flexible-search
https://github.com/GrumpyCrouton/GrumpyPDO
https://github.com/paragonie/easydb
https://github.com/daveismyname/pdo-wrapper

## PDF LIB
http://www.fpdf.org (no dependencies but very old)
https://github.com/mpdf/mpdf (no dependencies)
https://github.com/tecnickcom/tcpdf (no dependencies)
https://github.com/mikehaertl/phpwkhtmltopdf (slimPHP wrapper + require wkhtmltopdf)

## STATIC ANALYZER / ANALYZYS
https://github.com/phpstan/phpstan
https://github.com/phan/phan
https://www.exakat.io

## XAMPP INCLUDE html pages
c:/xampp/apache/conf/httpd.conf
Search for:
AddType text/html .shtml
Add the below two lines:
AddType text/html .html
AddOutputFilter INCLUDES .html
Go to Xampp Control Panel and stop the session and restart again.
Refresh the page in browser and see, the virtual includes will start working.

<!--#include virtual="/fr/header.html" -->
<!--#include virtual="/se/site/as-html-web/site/fr/header.html" -->


## PHP VSCODE EXTENSIONS
Apache Conf
API Elements extension
change-case
Composer
Docker
MySQL Syntax
openapi-lint
PHP Debug
PHP DocBlocker
PHP Intelephense
PHP Mess Detector
PHP Namespace Resolver
PHP Phan (Analyzer)
phpcbf
phpcs
XML Tools
YAML
