const gulp = require('gulp');
const sass = require('gulp-sass');

//Je créé une tache que j'apelle sass 
gulp.task('sass', function(){
    //Je vais chercher tous mes fichier .scss
    return gulp.src('./assets/sass/**/*.scss')
    //Je les transpile en css 
    .pipe(sass())
    //Je les envoies vers le dossier css 
    .pipe(gulp.dest('./assets/css'))
})

gulp.task('watch',function(){
    gulp.watch('./assets/sass/**/*.scss',gulp.series('sass'));
})