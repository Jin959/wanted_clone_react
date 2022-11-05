const chooseItemColor = () => {
  const itemColor = [
    '#f2fbf5',
    '#f3f9fe',
    '#f3f2fb',
    '#f6f8ee',
    '#f7f2f9',
  ];

  return itemColor[Math.floor(Math.random() * itemColor.length)];
}


export default chooseItemColor;