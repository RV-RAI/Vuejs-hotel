export default function (data) {
  let hotelsValue;
  let hotel_array = [];
  let hotelNameArray = [];

  /////////////////////
  hotelNameArray = data.hotel.map(i => i.name);

  if (data.price.length > 0) {
    for (let j = 0; j < data.price.length; j++) {
      hotelsValue = {
        date: data.price[j].date,
      };
      for (let k = 0; k < hotelNameArray.length; k++) {
        if (data.price[j].value[k]) {
          let position = data.price[j].value[k].position;
          if (position === k + 1) {
            if (data.price[j].value[k].error) {
              hotelsValue[`price_${k}`] = -2500;
              hotelsValue[`room_name_${k}`] = 'Scraper Error';
              hotelsValue[`ext_${k}`] = 0
            } else if (!data.price[j].value[k].online) {
              hotelsValue[`price_${k}`] = -5000;
              hotelsValue[`room_name_${k}`] = 'Hotel is not available in this channel';
              hotelsValue[`ext_${k}`] = 0
            } else if (data.price[j].value[k].available) {
              hotelsValue[`price_${k}`] = data.price[j].value[k].price;
              hotelsValue[`room_name_${k}`] = data.price[j].value[k].room_name;
              hotelsValue[`ext_${k}`] = data.price[j].value[k].price -
                hotelsValue['price_0']
            } else {
              hotelsValue[`price_${k}`] = 0;
              hotelsValue[`room_name_${k}`] = 'Out of room';
              hotelsValue[`ext_${k}`] = 0
            }
            hotelsValue[`name_${k}`] = data.price[j].value[k] ? data.price[j].value[k].name : '';
          } else {
            if (!hotelsValue[`room_name_${k}`]) {
              hotelsValue[`price_${k}`] = 0;
              hotelsValue[`name_${k}`] = '';
              hotelsValue[`room_name_${k}`] = '';
              hotelsValue[`ext_${k}`] = 0;
            }

            // Add to next position value
            let truePosition = position - (k + 1);
            hotelsValue[`price_${k + truePosition}`] = data.price[j].value[k] ? data.price[j].value[k].price : 0;
            hotelsValue[`name_${k + truePosition}`] = data.price[j].value[k] ? data.price[j].value[k].name : '';
            hotelsValue[`room_name_${k + truePosition}`] = data.price[j].value[k] ? data.price[j].value[k].room_name : '';
            hotelsValue[`ext_${k + truePosition}`] = data.price[j].value[k] ? data.price[j].value[k].price -
              hotelsValue['price_0'] : 0;
          }
        } else if (!data.price[j].value[k]) {
          // Check next position value
          if (!hotelsValue[`room_name_${k}`]) {
            hotelsValue[`price_${k}`] = 0;
            hotelsValue[`name_${k}`] = '';
            hotelsValue[`room_name_${k}`] = '';
            hotelsValue[`ext_${k}`] = 0;
          }
        }
      }
      hotel_array.push(hotelsValue);
    }
  } else {
    hotel_array = [];
  }
  return {hotel_array, hotelNameArray}
}
