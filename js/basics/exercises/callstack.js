// This illustrates an "out of stack" or "too much recursion" error
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first!");
