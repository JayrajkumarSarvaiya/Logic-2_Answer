function luckySum(a, b, c){
  if(a==13)
  {
    a=0;b=0;c=0;
  }
  if(b==13)
  {
    b=0;c=0;
  }
  if(c==13)
  {
    c=0;
  }
  return a+b+c;
}