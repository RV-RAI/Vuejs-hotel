<template>
  <v-card class="month-data_item">
    <div class="month-data_item__body">
      <p>
        <strong>{{ formatDate(item.date) }}</strong>
      </p>
      <v-divider class="mb-2"></v-divider>
      <v-container fluid class="text-center">
        <v-layout row>
          <v-flex class="my-3" xs6>
            <p>予約売上</p>
            <p class="text-24 text-bold">
              ¥{{ formatPrice(item.reservation_sales) }}
            </p>
            <p v-if="item.reservation_ppl">
              (
              {{ formatPrice(item.reservation_ppl) }}
              件 )
            </p>
            <p v-if="item.reservations">
              (
              {{ formatPrice(item.reservations) }}
              件 )
            </p>
            <p class="text-gray text-10" v-if="item.person_nights">
              宿泊人数:{{ item.person_nights }}
            </p>
            <p class="text-gray text-10" v-if="item.reserved_rooms">
              部屋数:{{ item.reserved_rooms }}
            </p>
          </v-flex>
          <v-flex class="my-3" xs6>
            <p>PV</p>
            <p class="text-24 text-bold">
              {{ formatPrice(item.pv) }}
            </p>
            <p class="text-gray text-10" v-if="item.pv_top_avg">
              トップ平均:{{ formatPrice(item.pv_top_avg) }}
            </p>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex class="my-3" xs6　v-if="item.access_ppl">
            <p>訪問者数</p>
            <p class="text-24 text-bold">
              {{ formatPrice(item.access_ppl) }} 人
            </p>
            <p class="text-gray text-10" v-if="item.access_ppl_top_avg">
              トップ平均: {{ formatPrice(item.access_ppl_top_avg) }} 人
            </p>
          </v-flex>
          <v-flex class="my-3" xs6　v-if="item.cvr">
            <p>コンバージョン率</p>
            <p class="text-24 text-bold">{{ item.cvr }} %</p>
            <p class="text-gray text-10" v-if="item.cvr_top_avg">
              トップ平均: {{ item.cvr_top_avg }} %
            </p>
          </v-flex>
          <v-flex class="my-3" xs6　v-if="item.cancellations">
            <p>キャンセル数</p>
            <p class="text-24 text-bold">
              {{ formatPrice(item.cancellations) }}
            </p>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex class="my-3" xs6　v-if="item.reservation_unit_price">
            <p>予約単価</p>
            <p class="text-24 text-bold">
              ¥{{ formatPrice(item.reservation_unit_price) }}
            </p>
            <p
              class="text-gray text-10"
              v-if="item.reservation_unit_price_top_avg"
            >
              トップ平均: ¥{{
                formatPrice(item.reservation_unit_price_top_avg)
              }}
            </p>
          </v-flex>
          <v-flex class="my-3" xs6　v-if="item.rmail_list_num">
            <p>Rmail保有数</p>
            <p class="text-24 text-bold">
              {{ formatPrice(item.rmail_list_num) }}
            </p>
          </v-flex>
          <v-flex class="my-3" xs6　v-if="item.reservation_sales_person">
            <p>一人あたり単価</p>
            <p class="text-24 text-bold">
              ¥{{ formatPrice(item.reservation_sales_person) }}
            </p>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-card>
</template>

<script>
import dateFns from "date-fns";

function formatDate(date) {
  return dateFns.format(date, "YYYY年M月");
}

export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    formatPrice: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      formatDate
    };
  }
};
</script>
