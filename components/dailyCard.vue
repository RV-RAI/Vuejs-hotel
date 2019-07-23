<template>
  <v-card class="week-data_item">
    <div class="week-data_item__title">
      {{ index === 0 ? "今週の予約売上" : "昨年の予約販売" }}
    </div>
    <div class="week-data_item__body">
      <div class="box-show--chart mb-3">
        <GChart type="LineChart" :data="dataChart" :options="chartOptions" />
      </div>
      <div class="box-show--table">
        <v-data-table
          :headers="headers"
          :items="dataTable"
          class="elevation-0"
          hide-actions
        >
          <template v-slot:items="props">
            <td>{{ props.item.date }}</td>
            <td class="text-xs-left">{{ props.item.rakuten }}</td>
            <td class="text-xs-left">{{ props.item.jalan }}</td>
          </template>
        </v-data-table>
      </div>
    </div>
  </v-card>
</template>

<script>
import dateFns from "date-fns";
import numeral from "numeral";
import ja from "date-fns/locale/ja";

function formatPrice(value) {
  return numeral(value).format("0,0");
}

function formatDate(date) {
  return dateFns.format(date, "YYYY年M月D日(dd)", { locale: ja });
}

export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    item: {
      type: Array,
      required: true
    }
  },
  data() {
    let dataTable = [];
    this.item.forEach(i =>
      dataTable.push({
        date: formatDate(i[0]),
        rakuten: formatPrice(i[1]),
        jalan: formatPrice(i[2])
      })
    );

    return {
      headers: [
        {
          text: "日付",
          align: "left",
          value: "date",
          fixed: true
        },
        { text: "楽天トラベル", value: "rakuten" },
        { text: "じゃらん", value: "jalan" }
      ],
      dataTable,
      chartOptions: {
        chart: {
          title: "今週",
          lineWidth: 10
        },
        colors: ["#7AB43F", "#ED632B"]
      },
      dataChart: [["Date", "楽天", "じゃらん"], ...this.item]
    };
  }
};
</script>
