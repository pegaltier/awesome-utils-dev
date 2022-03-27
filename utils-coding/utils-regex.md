# Regex

## Tools

- https://regexr.com/
- https://regex101.com/
- https://regex-vis.com/
- https://www.regextester.com/
- https://www.textfixer.com/tools/

## Oss
- https://github.com/Bowen7/regex-vis
- https://github.com/francisrstokes/super-expressive

## Example

```
("C:\\Users\\pegal\\folder\\(.*)")
(.*)'@modules/customer/(.*)/(.*)';
(.*)'@modules/customer/(.*)';
(- https:\/\/(.*))
((https:\/\/)(.*))
((https:\/\/github.com\/)(.*))
```

## Replacer

```
**$3** [$3]($&)
**$3** [$3]($&){:target="_blank"}
```