function blackjack(a, b){
  let sum1 = 21-a;
  let sum2 = 21-b;
  
  if(a>21 && b>21)
  {
    return 0;
  }
  else if(a<21 && b<21)
  {
    if(sum1>sum2)
      return b;
    else
      return a;
  }
  else if((a==21) ||(b==21))
  {
    if(a==21)
      return a;
    if(b==21)
      return b;
  }
  else
  {
    else if(a>21)
      return b;
    else if (b>21)
      return a;
  }
}