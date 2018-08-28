function distanceFromHqInBlocks (someValue) {
  if (someValue >= 42) {
    return someValue - 42;
  }
  else {
    return 42 - someValue;
  }
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs(startBlock - endBlock) * 264;
}


function calculatesFarePrice(start, destination) {
  let feetDistance = distanceTravelledInFeet(start, destination);
  let fare;
  if (feetDistance < 400) {
    fare = 0;
  }
  else if (feetDistance > 400 && feetDistance < 2000) {
    fare = (feetDistance - 400) * 2 * 0.01;
  }
  else if (feetDistance > 2000 && feetDistance < 2500) {
    fare = 25;
  }
  else {
    fare = 'cannot travel that far';
  }
  return fare;
}
