function getMean(array) {
  var sum = 0;

  array.forEach(element => {
    sum += element;
  });

  var mean = sum/array.length;
  return mean;
}

function getMedian(array) {
  array.sort(function(a, b) {return a - b});

  var median;

  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];

  } else {
    var mid1 = array[(array.length/2) - 1];
    var mid2 = array[(array.length/2) + 1];

    median = (mid1 + mid2) / 2;
  }

  return median;
}

function getMode(array) {
  var modeObject = {};

  array.forEach(num => {
    if (!modeObject[num]) {
      modeObject[num] = 0;
    }
    modeObject[num]++;
  });

  var maxFequency = 0;
  var modes = [];
  for(var num in modeObject) {
    if (modeObject[num] > maxFequency) {
      modes = [num];
      maxFequency = modeObject[num];

    } else if (modeObject[num] === maxFequency) {
      modes.push(num);
    }
  }

  if (modes.length === Object.keys(modeObject).length) {
    modes = [];
  }

  return modes;
}

function meanMedianMode(array) {
  var mean = getMean(array);
  var median = getMedian(array);
  var mode = getMode(array);

  var result = {
    mean,
    median,
    mode
  };

  console.log(result);
  return result;
}


export default meanMedianMode;
