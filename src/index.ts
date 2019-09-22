import createList from './modules/createList.ts';
import './style.scss';

// Пример считывания с базы данных

fetch('./src/DB/DB1.json')
    .then(response => response.json())
    .then(data => showListsWithDB1(data.DB))
    .catch(err => console.error(err));

fetch('./src/DB/DB2.json')
    .then(response => response.json())
    .then(data => showListsWithDB2(data.DB))
    .catch(err => console.error(err))

//Отрисовка списков

const showListsWithDB1 = (data:object[]):void => {
    
    createList('.firstBlock', data, 1, 'dark', 350 ,500);
    createList('.fourthBlock', data, 4, 'dark', 450 ,600);
    createList('.fifthBlock', data, 5);
}

const showListsWithDB2 = (data:object[]):void => {
    
    createList('.secondBlock', data, 2, 'light', 350 ,500);
    createList('.thirdBlock', data, 3, 'light', 450 ,600);
}
