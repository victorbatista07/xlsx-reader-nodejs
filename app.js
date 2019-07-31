import { listen } from './config/server';

listen(3000, () => console.log('Connected on port 3000.'));