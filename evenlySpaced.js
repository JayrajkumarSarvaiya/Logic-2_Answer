function evenlySpaced(a, b, c){
  return ((a+b) == 2*c) || ((a+c) == 2*b) || ((b+c) == 2*a);
}