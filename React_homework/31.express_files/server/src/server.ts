import express, {Application, NextFunction, Request, Response} from 'express';
import context from 'request-context';
import {v4 as generateUUID} from 'uuid';
import serverConfig from './configs/serverConfig';
import logger from './logger';
import {LoggerMessages} from './constants/loggerMessages';
import router from './routes';
import loggerConfig from './configs/loggerConfig';

const app: Application = express();
app.use(express.json());
app.use(context.middleware('request'));
app.use((req, res, next) => {
  context.set(loggerConfig.contextName, generateUUID());
  res
    .type('text/plain')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, PUT, OPTIONS')
    .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api', router);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  logger.fatal(LoggerMessages.AppCore.FATAL_ERROR);
  logger.fatal(err);
  res.status(500).send(`Internal Server Error`);
  next();
});

const {port, host} = serverConfig;
app.listen(port, host, () => console.log(`Server is listening on port ${port}!`));
