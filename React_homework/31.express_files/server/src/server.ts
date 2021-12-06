import express, {Application} from 'express';
import context from 'request-context';
import {v4 as generateUUID} from 'uuid';
import serverConfig from './configs/serverConfig';
import {UserActions} from './constants/loggerMessages';
import logger from './logger';
import loggerContextName from './constants/loggerContextName';

logger.info(UserActions.CREATE_USER_INVOKE, 200, `test`);
logger.error(UserActions.CREATE_USER_INVOKE, 404);
logger.fatal(UserActions.CREATE_USER_INVOKE, 520, new Error(`fatalERR`));

const app: Application = express();
app.use(express.json());
app.use(context.middleware('request'));
app.use((req, res, next) => {
  context.set(loggerContextName, generateUUID());
  res
    .type('text/plain')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const {port, host} = serverConfig;
app.listen(port, host, () => console.log(`Server is listening on port ${port}!`));
