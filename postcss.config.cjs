const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project
  content: [
		'./src/**/*.{html,js,svelte,ts}',
  ],

  // This is the function used to extract class names from your templates
  defaultExtractor: content => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

    return broadMatches.concat(innerMatches)
  }
})


const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
    process.env.NODE_ENV === 'production' ? autoprefixer : null,
    ...(process.env.NODE_ENV === 'production' ? [cssnano({ preset: 'default' })] : []),
    //...process.env.NODE_ENV === 'production' ? [purgecss] : [],
	]
};

module.exports = config;
