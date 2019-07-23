export default function (data) {
  let header = [];
  let value = [];

  /**
   * Push Header
   */
  for (let i = 0; i < data.hotel.length; i++) {
    header.push(data.hotel[i].name);
  }
  header.unshift('Date');

  /**
   * Push value
   */
  if (data.price) {
    for (let i in data.price) {
      let child = data.price[i].date;
      let arr = [child];
      for (let k = 1; k < header.length; k++) {
        if (data.price[i].value[k - 1].error) {
          arr[k] = -2500;
        } else if (!data.price[i].value[k - 1].online) {
          arr[k] = -5000;
        } else if (data.price[i].value[k - 1].available) {
          arr[k] = parseInt(data.price[i].value[k - 1].price)
        } else {
          arr[k] = 0;
        }
      }
      value.push(arr);
    }
  }
  value.unshift(header);

  return value
}
