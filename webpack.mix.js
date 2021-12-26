const mix = require('laravel-mix');

mix.js('src/app.js', 'dist')
.postCss('src/style.css', 'css', [
	require('tailwindcss'),
	require('postcss-nested')
])
.options({
	processCssUrls: false
});
