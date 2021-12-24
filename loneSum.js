function loneSum(a, b, c){
  if(a==b && a==c)
  {
    return 0;
  }
  else if(a == b)
  {
    return c;
  }
  else if(a == c)
  {
    return b;
  }
  else if(c == b)
  {
    return a;
  }
  else
    return a+b+c;
}