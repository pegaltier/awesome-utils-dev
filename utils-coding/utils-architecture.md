
# ENGINEERING/ARCHITECTURE

## API MANAGEMENT
- https://tyk.io/

## API NORMALIZATION
- https://app.swaggerhub.com

## OSS
- https://github.com/ivan-bilan/The-Microservices-Pandect

## DDD / CQRS
- https://speakerdeck.com/akrabat/ddd-for-beginners
- http://blog.octo.com/cqrs-larchitecture-aux-deux-visages-partie-1/

## BOOKS
- https://leanpub.com/theengineeringplaybook

## ARTICLES
- https://blog.ippon.fr/2018/09/12/quest-ce-quun-metarchitecte/
- https://understandlegacycode.com/blog/key-points-of-working-effectively-with-legacy-code
- https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/tech-debt-reclaiming-tech-equity

## AUTHENTICATION

It's important to integrate from the beginning a clean architecture for the authentication and roles for the project. for instance using a CAS, SAML, OAuth2(JWT)/OpenID, PassportJS...
 
## DATA MANIPULATION

Whether writing websites, softwares, apps or anything involving sending data back and forth there’s always this chore to serialize/deserialize from one format to another, whether it be JS object to/from JSON, plain JS object to/from typed JS class object, Java POJO to/from JSON,  AMF, Protobuf, XML, YML, etc… Now aside from serialization/deserialization, there’s also this fact that some data can cross boundaries or not. Boundaries can be anything like your backend as opposed to your frontend for example. So there’s also this one another chore like sanitization and hydration :
- sanitization : best example here would be the password from your user which is typically the data that you want to strip away from being inadvertently sent to your frontend.
- hydration : reverse process, when sometimes you receive user data from the frontend and want to feed its missing properties from database to carry out some more logic. And so what ? So it’s a lot of boilerplate

## OPINION

-sql: create table with prefix for the project + prefix for the order ex: box_001_member / box_001_event.. It helps to scale and to understand...
-code: create a custom facade for all the important modules. ex: CustomHttp, CustomStore, CustomModal... It helps to scale, refactor, migrate to new modules...
-code: create a base component with all the common code inside. ex in Angular create a BaseComponent in order to manage the onDestroy and to inject all the very used services.
