import sorting from '@/assets/js/sorting'

export default function (hotel, channel) {
  // let listAdult = uniq(hotel.value, 'adult_cap');
  // let listRoomType = uniq(hotel.value, 'room_type');
  // let listBreakfast = uniq(hotel.value, 'breakfast');
  // let listChannel = uniq(hotel.value, 'channel_id');
  //
  // let selectedChannelArr, emptyData = false;
  // if(channel) {
  //   if(listChannel) {
  //     if(listChannel.find(i => i === channel.id)) {
  //       selectedChannelArr = hotel.value.filter(i => i.channel_id === channel.id);
  //       listAdult = uniq(selectedChannelArr, 'adult_cap');
  //       listRoomType = uniq(selectedChannelArr, 'room_type');
  //       listBreakfast = uniq(selectedChannelArr, 'breakfast');
  //     } else {
  //       listAdult = [1];
  //       listRoomType = ['single'];
  //       listBreakfast = [false, true];
  //       emptyData = true
  //     }
  //   }
  // }

  // return {
  //   listAdult: finalAdult(listAdult) ? finalAdult(listAdult).sort(sorting.byValue) : finalAdult(listAdult),
  //   listRoomType: finalRoomType(listRoomType) ? finalRoomType(listRoomType).sort(sorting.byID) : finalRoomType(listRoomType),
  //   listBreakfast: finalBF(listBreakfast) ? finalBF(listBreakfast).sort(sorting.byText) : finalBF(listBreakfast),
  //   emptyData: emptyData,
  //   channelID: channel ? channel.id : ''
  // };
  return {
    listAdult: [1],
    listRoomType: ['single'],
    listBreakfast: [false, true],
    emptyData: true,
    channelID: channel ? channel.id : ''
  };
}

function uniq(arr, key) {
  return _.uniq(_.map(arr, key))
}

function finalAdult(listAdult) {
  if (listAdult.length > 0) {
    let finalAdult = [];
    for (let i = 0; i < listAdult.length; i++) {
      finalAdult.push({text: listAdult[i], value: listAdult[i]})
    }
    return finalAdult
  }
}

function finalRoomType(listRoomType) {
  if (listRoomType.length > 0) {
    let finalRoomType = [];
    for (let i = 0; i < listRoomType.length; i++) {
      finalRoomType.push({name: listRoomType[i], id: listRoomType[i]})
    }
    return finalRoomType
  }
}

function finalBF(listBreakfast) {
  if (listBreakfast.length > 0) {
    let finalBF = [];
    for (let i = 0; i < listBreakfast.length; i++) {
      finalBF.push({text: listBreakfast[i] ? 'Yes' : 'No', value: listBreakfast[i]})
    }
    return finalBF
  }
}
