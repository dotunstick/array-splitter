exports.splitArray = (originalArray, size) => {
  if (!originalArray) {
    throw new Error('No array argument supplied.');
  }

  if (typeof size === 'undefined') {
    throw new Error('No Size argument supplied.');
  }

  if (size < 0) {
    throw new Error('Size is less than 0.');
  }

  const splitArrayByCount = (size, startIndex = 0, resultingArray = []) => {
    const arrayLength = originalArray.length;
    const splitSize = Math.ceil((arrayLength - startIndex) / size);
    const endIndex = startIndex + splitSize;

    resultingArray.push(originalArray.slice(startIndex, endIndex));

    if (endIndex <= arrayLength) {
      if (endIndex < arrayLength) {
        return splitArrayByCount(size - 1, startIndex + splitSize, resultingArray);
      }
    }

    return resultingArray;
  }

  console.log(splitArrayByCount(size));
  return splitArrayByCount(size);
}