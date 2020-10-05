# CSS

## TOOLS 

- http://pxtoem.com/
- https://flukeout.github.io/
- http://1linelayouts.glitch.me/
- https://hugogiraudel.github.io/selectors-explained/
- https://wweb.dev/resources/css-separator-generator
- https://9elements.github.io/fancy-border-radius
- https://github.com/picturepan2/devices.css

## BEST PRACTIVES

- https://github.com/getbem/awesome-bem
- https://github.com/samanthaming/Flexbox30
- https://github.com/j9t/css-optimization-basics
- https://dev.to/ladybug/css-cheat-sheets-3ee0
- https://github.com/philipwalton/flexbugs
- https://github.com/philipwalton/solved-by-flexbox
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- https://www.taniarascia.com/overview-of-css-concepts/
- https://www.sarasoueidan.com/blog/style-settings-with-css-variables/
- https://medium.com/@js_tut/the-complete-css-flex-box-tutorial-d17971950bdc

## LIB

- https://github.com/jgthms/bulma
- https://github.com/troxler/awesome-css-frameworks
- https://github.com/vasanthv/stylize.css

## BAD

- https://github.com/ffoodd/a11y.css
- https://github.com/Heydon/REVENGE.CSS
- https://github.com/imbrianj/debugCSS
- https://github.com/nternetinspired/debug-css

## FUN

- https://jdan.github.io/98.css/
- https://github.com/AbimaelAndrade/twitter-flexbox

## EXAMPLE

- https://codepen.io/argyleink/pen/wvMxEXM scroll contextual conic gradient text

## STACKING CONTEXT

- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
- https://philipwalton.com/articles/what-no-one-told-you-about-z-index/
- https://www.theguild.nl/how-the-css-stacking-context-works/
- https://css-tricks.com/css-stacking-contexts/

## POSITION

- position property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).
- by default html elements are position: static; in this case these adjusting properties above will not do anything.
- after choosing a position then html elements are then positioned using the adjusting properties: top, bottom, left and right. But those adjusting properties will work differently depending on the position value:

- position: static; # element is not affected by the adjusting properties. (they are shown in order they are defined, top to bottom, z-index is automaticly defined as 0)
- position: relative; # element is positioned relative to its normal position.
- position: fixed; # element is positioned relative to the viewport, scroll has no effect.
- position: absolute; # element is positioned relative to the nearest positioned ancestor. (using adjusting properties, if multiple elements are absolute at the same position then they are stacked in the order they are written in the html, z-index can be modified to customize the display of those absolute elements, if z-index is defined to less than 0 then statics elements will be shown above)
- position: sticky; # element is positioned relative to its normal position and toggle to fixed based on the user's scroll position.

- learn more: https://www.w3schools.com/css/css_positioning.asp

## STACKING CONTEXT

- z-index has utility only if position is specified
- z-index is working only between elements at same level
- z-index itself is causing the creation of a stacking context
- then stacking context is taking effects for child elements
- even if a child element has the higher z-index it will stay below because of his parent z-index
- others attribute are creating a stacking context such as: transform, filter, perspective, clip-path...

- a idea is to add z-index to the higher parent possible so not on child items... more infos about stacking context: 
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
- https://www.youtube.com/watch?v=uS8l4YRXbaw CSS Z-Index and Stacking Context
- https://www.youtube.com/watch?v=qblxToPBY7Y Z-index CSS Tutorial ( Position and Stacking Order )


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


## HELPER

- margin,padding is like a clock
- margin: 10px 5px 30px 40px
- top right bottom left

## RESPONSIVE

- https://css-tricks.com/min-max-and-clamp-are-css-magic/

## ANIMATION

- utiliser la proriété transform pour faire des animations en css avec @keyframes car si vous utilisez une proriété css standard tel que margin-left alors cela déclenche le processus de rendering du layout.