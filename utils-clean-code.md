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