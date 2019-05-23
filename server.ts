// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { ngExpressEngine } from '@nguniversal/express-engine';

import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';
import {REQUEST, RESPONSE} from '@nguniversal/express-engine/tokens';
import {enableProdMode} from '@angular/core';
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// Our index.html we'll use as our template
const template = readFileSync(join(DIST_FOLDER, 'exeApp', 'index.html')).toString();

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');


app.engine('html', (_, options, callback) => {
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
      provideModuleMap(LAZY_MODULE_MAP),
      {
        provide: REQUEST,
        useValue: options.req
      },
      {
        provide: RESPONSE,
        useValue: options.req.res
      }
    ]
  })(_, options, callback);
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'exeApp'));

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'exeApp')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render(join(DIST_FOLDER, 'exeApp', 'index.html'), { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
