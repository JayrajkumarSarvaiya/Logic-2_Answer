function roundSum(a, b, c){
  return round10(a)+round10(b)+round10(c)
}
function round10(num){
  if(num%10 <5)
    return num - (num%10);
  else
    return num + (10 - (num%10));
}