# PHP

## STANDARD

- http://eilgin.github.io/php-the-right-way/
- https://github.com/dseguy/clearPHP
- https://github.com/odan/learn-php
- https://phpbestpractices.org

## SECURITY

- https://www.acunetix.com/websitesecurity/php-security-1/
- http://phpsecurity.readthedocs.io/en/latest/index.html
- http://securingphp.com

## LISTS

- https://github.com/ziadoz/awesome-php
- https://www.cloudways.com/blog/top-php-github-projects/

## SLIM PHP UTILS

- https://github.com/xssc/awesome-slim
- https://github.com/zhorton34/authorize-slim-4
- https://github.com/bryanjhv/slim-session
- https://github.com/selective-php/basepath
- https://github.com/slimphp/Slim-Csrf
- https://github.com/slimphp/Slim-Http
- http://php-di.org/doc/frameworks/slim.html
- https://aimeos.org/slim-ecommerce-package/

## SLIM PHP V3 SKELETON

- https://github.com/adriansuter/Slim4-Skeleton
- https://github.com/slimphp/Slim-Skeleton
- https://github.com/odan/prisma
- https://github.com/tuupola/slim-api-skeleton
- https://github.com/gothinkster/slim-php-realworld-example-app
- https://github.com/railto/realworld-slim
- https://github.com/maurobonfietti/rest-api-slim-php
- https://github.com/codecourse/slender

## SLIM PHP V4 SKELETON

- https://github.com/adriansuter/Slim4-Skeleton
- https://github.com/slimphp/Slim-Skeleton
- https://github.com/semhoun/slim-skeleton-mvc
- https://github.com/odan/slim4-skeleton
- https://github.com/maurobonfietti/slim4-api-skeleton
- https://github.com/maurobonfietti/slim4-api-skeleton-crud-generator
- http://www.slimframework.com/docs/v4/
- https://github.com/odan/slim4-tutorial

## PSR15

- https://github.com/middlewares/awesome-psr15-middlewares


## SLIM PHP TEST

- https://medium.com/@Andela/writing-testable-api-apps-in-slim-framework-29905970941b

## CMS / HEADLESS
- https://github.com/directus/directus
- https://github.com/flextype/flextype
- https://github.com/agentejo/cockpit

## ASYNCRONOUS ASYNCRONOUS
- https://amphp.org

## AUTODEPLOY

- http://rocketeer.autopergamene.eu/
- https://deployer.org/
- https://github.com/dg/ftp-deployment
- https://github.com/git-ftp/git-ftp
- https://github.com/deployphp/deployer

## IDE + EXTENSION
- http://calebporzio.com/my-vs-code-setup-2/

## CQRS / DDD / EventSourcing

- https://github.com/real34/cqrs-es-camboui
- https://gist.github.com/jsor/6e79afb989c866915f20
- http://martinfowler.com/eaaDev/EventSourcing.html
- http://cqrs.nu/
- https://dddcommunity.org/resources/ddd_terms/

## XAMPP

xampp multiple !: 
- http://webdevzoom.com/install-run-multiple-xampp-windows/


## ENV CONF
- http://jgrundner.com/slim-oo-003-decoupling-the-configuration/
- https://www.ekito.fr/people/setup-a-development-configuration-for-angularjs-and-a-php-mysql-rest-server-solving-the-cors-issue/

## SSO
- https://github.com/jasny/sso
- http://stackoverflow.com/questions/4061537/best-way-to-implement-single-sign-on-with-all-major-providers


## IMAGE
- https://github.com/eventviva/php-image-resize

## AUTH JWT
- https://github.com/firebase/php-jwt
- https://github.com/tuupola/slim-jwt-auth
- https://github.com/tuupola/slim-api-skeleton
- https://github.com/letsila/slim3-jwt-auth-example
- https://appelsiini.net/projects/slim-jwt-auth/
- https://arjunphp.com/secure-web-services-using-jwt-slim3-framework/

## OAUTH2
- https://github.com/akrabat/slim-bookshelf-api
- https://speakerdeck.com/akrabat/2017-04-08-phpyorkshire-slim-oauth2

## COMPOSER
```
composer dump-autoload (GENERATE import class)
composer update (update dependecies & generate import class)
```

## MYSQL
- https://github.com/hholzgra/mysql-udf-regexp/tree/master/regexp
- https://www.codeproject.com/Articles/1221422/Importance-of-Logging-in-MySQL


## ORM
- https://medium.com/@romaninsh/objectively-comparing-orm-dal-libraries-e4f095de80b5
- http://woz.posthaven.com/what-orms-have-taught-me-just-learn-sql
- https://github.com/cycle/orm
- https://redbeanphp.com
- http://propelorm.org/


## PDO WRAPPER (ORM ALTERNATIVE)
- https://phpdelusions.net/pdo/pdo_wrapper
- https://phpdelusions.net/pdo_examples/dynamical_where
- http://slashnode.com/pdo-for-elegant-php-database-access/
- https://github.com/fhmj/pdo-flexible-search
- https://github.com/GrumpyCrouton/GrumpyPDO
- https://github.com/paragonie/easydb
- https://github.com/daveismyname/pdo-wrapper

## PDF LIB
- http://www.fpdf.org (no dependencies but very old)
- https://github.com/mpdf/mpdf (no dependencies)
- https://github.com/tecnickcom/tcpdf (no dependencies)
- https://github.com/mikehaertl/phpwkhtmltopdf (slimPHP wrapper + require wkhtmltopdf)

## STATIC ANALYZER / ANALYZYS
- https://github.com/phpstan/phpstan
- https://github.com/phan/phan
- https://www.exakat.io

## XAMP VIRTUAL HOST

- C:/xampp/apache/conf/extra
- open and edit httpd-vhosts.conf

```
<VirtualHost *:80>
ServerAdmin webmaster@localhost.com
DocumentRoot "C:/xampp3/htdocs/projectfolder/public"
ServerName myurl.test
</VirtualHost>
```

- C:\Windows\System32\drivers\etc\hosts
- Add the following line in the Host file.

```
127.0.0.1      myurl.test
```

More infos: https://www.cloudways.com/blog/configure-virtual-host-on-windows-10-for-wordpress/

## XAMPP INCLUDE HTML PAGES
```
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
```

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
