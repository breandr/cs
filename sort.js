const items = [1,5,5,8,0,4,3,2,6,8,9,7];

function partition(items, left, right){
    const mid = Math.floor(items.length/2);
    let lp = 0;
    let rp = items.length - 1;

    while(lp < rp){
        while(items[lp] < items[mid]) ++lp;
        while(items[rp] > items[mid]) --rp;

        if(lp < rp){
            [items[lp], items[rp]] = [items[rp], items[lp]];
        }
    }

    return lp;
}

function quickSort(items, left = 0, right = items.length - 1){
    if(items.length <= 1) return items;

    const index = partition(items, left, right);

    if(left < index - 1){
        quickSort(items, left, index - 1);
    }

    if(index < right){
        quickSort(items, index, right);
    }

    return items;
}


function merge(items1, items2){
    const merged = [];

    while(items1.length && items2.length){
        if(items1[0] < items2[0]){
            merged.push(items1.shift())
        }else{
            merged.push(items2.shift());
        }
    }

    merged.push(...items1, ...items2);
    return merged;
}

function mergeSort(items){
    if(items.length <= 1) return items;


    const mid = Math.floor(items.length/2);
    const leftPartition = items.slice(0, mid);
    const rightPartition = items.slice(mid);

    return merge(mergeSort(leftPartition), mergeSort(rightPartition));
}
function bubbleSort(){}

console.log(quickSort(items));
