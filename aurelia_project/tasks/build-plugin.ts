import * as gulp from 'gulp';
import { pluginMarkup } from './process-markup';
import { pluginCSS } from './process-css';
import { transpilePlugin } from './transpile';
import * as del from 'del';
import * as project from '../aurelia.json';

function clean() {
  return del(project.plugin.output);
}

export default gulp.series(
  clean,
  gulp.parallel(
    pluginMarkup,
    pluginCSS,
    transpilePlugin
  ),
);
