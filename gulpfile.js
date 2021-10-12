// Initialize modules
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
// const babel = require('gulp-babel');
// const terser = require('gulp-terser');
// const browsersync = require('browser-sync').create();

// Sass Task
function scssTask() {
    return src('scss/**/*.scss', { sourcemaps: false })
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest('./styles', { sourcemaps: false }));
}

function scssTask2() {
    return src('scss/**/*.module.scss', { sourcemaps: false })
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest('styles', { sourcemaps: false }));
}


// Watch Task
function watchTask() {
    watch(['scss/**/*.scss', 'scss/**/*.module.scss'], series(scssTask, scssTask2)
    );
}

// Default Gulp Task
exports.default = series(scssTask, scssTask2, watchTask);
