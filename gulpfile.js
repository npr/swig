var gulp = require('gulp'),
		sketch = require('gulp-sketch'),
		rename = require('gulp-rename');
    concat = require('gulp-concat')
    replace = require('gulp-replace')

// Example gulp tasks

// Moving files with .pipe
gulp.task('moveFiles', function() {
  return gulp
    .src('./src/source.js') // Target source file
    .pipe(gulp.dest('./dist/')) // Create a folder named /dist and move file there
})

// Exporting SVG icons from a Sketch file in /src to /dist
gulp.task('exportIcons', function(){
  return gulp
    .src('./src/source.sketch')
    .pipe(sketch({
      export: 'slices', // Looks for slices as opposed to artboards or pages
      formats: 'svg', // Self explanatory
      clean: 'yes' // Remove Sketch metadata from exported SVG icons
    }))
    .pipe(rename(function(path) {
      path.basename += "-suffix"; // Add a suffix to every exported SVG filename
    }))
    .pipe(gulp.dest('./dist/icons/')); // Create a new folder called /icons and drop SVGs inside
});

// Try running 'gulp'. It should execute moveFiles and exportIcons at the same time.
gulp.task('default', ['moveFiles', 'exportIcons']);
