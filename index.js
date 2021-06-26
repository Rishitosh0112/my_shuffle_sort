document.addEventListener('DOMContentLoaded', () => {
    
    let parent = document.getElementById('item-list'), cachedSortedData = [];

     
    

    /**
     * @description - check if the array is sorted or not in ascending order (this could seem like un-necessary action, 
     * but will prevent unnecessary dom updates by clicking on sort when dom is already sorted) 
     */
    function isSortedInAscending() {
        isSorted = true;
        const childItems = parent.children;

        for(let i = 0; i< childItems.length - 1; i++) {
            if(Number(childItems[i].innerText) >= Number(childItems[i+1].innerText)) {
                isSorted = false;
            }
        }
        return isSorted;
    }

   /**
    * @description - shuffling the dom
    */
   
    document.getElementById('shuffle').onclick = function() {
        const childItems = Array.prototype.slice.call(parent.children);
        while(childItems.length) {
            const randomNo = Math.random();
            let no = Math.floor(randomNo * childItems.length);
            let appendData = Array.prototype.splice.call(childItems, no, 1)[0];
            parent.append(appendData)

        }

    }

    /**
    * @description - sort the dom
    */

    document.getElementById('sort').onclick = function() {

        if(isSortedInAscending()) {
            return;
        }

        if(cachedSortedData.length) {
            parent.replaceChildren(...cachedSortedData);
            return;
        }

        const childItems = Array.prototype.slice.call(parent.children);
        let sortedResult =  childItems.sort((a, b) => {
            return Number(a.innerText) - Number(b.innerText)
         })
         cachedSortedData = sortedResult;
         parent.replaceChildren(...sortedResult);
    }

})

