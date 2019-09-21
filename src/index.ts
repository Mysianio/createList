import createList from './modules/createList.ts';
import {DB1, DB2} from './modules/DB.ts';
import './style.scss';

createList('.firstBlock', DB1, 1, 'dark', 350 ,500);
createList('.secondBlock', DB2, 2, 'light', 350 ,500);
createList('.thirdBlock', DB2, 3, 'light', 450 ,600);
createList('.fourthBlock', DB1, 4, 'dark', 450 ,600);
createList('.fifthBlock', DB1, 5);