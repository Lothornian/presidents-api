import {Router} from 'Express';
import Presidents from '../data/presidents';

const app = new Router();

app.route('/')
   .get((req, res) => {
     return res.json(Presidents);
  });

app.route('/Democrats')
   .get((req, res) => {
     return res.json( Presidents.filter( president => president.party === 'Democratic') );
   });

export default app;
