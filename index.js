function hasTargetSum(array, target) {
  if ((array[0] + array[1]) === target) {
    return true
  } else if ((array[0]+array[2]) === target) {
    return true
  } else if((array[0]+array[3])=== target) {
    return true
  } else if((array[0]+array[4])=== target) {
    return true
  } else if((array[0]+array[5])=== target) {
    return true
  } else if((array[1]+array[2])=== target) {
    return true
  } else if((array[1]+array[3])=== target) {
    return true
  } else if((array[1]+array[4])=== target) {
    return true
  } else if((array[1]+array[5])=== target) {
    return true
  } else if((array[2]+array[3])=== target) {
    return true
  } else if((array[2]+array[4])=== target) {
    return true
  } else if((array[2]+array[5])=== target) {
    return true
  } else if((array[3]+array[4])=== target) {
    return true
  } else if((array[3]+array[5])=== target) {
    return true
  } else if((array[4]+array[5])=== target) {
    return true
  }
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here


  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
