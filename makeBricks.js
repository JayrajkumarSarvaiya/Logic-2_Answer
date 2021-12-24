function makeBricks(small, big, goal){
  if(goal >(big*5 + small))
  {
    return false;
  }
  else if((goal%5) <= small)
  {
    return true;
  }
  else
    return false;
}