<template>
  <v-app>
    <v-content>
      <v-container fluid full-content>
        <div class="inside">
          <div class="page-content">
            <div class="section-ctn ctn-l-basic">
              <v-layout align-center>
                <v-flex lg12>
                  <v-card class="mate-card1 card-form-center card-sm mt-3">
                    <div class="el-t-default">
                      <div class="box-filter mb-4">
                        <div class="box-inchannel mb-3">
                          <label class="subheading lbl-ft mb-3"
                            >予約売上昨年対比（曜日調整済)</label
                          >
                          <v-card style="box-shadow:none;">
                            <div class="daily-sum mt-3">
                              <v-layout row wrap>
                                <v-flex
                                  v-for="index in 3"
                                  :key="index"
                                  xs12
                                  sm4
                                  text-xs-center
                                >
                                  <DailyCardTotal
                                    :index="index"
                                    :totalArr="totalArr"
                                  />
                                </v-flex>
                              </v-layout>
                            </div>
                            <div class="week-data my-4">
                              <v-container class="fullwidth" grid-list-lg>
                                <v-layout row wrap>
                                  <v-flex
                                    v-for="(item, index) in finalArr"
                                    :key="index"
                                    xs12
                                    sm6
                                  >
                                    <DailyCard :index="index" :item="item" />
                                  </v-flex>
                                </v-layout>
                              </v-container>
                            </div>
                          </v-card>
                        </div>
                      </div>
                    </div>
                  </v-card>
                </v-flex>
              </v-layout>
            </div>
          </div>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import DailyCard from "@/components/dailyCard";
import DailyCardTotal from "@/components/dailyCardTotal";

function countingTotal(arr, number) {
  let initialValue = 0;

  return arr.reduce((total, currentValue) => {
    return total + currentValue[number];
  }, initialValue);

  // const flatArr = arr.reduce((total, value) => {
  //   return total.concat(value[number]);
  // }, []);
  //
  // return flatArr.reduce((total, currentValue) => {
  //   return total + currentValue
  // });
}
export default {
  layout: "client",
  components: {
    DailyCard,
    DailyCardTotal
  },
  async asyncData({ store, params, $axios }) {
    const url = "/daily_reservations";
    const branch_id = params.id || store.state.defaultHotel.id;
    let hotel_list = store.state.hotelListState;
    let htList = await _.find(
      hotel_list,
      i => Number(i.id) === Number(branch_id)
    );
    const hotel_id = htList.hotel_id;

    let twArr = [];
    let lwArr = [];
    let finalArr = [];
    try {
      const twData = await $axios.post(url, { id: hotel_id, range: 0 });
      twArr = twData.data;
      finalArr[0] = twArr;

      const lwData = await $axios.post(url, { id: hotel_id, range: 52 });
      lwArr = lwData.data;
      finalArr[1] = lwArr;
    } catch (e) {
      console.log(e);
    }

    /**
     * Count total
     */
    const totalRakutenTw = countingTotal(twArr, 1);
    const totalRakutenLw = countingTotal(lwArr, 1);
    const totalJalanTw = countingTotal(twArr, 2);
    const totalJalanLw = countingTotal(lwArr, 2);
    const totalTw = totalRakutenTw + totalJalanTw;
    const totalLw = totalRakutenLw + totalJalanLw;
    const offsetRakuten = totalRakutenTw - totalRakutenLw;
    const offsetJalan = totalJalanTw - totalJalanLw;
    const offsetTotal = totalTw - totalLw;
    const rakutenPercentage = (offsetRakuten / totalRakutenLw) * 100;
    const jalanPercentage = (offsetJalan / totalJalanLw) * 100;
    const totalPercent = (offsetTotal / totalLw) * 100;

    const totalArr = [
      {
        totalTw: totalRakutenTw,
        totalLw: totalRakutenLw,
        offsets: offsetRakuten,
        percent: rakutenPercentage
      },
      {
        totalTw: totalJalanTw,
        totalLw: totalJalanLw,
        offsets: offsetJalan,
        percent: jalanPercentage
      },
      {
        totalTw: totalTw,
        totalLw: totalLw,
        offsets: offsetTotal,
        percent: totalPercent
      }
    ];

    return {
      finalArr,
      totalArr
    };
  }
};
</script>

