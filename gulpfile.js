var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');//自动补全
var less = require('gulp-less');//less编译
var connect = require('gulp-connect'); // 构建本地服务

var clearCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');  // js代码压缩

gulp.task('myless',function(){
	return gulp.src(['./www/static/less/global.less','./www/static/less/header.less','./www/static/less/footer.less','./www/static/less/quicknav.less'])
		.pipe(less())
		.pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: true
        }))
		.pipe(concat('global.css'))
		.pipe(gulp.dest('./www/dist/'))
})
	

gulp.task('myjs',function(){
	return gulp.src(['./www/bower_components/seajs/dist/sea.js','./www/bower_components/jquery/dist/jquery.js','./www/bower_components/underscore/underscore.js'])
		.pipe(uglify())
		.pipe(concat('global.js'))
		.pipe(gulp.dest('./www/dist/'))
})


gulp.task('less', function(){
    return gulp.src('./www/static/less/*.less')
		.pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: true
        }))
		.pipe(gulp.dest('./www/static/less/'))
});

gulp.task('localhost',function(){
    return connect.server({
        root: '',  //静态资源目录
        port: 8000
    });
});

gulp.task('mywatch',function(){
	gulp.watch(['./www/static/less/*.less'],['less']);
});

gulp.task('default',['localhost','mywatch']);
