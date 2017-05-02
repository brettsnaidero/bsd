/* eslint-disable no-console */

import express from 'express';
import compression from 'compression';
import { resolve as pathResolve } from 'path';
import appRootDir from 'app-root-dir';
import reactApplication from './middleware/reactApplication';
import security from './middleware/security';
import clientBundle from './middleware/clientBundle';
import serviceWorker from './middleware/serviceWorker';
import offlinePage from './middleware/offlinePage';
import errorHandlers from './middleware/errorHandlers';
import config from '../../config';

import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import bodyParser from 'body-parser';

const OutlookPassword = process.env.OUTLOOK_SECRET;

// Create our express based server.
const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const router = express.Router();
app.use('/sayHello', router);
router.post('/', handleSayHello);

function handleSayHello(req, res) {
		console.log(req.body);
    console.log(process.env);
    // Not the movie transporter!
    var transporter = nodemailer.createTransport(smtpTransport({
        service: "hotmail",
        auth: {
            user: "brettsnaidero@hotmail.com",
            pass: OutlookPassword
        }
    }));

		let text = 'From: \n\n' + req.body.name + '\n\nEmail: \n\n' + req.body.email + '\n\nMessage: \n\n' + req.body.text; //req.body.name

		let mailOptions = {
	      from: 'brettsnaidero@hotmail.com', // sender address
	      to: 'brettsnaidero@hotmail.com', // list of receivers
	      subject: 'Brett Snaidero - Website Enquiry', // Subject line
	      text: text //, // plaintext body
	      // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
		};

		transporter.sendMail(mailOptions, function(error, info){
		    if (error) {
		        console.log(error);
		        res.json({
					yo: 'error'
				});
		    } else {
		        console.log('Message sent: ' + info.response);
		        res.json({
							yo: info.response
						});
		    };
		});
}

// Don't expose any software information to potential hackers.
app.disable('x-powered-by');

// Security middlewares.
app.use(...security);

// Gzip compress the responses.
app.use(compression());

// When in production mode, we will serve our service worker which was generated
// by the offline-plugin webpack plugin. See the webpack plugins section for
// more information.
// Note: the service worker needs to be served from the http root of your
// application for it to work correctly.
if (process.env.NODE_ENV === 'production'
  && config.serviceWorker.enabled) {
  app.get(`/${config.serviceWorker.fileName}`, serviceWorker);
  app.get(
    `${config.bundles.client.webPath}${config.serviceWorker.offlinePageFileName}`,
    offlinePage,
  );
}

// Configure serving of our client bundle.
app.use(config.bundles.client.webPath, clientBundle);

// Configure static serving of our "public" root http path static files.
// Note: these will be served off the root (i.e. '/') of our application.
app.use(express.static(pathResolve(appRootDir.get(), config.publicAssetsPath)));

// The React application middleware.
app.get('*', reactApplication);

// Error Handler middlewares.
app.use(...errorHandlers);

// Create an http listener for our express app.
const listener = app.listen(config.port, () =>
  console.log(`Server listening on port ${config.port}`),
);

// We export the listener as it will be handy for our development hot reloader,
// or for exposing a general extension layer for application customisations.
export default listener;
