//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
function numberSorterAscending(array1,array2,array3){
    sortedArray1 = []
    sortedArray2= []
    sortedArray3 = []
    arraysToSort = [array1,array2,array3]
    sorted = []

    for( i=0; i<arraysToSort.length;i++)
    arraysToSort[i].sort(function(a, b){return a-b});
    

    sortedArray1 = arraysToSort.slice(0,array1.length);
    sortedArray2 = arraysToSort.slice(array1.length, array2.length);
    sortedArray3 = arraysToSort.slice(array2.length, array3.length);
    sorted = [sortedArray1,sortedArray2,sortedArray3];


    
    return sorted
}
console.log(numberSorterAscending(nums1,nums2,nums3));

//Sort each array in decending order.

function numberSorterDescending(array1,array2,array3){
    sortedArray1 = []
    sortedArray2= []
    sortedArray3 = []
    arraysToSort = [array1,array2,array3]
    sorted = []

    for( i=0; i<arraysToSort.length;i++)
    arraysToSort[i].sort(function(a, b){return b-a});
    

    sortedArray1 = arraysToSort.slice(0,array1.length);
    sortedArray2 = arraysToSort.slice(array1.length, array2.length);
    sortedArray3 = arraysToSort.slice(array2.length, array3.length);
    sorted = [sortedArray1,sortedArray2,sortedArray3];


    
    return sorted
}
console.log(numberSorterDescending(nums1,nums2,nums3));
