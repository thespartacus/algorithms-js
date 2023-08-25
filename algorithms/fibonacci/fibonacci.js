function fibonacci(position) {
  var result;

  if (position < 3) {
    return 1;

  } else {
    result = fibonacci(position - 1) + fibonacci(position - 2);
  }

  console.log(result);
  return result;
}

export default fibonacci;
