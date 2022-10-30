const parseMoney = (money) => {
  let strMoney = money + '';
  let parsed = '';

  let i = strMoney.length;
  while (i>3) {
    const back = strMoney.substring(i-3, i);
    parsed = ',' + back + parsed; 
    i-=3;
  }
  
  // last
  const front = strMoney.substring(0, i);
  parsed = front + parsed;

  return parsed;
}

export default parseMoney;