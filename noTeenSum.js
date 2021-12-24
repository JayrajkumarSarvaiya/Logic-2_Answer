function noTeenSum(a, b, c){
  if((a >=13 && a < 15) || (a > 16 && a <= 19))
  {
    a=0;
  }
  if((b >=13 && b < 15) || (b > 16 && b <= 19))
  {
    b=0;
  }
  if((c >=13 && c < 15) || (c > 16 && c <= 19))
  {
    c=0;
  }
  return a+b+c;
}