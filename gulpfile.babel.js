import gulp from 'gulp'
import sass from 'gulp-sass'
import babel from 'gulp-babel'
import autoprefixer from 'autoprefixer'
import postcss from 'gulp-postcss'
import gutil from 'gulp-util'
import rename from 'gulp-rename'
import cssnano from 'cssnano'
import browserSync from 'browser-sync'
import nodemon from 'gulp-nodemon'
import plumber from 'gulp-plumber'

let bSync = browserSync.create()