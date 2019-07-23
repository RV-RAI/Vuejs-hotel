export default function (data) {
  let hotels = [];
  let headers = [ {
    text: 'Date',
    align: 'left',
    sortable: true,
    value: 'date'
  }];

  let _length = data.hotel.length;
  for (let i = 0; i < _length; i++) {
    let headerValue =  {
      text: data.hotel[i].name,
      value: `comp_${i}`
    };

    headers = [...headers, headerValue];
  }

  if(data.price.length > 0) {
    let hotelsValue;
    for (let j = 0; j < data.price.length; j++) {
      hotelsValue = {
        date: data.price[j].date,
      };
      for ( let k = 0; k < headers.length - 1; k++){
        if(data.price[j].value[k]) {
          let position = data.price[j].value[k].position;
          if(position === k + 1) {
            hotelsValue[`comp_${k}`] = data.price[j].value[k] ? data.price[j].value[k].price : 'N.A';
          } else {
            if(!hotelsValue[`comp_${k}`]) {
              hotelsValue[`comp_${k}`] = 'N/A';
            }

            // Add to next position value
            let truePosition = position - (k + 1);
            hotelsValue[`comp_${k + truePosition}`] = data.price[j].value[k] ? data.price[j].value[k].price : 'N.A';
          }
        } else if (!data.price[j].value[k]) {
          // Check next position value
          if(!hotelsValue[`comp_${k}`]) {
            hotelsValue[`comp_${k}`] = 'N/A';
          }
        }
      }
      hotels.push(hotelsValue);
    }
  }
  return {
    headers: headers,
    hotels: hotels
  }
}
