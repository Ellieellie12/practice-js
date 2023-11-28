function getPointsScored(elapsedTime) {
  if (elapsedTime < 30) {
    return 100
  } else if (elapsedTime < 60) {
    return 75
  } else {
    return 25
  }
}

const points = getPointsScored(30)
//invoking the function 
// the return will be 75 because the elapsed time is 30 points
//if the elapsed time was changed to 90 it would return 25 points