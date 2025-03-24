let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let nums2=[];
for(let i=0;i<nums.length;i++){
    if(nums[i]%2!=0){
        nums2.push(nums[i]);
        
    }
}
console.log(nums2);