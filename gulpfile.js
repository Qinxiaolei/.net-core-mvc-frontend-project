/// <binding AfterBuild='default' Clean='clean' />

const gulp = require('gulp');
const browserify = require('browserify'); //将Node.js环境下在js代码转成浏览器支持的代码
const source = require('vinyl-source-stream'); //将Browserify的输出文件适配成gulp能够解析的格式
const tsify = require('tsify'); //访问TypeScript编译器
const log = require('fancy-log'); //将日志打印到控制台
const uglify = require('gulp-uglify'); //压缩混淆js代码
const sourcemaps = require('gulp-sourcemaps'); //用于支持sourcemaps
const buffer = require('vinyl-buffer'); //用于支持sourcemaps

// 编译ts
gulp.task('default', gulp.series(function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['ts/main.ts'],
        cache: {},
        packageCache: {},
    })
        .plugin(tsify)
        .transform('babelify', {
            presets: ['es2015'],
            extensions: ['.ts'],
        })
        .bundle()
        .on('error', err => {
            log(err.message);
        })
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ //source map
            loadMaps: true
        }))
        .pipe(uglify()) //压缩混淆
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./wwwroot/js'));
}));


// 处理 css
gulp.task('cssHandle', done => {
    gulp.src('./wwwroot/css/*.css')
        .pipe(plumber())
        .pipe(postcss([cssnext, cssnano]))
        .pipe(cleancss())
        .pipe(gulp.dest('./dist/css'));
    done();
});