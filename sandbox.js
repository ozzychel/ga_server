function test () {
  let result = false;
  const str = "Mozilla/5.0 (Macintosh Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
  regex = /Macintosh;/g 
  result = regex.test(str)
  console.log(result);
  return result; 
}

test()