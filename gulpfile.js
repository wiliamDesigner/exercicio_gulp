const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const imagemin = require('gulp-imagemin'); 
const uglify = require('gulp-uglify');


function comprimejavascripty(){
    return gulp.src('./source/scriptys/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scriptys'))
}


function funcaopadrao(callback){
    setTimeout(function(){
        console.log("Executando via gulp");
        callback();
    },2000);
}

function compilasass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'));
}

function comprimirimg() {
    return gulp.src('./source/styles/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images')); // Pequena alteracao de caminho para suas imagens, ja que queremos ela dentro de build/images.
}


function dizoi(callback){
        setTimeout(function(){
            console.log("ola gulp");
            diztchau();
            callback();
        }, timeout);
}

function diztchau(){
    console.log("tchau gulp");
}

exports.default=gulp.parallel(funcaopadrao,dizoi);
exports.compilasass = compilasass;
exports.sass = compilasass;
exports.images=comprimirimg;
exports.default = gulp.series(compilasass, comprimirimg);
exports.javascriptys =comprimejavascripty;