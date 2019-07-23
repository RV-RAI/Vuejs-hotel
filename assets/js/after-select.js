export default function (hotel_id, hotelList) {
  let hotel = _.find(hotelList, {id : hotel_id});
  let listAdult = [];
  let listRoomType = [];
  let listBreakfast = [];
  let listDinner = [];
  if (hotel_id) {
    listAdult = _.uniq(_.map(hotel.value, 'adult_cap'));
    listRoomType = _.uniq(_.map(hotel.value, 'room_type'));
    listBreakfast = _.uniq(_.map(hotel.value, 'breakfast'));
    listDinner = _.uniq(_.map(hotel.value, 'dinner'));
  }
  // let c = _.difference(this.adult_num, listAdult)

  let finalAdult;
  if(listAdult.length > 0) {
    finalAdult = [];
    for(let i = 0; i < listAdult.length; i++) {
      finalAdult.push({text: listAdult[i], value: listAdult[i]})
    }
  }

  let finalRoomType;
  if(listRoomType.length > 0) {
    finalRoomType = [];
    for(let i = 0; i < listRoomType.length; i++) {
      finalRoomType.push({name: listRoomType[i], id: listRoomType[i]})
    }
  }

  let finalBF;
  if(listBreakfast.length > 0) {
    finalBF = [];
    for(let i = 0; i < listBreakfast.length; i++) {
      finalBF.push({text: listBreakfast[i] ? 'Yes': 'No', value: listBreakfast[i]})
    }
  }

  let finalDN;
  if(listDinner.length > 0) {
    finalDN = [];
    for(let i = 0; i < listDinner.length; i++) {
      finalDN.push({text: listDinner[i] ? 'Yes': 'No', value: listDinner[i]})
    }
  }

  return {
    listAdult: finalAdult,
    listRoomType: finalRoomType,
    listBreakfast: finalBF,
    listDinner: finalDN
  };
}
