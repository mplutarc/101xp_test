let gulp = require('gulp');
let browsersync = require('browser-sync').create();

function browserSync(done) {
	browsersync.init({
		server: {
			baseDir: './'
		},
		port: 3000
	});
	done();
}

function browserReload(done) {
	browsersync.reload();
	done();
}

function watch(){
	gulp.watch('./**/*.html', browserReload);
	gulp.watch('./**/*.js', browserReload);
	gulp.watch('./**/*.css', browserReload);
}

gulp.task('default', gulp.parallel(browserSync, watch));