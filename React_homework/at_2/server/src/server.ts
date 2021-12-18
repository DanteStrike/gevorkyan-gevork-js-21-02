import express, {Application} from 'express';
import context from 'request-context';
import {v4 as generateUUID} from 'uuid';
import serverConfig from './configs/serverConfig';
import router from './routes';
import loggerConfig from './configs/loggerConfig';
import CommonService from "./services/commonService";

const app: Application = express();
app.use(express.json());
app.use(context.middleware('request'));
app.use((req, res, next) => {
  context.set(loggerConfig.contextName, generateUUID());
  res
    .type('application/json; charset=utf-8')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, PUT, OPTIONS')
    .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(router);
app.use(CommonService.getUnexpectedServerError);

const {port, host} = serverConfig;
app.listen(port, host, () => console.log(`Server is listening on port ${port}!`));
