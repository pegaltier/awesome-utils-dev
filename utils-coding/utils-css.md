# CSS

## TOOLS 

- http://pxtoem.com/
- https://csslayout.io/
- https://animista.net/
- https://justcode.today/
- https://ui-snippets.dev/
- https://shadows.brumm.af/
- https://copy-paste-css.com/
- https://flukeout.github.io/
- https://accordionslider.com/
- https://enes.in/sorted-colors/
- https://1linelayouts.glitch.me/
- http://www.menucool.com/css-menu
- https://fluid-typography.netlify.app/
- https://dailydevlinks.com/minimal-css-loader-collection
- https://hugogiraudel.github.io/selectors-explained/
- https://wweb.dev/resources/css-separator-generator
- https://www.magicpattern.design/tools/css-backgrounds/
- https://github.com/michael-andreuzza/wickedblocks
- https://9elements.github.io/fancy-border-radius
- https://github.com/picturepan2/devices.css
- https://github.com/sdras/cssgridgenerator
- https://css-shorthands.netlify.app/
- https://markodenic.com/css-tips/
- https://cssbuttons.vercel.app/
- https://cssarrowplease.com/

## BEST PRACTIVES

- https://web.dev/learn/css/
- https://web.dev/color-scheme/
- https://web.dev/centering-in-css/
- https://web.dev/font-best-practices/
- https://github.com/getbem/awesome-bem
- https://github.com/necolas/idiomatic-css
- https://github.com/philipwalton/flexbugs
- https://github.com/samanthaming/Flexbox30
- https://calibreapp.com/blog/css-performance
- https://ishadeed.com/article/css-scroll-snap/
- https://dev.to/ladybug/css-cheat-sheets-3ee0
- https://github.com/AllThingsSmitty/css-protips
- https://github.com/j9t/css-optimization-basics
- https://melanie-richards.com/blog/css-grid-sticky
- https://github.com/philipwalton/solved-by-flexbox
- https://ishadeed.com/article/css-short-long-content
- https://www.taniarascia.com/overview-of-css-concepts
- https://www.joshwcomeau.com/animation/css-transitions/
- https://css-tricks.com/snippets/css/a-guide-to-flexbox
- https://moderncss.dev/complete-guide-to-centering-in-css/
- https://engineering.kablamo.com.au/posts/2021/my-first-css
- https://piccalil.li/tutorial/fluid-typography-with-css-clamp
- https://www.sarasoueidan.com/blog/style-settings-with-css-variables
- https://dev.to/joyshaheb/css-grid-cheat-sheet-illustrated-in-2021-1a3
- https://timseverien.com/posts/2020-12-06-what-makes-css-hard-to-master
- https://medium.com/@js_tut/the-complete-css-flex-box-tutorial-d17971950bdc

## WEBSITES

- https://css-irl.info/

## LIB

- https://github.com/jgthms/bulma
- https://github.com/r1/cssbuttons
- https://github.com/linkedin/css-blocks
- https://github.com/vasanthv/stylize.css
- https://github.com/css-doodle/css-doodle
- https://github.com/marcj/css-element-queries
- https://github.com/projectwallace/wallace-cli
- https://github.com/yogurt-foundation/yogurt-css
- https://github.com/troxler/awesome-css-frameworks

## TAILWIND

- https://tailblend.vercel.app/
- https://github.com/tw-in-js/twind
- https://github.com/mertJF/tailblocks
- https://github.com/tailwindlabs/headlessui
- https://github.com/aniftyco/awesome-tailwindcss
- https://github.com/tailwindlabs/tailwindcss-forms
- https://github.com/windicss/windicss-intellisense

## BAD

- https://github.com/ffoodd/a11y.css
- https://github.com/Heydon/REVENGE.CSS
- https://github.com/imbrianj/debugCSS
- https://github.com/nternetinspired/debug-css

## FUN

- https://jdan.github.io/98.css/
- https://github.com/botoxparty/XP.css
- https://github.com/captbaritone/webamp
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

- https://www.w3schools.com/cssref/pr_class_display.asp
- https://www.w3schools.com/cssref/playit.asp?filename=playcss_display
- https://hackernoon.com/the-ultimate-css-battle-grid-vs-flexbox-d40da0449faf
- https://www.webdesignerdepot.com/2018/09/grid-vs-flexbox-which-should-you-choose/
- https://webdesign.tutsplus.com/articles/flexbox-vs-css-grid-which-should-you-use--cms-30184

### COMMON

- inline: Displays an element as an inline element (like <span>). Any height and width properties will have no effect.
- block: Displays an element as a block element (like <p>). It starts on a new line, and takes up the whole width
- flex: Displays an element as a block-level flex container
- grid:	Displays an element as a block-level grid container
- table: Let the element behave like a <table> element

### OCCASIONAL

inline-block: Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values	
inline-flex: Displays an element as an inline-level flex container	
inline-grid: Displays an element as an inline-level grid container	
inline-table: The element is displayed as an inline-level table

### TIPS

- The basic difference between CSS Grid Layout and CSS Flexbox Layout is that flexbox was designed for layout in one dimension - either a row or a column. Grid was designed for two-dimensional layout - rows, and columns at the same time. It's recommended to use `grid` for layout tags and then `flex` for component level. Because grid can allow simple and powerful adjustement based on the width. Flex will adjust automatically depending on the size so it's perfect for avoiding adjustement issue on small components. 
- it's recommended to use `div (section, article, header, footer)` for layout, `p` for text content and then `span` for component level. Because div and p are `block` (full width and equivalant to line-break before and after it). Span is `inline` so your things will stays on the same line. Even better you can avoid `span` with others specific in-line such as: `b,i,em...` 

### COMPARAISON

1. Flexbox is One Dimensional, Grid is Two Dimensional
2. Grid is Container-Based, Flexbox is Content-Based

### GRID

CSS Grid focuses on precise content placement. Each item is a grid cell, lined up along both a horizontal and a vertical axis. If you want to accurately control the position of items within a layout, CSS Grid is the way to go.

“It provides a mechanism for authors to divide available space for layout into columns and rows using a set of predictable sizing behaviors. Authors can then precisely position and size the building block elements of their application into the grid areas defined by the intersections of these columns and rows.”

### FLEXBOX

Flexbox focuses on content flow rather than content placement. Widths (or heights) of flex items are determined by the content of the item. Flex items grow and shrink according to their inner content and the available space. This is how W3C’s flexbox docs explain the goals of the layout module:

“Flexbox gains simple and powerful tools for distributing space and aligning content in ways that web apps and complex web pages often need.”

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

- https://jst.hashnode.dev/css-animation-tutorial

- utiliser la proriété transform pour faire des animations en css avec @keyframes car si vous utilisez une proriété css standard tel que margin-left alors cela déclenche le processus de rendering du layout.