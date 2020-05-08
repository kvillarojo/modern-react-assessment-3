
export class DeletedItems  {
    savePostID(itemID) {
        const  deleted_item = JSON.parse(localStorage.getItem('deleted_items'));
        if(!deleted_item){
            const items = [itemID];
            localStorage.setItem('deleted_items', JSON.stringify(items));
        }else {
            deleted_item.push(itemID);
            localStorage.setItem('deleted_items', JSON.stringify(deleted_item));
        }
    }
}
