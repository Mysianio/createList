let listScroll = (listContainer:any) =>{

    let currentY: number;

    let scroll = (e: any) =>{
        listContainer.style.userSelect = 'none';

        let coords:number = e.pageY - currentY;
        
        listContainer.scrollTop-=coords;
        currentY = e.pageY;
        
    }
    
    listContainer.addEventListener('mousedown', (e:any)=>{
        currentY = e.pageY;
        listContainer.addEventListener('mousemove', scroll);
    });

    listContainer.addEventListener('mouseup', ()=>{
        listContainer.style.userSelect = 'text';
        listContainer.addEventListener('mouseleave', ()=>{
            listContainer.removeEventListener('mousemove', scroll);
        })
        listContainer.removeEventListener('mousemove', scroll);
    })
}

export default listScroll;