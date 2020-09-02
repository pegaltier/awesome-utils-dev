
# ENGINEERING/ARCHITECTURE

## API MANAGEMENT
- https://tyk.io/

## API NORMALIZATION
- https://app.swaggerhub.com

## DDD / CQRS
- https://speakerdeck.com/akrabat/ddd-for-beginners
- http://blog.octo.com/cqrs-larchitecture-aux-deux-visages-partie-1/

## BOOKS
- https://leanpub.com/theengineeringplaybook

## ARTICLES
- https://blog.ippon.fr/2018/09/12/quest-ce-quun-metarchitecte/

## OPINION

-sql: create table with prefix for the project + prefix for the order ex: box_001_member / box_001_event.. It helps to scale and to understand...
-code: create a custom facade for all the important modules. ex: CustomHttp, CustomStore, CustomModal... It helps to scale, refactor, migrate to new modules...
-code: create a base component with all the common code inside. ex in Angular create a BaseComponent in order to manage the onDestroy and to inject all the very used services.
