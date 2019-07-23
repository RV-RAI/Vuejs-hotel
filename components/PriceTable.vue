<template>
  <v-data-table
    v-if="hotels.length > 0"
    :headers="headers"
    :items="hotels"
    class="table-default mt-4 mb-4"
  >
    <template slot="items" slot-scope="props">
      <td v-for="i in props.item" :key="i.date">{{ i }}</td>
    </template>
  </v-data-table>
</template>

<script>

  export default {
    props: {
      hotelList: {
        type: Array,
        required: false
      },
      channelList: {
        type: Array,
        required: false
      },
      getChoice: {
        type: Array,
        required: false
      }
    },
    data() {
      return {
        checkBreakfast: true,
        switch1: true,
        switch2: true,
        adult_num: [
          {text: 1, value: 1},
          {text: 2, value: 2},
          {text: 3, value: 3}
        ],
        room_type: [
          {name: this.$t('client.priceTable.type.single'), id: "single"},
          {name: this.$t('client.priceTable.type.double'), id: "double"},
          {name: this.$t('client.priceTable.type.twin'), id: "twin"},
          {name: this.$t('client.priceTable.type.triple'), id: "triple"},
          {name: this.$t('client.priceTable.type.fourth'), id: "fourth"},
          {name: this.$t('client.priceTable.type.washitsu'), id: "washitsu"},
          {name: this.$t('client.priceTable.type.na'), id: "na"},
        ],
        breakfast: [
          {text: this.$t('client.priceTable.meal.yes'), value: true},
          {text: this.$t('client.priceTable.meal.no'), value: false},
        ],
        dinner: [
          {text: this.$t('client.priceTable.meal.yes'), value: true},
          {text: this.$t('client.priceTable.meal.no'), value: false},
        ],
        headers: [
          {
            text: 'Date',
            align: 'left',
            sortable: true,
            value: 'date'
          },
          // { text: 'Host Hotel', value: 'host' },
          // { text: 'Competitor A', value: 'comp_1' },
          // { text: 'Competitor B', value: 'comp_2' },
          // { text: 'Competitor C', value: 'comp_3' }
        ],
        hotels: [
          // {
          // date: '2018-06-03',
          // host: 'Candeo 01',
          // comp_1: '2100',
          // comp_2: '2200',
          // comp_3: '2300'
          // },
        ],
        alert: null,
        loading: false,
        afterSelect: {
          listAdult: [{text: 2, value: 2}],
          listRoomType: [{name: 'double', id: 'double'}],
          listBreakfast: [{text: 'No', value: false}],
          listDinner: [{text: 'No', value: false}]
        }
      }
    },
    methods: {
      showHotel() {
        this.loading = true;
        this.$store.dispatch('hotelList/setSelection', this.getChoice);

        this.alert = null;
        this.$axios.setToken('Bearer ' + this.$store.state.auth.token);
        let url = '/client/price/table?hotel_id='
          + this.getChoice[0]
          + '&channel_id='
          + this.getChoice[1]
          + '&adult_cap='
          + this.getChoice[2]
          + '&room_type='
          + this.getChoice[3]
          + '&breakfast='
          + this.getChoice[4]
          + '&dinner='
          + this.getChoice[5];
        this.$axios.$get(url)
          .then(data => {
            this.hotels = [];
            this.headers = [ {
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

              this.headers = [...this.headers, headerValue];
            }

            if(data.price.length > 0) {
              let hotelsValue;
              for (let j = 0; j < data.price.length; j++) {
                hotelsValue = {
                  date: data.price[j].date,
                };
                for ( let k = 0; k < this.headers.length - 1; k++){
                  if(data.price[j].value[k]) {
                    let position = data.price[j].value[k].position;
                    if(position == k + 1) {
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
                this.hotels.push(hotelsValue);
                this.loading = false
              }
            } else {
              this.loading = false;
              this.alert = {type: 'error', message: this.$t('client.priceTable.errorMess.noVal')}
            }
          })
          .catch(e => {
            console.log(e)
            this.loading = false;
            if (e.response.status === 400) {
              this.alert = {type: 'error', message: this.$t('client.priceTable.errorMess.again')}
            }
          });

      },
      onChange(spec) {
        let hotel = _.find(this.hotelList, {hotel_id : spec});
        let listAdult = [];
        let listRoomType = [];
        let listBreakfast = [];
        let listDinner = [];
        if (spec) {
          listAdult = _.uniq(_.map(hotel.value, 'adult_cap'));
          listRoomType = _.uniq(_.map(hotel.value, 'room_type'));
          listBreakfast = _.uniq(_.map(hotel.value, 'breakfast'));
          listDinner = _.uniq(_.map(hotel.value, 'dinner'));
        }
        // let c = _.difference(this.adult_num, listAdult)

        let finalAdult = this.adult_num;
        if(listAdult.length > 0) {
          finalAdult = [];
          for(let i = 0; i < listAdult.length; i++) {
            finalAdult.push({text: listAdult[i], value: listAdult[i]})
          }
        }

        let finalRoomType = this.room_type;
        if(listRoomType.length > 0) {
          finalRoomType = [];
          for(let i = 0; i < listRoomType.length; i++) {
            finalRoomType.push({name: listRoomType[i], id: listRoomType[i]})
          }
        }

        let finalBF = this.breakfast;
        if(listBreakfast.length > 0) {
          finalBF = [];
          for(let i = 0; i < listBreakfast.length; i++) {
            finalBF.push({text: listBreakfast[i] ? 'Yes': 'No', value: listBreakfast[i]})
          }
        }

        let finalDN = this.dinner;
        if(listDinner.length > 0) {
          finalDN = [];
          for(let i = 0; i < listDinner.length; i++) {
            finalDN.push({text: listDinner[i] ? 'Yes': 'No', value: listDinner[i]})
          }
        }

        this.getChoice[2] = finalAdult[0].value;
        this.getChoice[3] = finalRoomType[0].id;
        this.getChoice[4] = finalBF[0].value;
        this.getChoice[5] = finalDN[0].value;

        return this.afterSelect = {
          listAdult: finalAdult,
          listRoomType: finalRoomType,
          listBreakfast: finalBF,
          listDinner: finalDN
        }

      }
    }
  }
</script>
