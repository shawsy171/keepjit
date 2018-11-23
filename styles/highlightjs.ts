/**
 *
 * // Config -----------------------------------
@syntax-hue:          220;
@syntax-saturation:   13%;
@syntax-brightness:   18%;


// Monochrome -----------------------------------
@mono-1: hsl(@syntax-hue, 14%, 71%); // default text
@mono-2: hsl(@syntax-hue,  9%, 55%); <-grey
@mono-3: hsl(@syntax-hue, 10%, 40%);

// Colors -----------------------------------
@hue-1:   hsl(187, 47%, 55%); // <-cyan
@hue-2:   hsl(207, 82%, 66%); // <-blue
@hue-3:   hsl(286, 60%, 67%); // <-purple
@hue-4:   hsl( 95, 38%, 62%); // <-green

@hue-5:   hsl(355, 65%, 65%); // <-red 1
@hue-5-2: hsl(  5, 48%, 51%); // <-red 2

@hue-6:   hsl( 29, 54%, 61%); // <-orange 1
@hue-6-2: hsl( 39, 67%, 69%); // <-orange 2


// Base colors -----------------------------------
@syntax-fg:     @mono-1;
@syntax-bg:     hsl(@syntax-hue, @syntax-saturation, @syntax-brightness);
@syntax-gutter: darken(@syntax-fg, 26%);
@syntax-guide:  fade(@syntax-fg, 15%);
@syntax-accent: hsl(@syntax-hue, 100%, 66% );
 */

const hljsCss = `
.hljs-keyword {
  color: blue;
}
`

export default hljsCss;