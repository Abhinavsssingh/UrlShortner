// var merge = function(nums1, m, nums2, n) {
//     let p = m-1
//     let q = n-1
//     let r = m+n-1
//     console.log(p,q,r)
//     if(p<=0){ return nums1=[...nums2]}
//     while(q>=0){
//         if(nums1[p]==nums2[q]){
//             nums1[r]=nums2[q]
//             nums1[r-1]=nums1[p]
//             r=r-2
//             p--
//             q--
            
//         }
//         if(nums2[q]>nums1[p]){
//             nums1[r]=nums2[q]
//             r--
//             q--
//         }else{
//             nums1[r]=nums1[p]
//             r--
//             p--
//         }
//     }
//     return nums1
    
// };
// console.log(merge([],0,[1],1))


// function jj(num){
//     // if(num%3==0&&num%5==0){return("foobarr")}
//     if(num%3==0){console.log( "foo")}
//     if(num%5==0){console.log("bar")}


    
// }
// console.log(jj(30))

// var search = function(nums, target) {
//     if(nums.length==1) return -1
//     let mid = (nums.length/2)
//     if(target==nums[mid]) return mid
//     if(target<nums[mid]){
//         nums=nums.slice(0,mid-1)
//         return search(nums,target)
//     }
//     else{
//         nums=nums.slice(mid+1,nums.length)
//         return search(nums,target)
//     }
// };

// console.log(search([-1,0,3,5,9,12],9))
// let nums = [-1,0,3,5,9,12]
// console.log(nums.length)

// console.log(2%1)
// for (let i = 0; i < n; i++) {
//     for (let j = 1; j <= Math.sqrt(arr[i]); j++) {
//         if (arr[i] % j == 0) {
//             if (arr[i] == j * j) { // If divisors
//                                    // are equal,
//                 // then take only one as
//                 // it will be perfect square
//                 // root of arr[i]
//                 count += freq.get(j);
//             }
//             else {
//                 // Else take both j and arr[i]/j
//                 // as both will be divisors
//                 count += freq.get(j) + freq.get(arr[i] / j);
//             }
//         }
//     }
//     // As all the elements is divisible
//     // by itself and is counted in freq[]
//     // so reducing its count
//     count = count - 1;
// }

// let a = "AABBERRT"
//  a = [...new Set(a)]
// console.log(a)

// let arr = [0,8,-1,65,9,3,6,6]

// function merge(arr,si,li,mid){
//     var len = li-si+1
    
//     var m = new Array(len)
//     let ind1 = si
//     let ind2 = mid+1
//     let k = 0
//     while(ind1<=mid && ind2<=li){
//           if(arr[ind1]<arr[ind2]){
//             m[k]=arr[ind1]
//             ind1++
//           }else{
//             m[k] = arr[ind2]
//             ind2++
//           }
//           k++
//     }
//     while(ind1<=mid){
//         m[k]=arr[ind1]
//         ind1++
//         k++

//     }
//     while(ind2<=li){
//         m[k]=arr[ind2]
//         ind2++
//         k++
//     }
    
//     for(i=0,j=si;i<m.length;i++,j++){
//         arr[j]=m[i]
//     }
// }

// function mergeSort(arr,si,li){
//     if(si>=li){
//         return 
//     }
//     let mid = si+parseInt((li-si)/2)
//     mergeSort(arr,si,mid)
//     mergeSort(arr,mid+1,li)
//     merge(arr,si,li,mid)
    
//     return arr
// }

// console.log(mergeSort(arr,0,arr.length-1))



function lc(s){
    if(s.length == 0)  return 0
    if(s.length == 1)  return 1
    let set = new Set()
    let i = 0
    let j = 0
    let max = 0
    let ans = []
    while(j<s.length){
        while(set.has(s[j])){
              set.delete(s[i])
              i++
        }
        set.add(s[j])
        let temp = max
        max = Math.max(max,set.size)
        if(temp!=max){
            ans=[...set]
        }
        j++
    }
    return ans
    
}
let s = "abbsdef"
console.log(bf(s))

function bf(s){
    let max = 0
    let arr =[]
    for(i=0;i<s.length;i++){
        for(j=i;j<s.length;j++){
            let sub = ""
            for(k=i;k<=j;k++){
               sub = sub+s[k]
            }
           arr.push(sub)
        }
    }
    for(i of arr){
        max = Math.max(max,[...new Set(i)].length)
    }
    return max
}

function re(arr,max,index){
    if(arr.length<1) return index
    let c =arr.pop()
    // console.log(arr)
    let temp = max
    max=Math.max(max,c)
    // console.log(max)
    if(max!=temp){
        index=arr.length
    }
    return re(arr,max,index)
}
 

console.log(re([1,3,2,5],0,-1))