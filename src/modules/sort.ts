interface IList{
    DB: object[],
    sortedBy: string,
    sorted?:boolean
}

let sortList = (DB: object[], sortType:number) =>{
    let list:IList;
    switch (sortType) {
        case 1:
            list = {DB: DB.sort((a:any,b:any)=>{
                        a.name === undefined? a.name = '': '';
                        b.name === undefined? b.name = '': '';
                        
                        let nameA = a.name.toLowerCase()
                        let nameB = b.name.toLowerCase();
            
                        if(nameA < nameB){
                            return -1;
                        }
                        if (nameA > nameB){
                            return 1;
                        }
                            return 0;
                        }),
                    sortedBy: 'name'
                    }
                break;
        case 2: 
            list = {DB: DB.sort((a:any,b:any)=>{
                            a.name === undefined? a.name = '': '';
                            b.name === undefined? b.name = '': '';
                            
                            let nameA = a.name.toLowerCase()
                            let nameB = b.name.toLowerCase();
            
                            if(nameA > nameB){
                                return -1;
                            }
                            if (nameA < nameB){
                                return 1;
                            }
                            return 0;
                        }),
                    sortedBy: 'name'
                    }
                break;
        case 3:
            list = {DB: DB.sort((a:any,b:any)=>{
                            a.secondname === undefined? a.secondname = '': '';
                            b.secondname === undefined? b.secondname = '': '';

                            let nameA = a.secondname.toLowerCase()
                            let nameB = b.secondname.toLowerCase();

                            if(nameA < nameB){
                                return -1;
                            }
                            if (nameA > nameB){
                                return 1;
                            }
                            return 0;
                        }),
                    sortedBy: 'secondname'
                    }
                break;
        case 4:
            list = {DB: DB.sort((a:any,b:any)=>{
                            a.secondname === undefined? a.secondname = '': '';
                            b.secondname === undefined? b.secondname = '': '';

                            let nameA = a.name.toLowerCase()
                            let nameB = b.name.toLowerCase();

                            if(nameA < nameB){
                                 return -1;
                            }
                            if (nameA > nameB){
                                return 1;
                            }
                            return 0;
                        }),
                    sortedBy: 'secondname'
                    }
                break;
        case 5:
            list = {DB: DB, sortedBy: '', sorted: false};
            break;
        default:
            document.querySelector('.createdList').remove();
            throw new Error('createList was given wrong sort type');
    }
    return list;
}

export default sortList;