# CSS

## TOOLS 

- http://pxtoem.com/
- https://flukeout.github.io/
- https://hugogiraudel.github.io/selectors-explained/
- https://wweb.dev/resources/css-separator-generator
- https://github.com/picturepan2/devices.css

## BEST PRACTIVES

- https://github.com/getbem/awesome-bem
- https://github.com/samanthaming/Flexbox30
- https://github.com/j9t/css-optimization-basics
- https://dev.to/ladybug/css-cheat-sheets-3ee0
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- https://www.taniarascia.com/overview-of-css-concepts/
- https://www.sarasoueidan.com/blog/style-settings-with-css-variables/
- https://medium.com/@js_tut/the-complete-css-flex-box-tutorial-d17971950bdc

## LIB

- https://github.com/troxler/awesome-css-frameworks

## BAD

- https://github.com/ffoodd/a11y.css
- https://github.com/Heydon/REVENGE.CSS
- https://github.com/imbrianj/debugCSS
- https://github.com/nternetinspired/debug-css

## FUN

- https://jdan.github.io/98.css/
- https://github.com/AbimaelAndrade/twitter-flexbox

## POSITION

- position property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).
- by default html elements are position: static; in this case these adjusting properties above will not do anything.
- after choosing a position then html elements are then positioned using the adjusting properties: top, bottom, left and right. But those adjusting properties will work differently depending on the position value:

- position: static; # element is not affected by the adjusting properties.
- position: relative; # element is positioned relative to its normal position.
- position: fixed; # element is positioned relative to the viewport, scroll has no effect.
- position: absolute; # element is positioned relative to the nearest positioned ancestor.
- position: sticky; # element is positioned relative to its normal position and toggle to fixed based on the user's scroll position.

- learn more: https://www.w3schools.com/css/css_positioning.asp

## DISPLAY

- it's recommended to use `grid` for layout tags and then `flex` for component level. Because grid can allow simple and powerful adjustement based on the width. Flex will adjust automatically depending on the size so it's perfect for avoiding adjustement issue on small components.
- it's recommended to use `div (section, article, header, footer)` for layout, `p` for text content and then `span` for component level. Because div and p are `block` (full width and equivalant to line-break before and after it). Span is `inline` so your things will stays on the same line. Even better you can avoid `span` with others specific in-line such as: `b,i,em...` 

- learn more: https://www.w3schools.com/cssref/pr_class_display.asp

## SPECIFICITY

- Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied

SCORE	    SELECTOR
0.0.0.0.0	universal (*)
0.0.0.0.1	element or pseudo-element (h1) 
0.0.0.1.0	class, pseudo-class, pseudo-element, attribute (.example/:hover/:after/\[type="radio"])
0.0.1.0.0	id (#example)
0.1.0.0.0	Inline style (style="...")
1.0.0.0.0	overrides (!important)

- learn more:
- https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
- https://uxengineer.com/css-specificity-avoid-important-css/

## RESPONSIVE

- https://css-tricks.com/min-max-and-clamp-are-css-magic/