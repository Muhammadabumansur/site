var gulp = require("gulp"),
	browserSync = require('browser-sync'),
	modernizr = require('gulp-modernizr');

gulp.task('server', function() {
	browserSync({
		port: 9000,
		server: {
			baseDir: 'app'
		}
		});
	});

gulp.task('watch', function () {
	gulp.watch([
		'app/*.html',
		'app/js/**/*.js',
		'app/css/**/*.css'
		]).on('change', browserSync.reload);
	});

gulp.task('modernizr', function() {
	gulp.src('app/js/*.js')
		.pipe(modernizr(
					{
						"options" : [
								"setClasses",
								"html5shiv"
						],
						"tests" : ['placeholder', 'cssanimations'],
						"uglify" : true,

						}
						))
		.pipe(gulp.dest("app/js/vendor"))
	});

gulp.task('default', ['modernizr', 'server', 'watch']);