import * as gulp from 'gulp';
import * as changedInPlace from 'gulp-changed-in-place';
import * as project from '../aurelia.json';

export default function copyFont() {

  const source = 'node_modules/ionic-angular';

  return gulp
    .src(`${source}/fonts/*`)
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest("ionic-angular/fonts"));
}
