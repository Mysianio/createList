import '../style.scss';
import listScroll from './scroll.ts';
import sortList from './sort.ts';

// Функция для создания массива элементов списка

let createListElements = (DB: object[], sortedBy:string, sorted:boolean = true): any =>{

    let currentLetter:string;
    let listElements = DB.map((item:any, index:number)=>{
        let firstLetter: string;

        item.name === undefined? item.name = '' : '';
        item.secondname === undefined ? item.secondname = ' ': '';


        if(sortedBy === 'name'){
            firstLetter = item.name.trim().split('')[0];
            firstLetter === undefined? firstLetter = 'Without Name': '';
        }else{
            firstLetter = item.secondname.trim().split('')[0];
            firstLetter === undefined? firstLetter = 'Without Seondname': '';
        }
        let letterTitle: HTMLElement;
        
        if(firstLetter !== currentLetter && (sorted)){
            letterTitle = document.createElement('div');
            letterTitle.className = 'listLetter';
            letterTitle.innerHTML = firstLetter;
            currentLetter = firstLetter;
        }else{
            letterTitle = undefined;
        }

        let listElement:HTMLElement = document.createElement('div');
        listElement.className = 'listElement';
        let sortedByTitle:HTMLElement = document.createElement('span');
        sortedByTitle.className = 'sortedByTitle';
        let listElementTitle:HTMLElement = document.createElement('h3');
        listElementTitle.className = 'listElementTitle';

        if(sortedBy === 'name'){
            sortedByTitle.innerHTML = item.name;
            listElementTitle.appendChild(sortedByTitle)
            listElementTitle.innerHTML = `${listElementTitle.innerHTML} ${item.secondname}`;
        }else if(sortedBy === 'secondname'){
            sortedByTitle.innerHTML = item.secondname;
            listElementTitle.appendChild(sortedByTitle);
            listElementTitle.innerHTML = `${item.name} ${listElementTitle.innerHTML}`;
        }else{
            listElementTitle.innerHTML = `${item.name} ${item.secondname}`;
        }
        
        listElement.append(listElementTitle);
        if(letterTitle === undefined){
            return [listElement];
        }else{           
            return [listElement, letterTitle]
        }
    })
    
    return listElements;
}

// Основная функция для создания списка

let createList = (selector: string, DB: object[], sort:number = 1, theme:string = 'light', width?: number, height?: number):void =>{

    let root:HTMLElement = document.querySelector(selector);
    let listContainer:HTMLElement = document.createElement('div');
    root.append(listContainer);
    listContainer.className = 'createdList';
    if(theme === 'dark'){
        listContainer.className+= ' createListDarkTheme';
    }

    if(width < 250 || width === undefined){
        listContainer.style.width = `250px`;
    }else{
        listContainer.style.width = `${width}px`;
    }
    
    if(height < 150 || height === undefined){
        listContainer.style.height = `150px`;
    }else{
        listContainer.style.height = `${height}px`;
    }

    listScroll(listContainer);
    let sortData= sortList(DB, sort);
    let list = createListElements(sortData.DB, sortData.sortedBy, sortData.sorted)
    
    while(listContainer.childNodes.length){
        listContainer.childNodes[0].remove();
    }

    for(let i = 0; i < list.length; i++){
        if(list[i].length === 1){
            listContainer.append(list[i][0]);
        }else{
            listContainer.append(list[i][1]);
            listContainer.append(list[i][0])
        }
    }
}

export default createList;