<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [CLEAN CODE (from https://github.com/avernois/prez-clean_code )](#clean-code-from-httpsgithubcomavernoisprez-clean_code-)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# CLEAN CODE (from https://github.com/avernois/prez-clean_code )

test unitaire (avec 1 test par comportement)
ecrire code lisible (petite function bien nommée + niveau abstraction equivalent)
code reflete le metier (nommage function et variable)
ne pas commenter un mauvais code mais plutot le réecrire
commentaire explique un choix de conception/ une obligation de conception / plus que la fonction réalisee
a.getB().getC().doThing() -> a.doThing()  (Loi demeter)
utilisation librairie via une facade (impermeable / lib de mes reves)
principe SOLID
jamais retourner null
if/switch -> polymorphisme


## BASE
- https://thinkster.io/
- https://github.com/gothinkster

## CHECK
- https://github.com/returntocorp/semgrep
- https://github.com/kettanaito/naming-cheatsheet

## PHP
- https://github.com/railto/realworld-slim

## JAVASCRIPT
- https://github.com/leonardomso/33-js-concepts#5--vs--vs-typeof
- https://dev.to/carlillo/clean-code-applied-to-javascript-part-vii-practical-refactoring-example-ceaser-cipher-2397