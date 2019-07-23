<template>
  <div class="show-chart" ref="chartdiv" style="min-height:700px"></div>
</template>

<script>
  export default {
    props: {
      hotel_data: {
        type: Array,
        required: false
      },
      channelList: {
        type: Array,
        required: false
      }
    },
    methods: {
      syncChartData: function (chartData, seriesLength) {
        let {am4core, am4charts} = this.$am4core();
        let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

        chart.paddingRight = 20;

        let data = [];
        // let today = new Date();
        // let price_0 = 13000, price1 = 10000, price2 = 12000, price3 = 13000, price4 = 8000, price5 = 15000;
        // for (let i = 0; i < 180; i++) {
        //   let date = dateFormat(today.setDate(today.getDate() + 1), "isoDate");
        //   price_0 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 1000);
        //   price1 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 1000);
        //   price2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 1000);
        //   price3 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 1000);
        //   price4 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 1000);
        //   price5 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 1000);
        //
        //   price_0 = reviewFn(price_0);
        //   price1 = reviewFn(price1);
        //   price2 = reviewFn(price2);
        //   price3 = reviewFn(price3);
        //   price4 = reviewFn(price4);
        //   price5 = reviewFn(price5);
        //
        //   data.push({
        //     date: date, price_0: price_0, room_name_0: 'Room 1',
        //     price_1: price1, room_name_1: 'Room 2', ext_1: price1 - price_0,
        //     price_2: price2, room_name_2: 'Room 3', ext_2: price2 - price_0,
        //     price_3: price3, room_name_3: 'Room 4', ext_3: price3 - price_0,
        //     price_4: price4, room_name_4: 'Room 5', ext_4: price4 - price_0,
        //     price_5: price5, room_name_5: 'Room 6', ext_5: price5 - price_0,
        //   });
        // }

        chartData.map( i => {
          data.push({
            date: i.checkindate,
            price_0: i.rakuten_min_price, room_name_0: i.rakuten_min_room_name, room_plan_0: i.rakuten_min_plan_name,
            price_1: i.jalan_min_price, room_name_1: i.jalan_min_room_name, room_plan_1: i.jalan_min_plan_n4me, ext_1: i.jalan_min_price - i.rakuten_min_price,
            price_2: i.expedia_min_price, room_name_2: i.expedia_min_room_name, room_plan_2: i.expedia_min_plan_name, ext_2: i.expedia_min_price - i.rakuten_min_price,
            price_3: i.booking_min_price, room_name_3: i.booking_min_room_name, room_plan_3: i.booking_min_plan_name, ext_3: i.booking_min_price - i.rakuten_min_price,
            price_4: i.agoda_min_price, room_name_4: i.agoda_min_room_name, room_plan_4: i.agoda_min_plan_name, ext_4: i.agoda_min_price - i.rakuten_min_price
          })
        });

        let colorsArr = [
          '#7AB43F',
          '#ED632B',
          '#ffc506',
          '#002f7f',
          '#4987F8'
        ];

        seriesLength = [
          {id: "rakuten", name: "Rakuten"},
          {id: "jalan", name: "Jalan"},
          {id: "expedia", name: "Expedia"},
          {id: "booking", name: "Booking.com"},
          {id: "agoda", name: "Agoda"},
        ]

        chart.data = data;

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.renderer.grid.template.strokeOpacity = 0;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 0;

        let series = chart.series.push(new am4charts.LineSeries());
        // series.name = `[bold {stroke}] ${seriesLength[0]}[/]: `;
        series.name = `[bold {stroke}] ${seriesLength[0].name}[/]: `;
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "price_0";
        series.stroke = am4core.color(colorsArr[0]);
        series.fill = am4core.color(colorsArr[0]);
        series.strokeWidth = 3;
        let bullet = series.bullets.push(new am4charts.Bullet());
        let circle = bullet.createChild(am4core.Circle);
        circle.width = 9;
        circle.height = 9;
        circle.stroke = am4core.color("#fff");
        circle.strokeWidth = 0;
        bullet.fillOpacity = 0;
        series.tooltipText = "[bold]Room Type: {room_plan_0}";
        series.tooltipText = `[bold]{room_name_0}[/]\n[bold]{valueY} ¥[/]`;
        series.legendSettings.labelText = `[bold {stroke}] ${seriesLength[0].name}[/]: `;
        series.legendSettings.itemValueText = "[bold]{valueY} ¥[/bold]";

        let serriesA = [];
        for (let i = 1; i < seriesLength.length; i++) {
          serriesA[i] = chart.series.push(new am4charts.LineSeries());
          serriesA[i].name = `[bold {stroke}] ${seriesLength[i].name}[/]: `;
          serriesA[i].dataFields.dateX = "date";
          serriesA[i].dataFields.valueY = `price_${i}`;
          serriesA[i].strokeWidth = 2;
          serriesA[i].stroke = am4core.color(colorsArr[i]);
          serriesA[i].fill = am4core.color(colorsArr[i]);
          let bullet1 = serriesA[i].bullets.push(new am4charts.Bullet());
          let circle1 = bullet1.createChild(am4core.Circle);
          circle1.width = 9;
          circle1.height = 9;
          circle1.stroke = am4core.color("#fff");
          circle1.strokeWidth = 0;
          bullet1.fillOpacity = 0;
          serriesA[i].tooltipText = `[bold]Room Type: {room_plan_${i}`;
          serriesA[i].tooltipText = `[bold]{room_name_${i}}[/]\n[bold]{valueY} ¥[/]  ( {ext_${i}} )`;
          serriesA[i].legendSettings.labelText = `[bold {stroke}] ${seriesLength[i].name}[/]: `;
          serriesA[i].legendSettings.itemValueText = `[bold]{valueY} ¥[/]  ( {ext_${i}} )`;
        }

        chart.cursor = new am4charts.XYCursor();

        // let scrollbarX = new am4charts.XYChartScrollbar();
        // scrollbarX.series.push(series);
        // chart.scrollbarX = scrollbarX;

        chart.legend = new am4charts.Legend();
        chart.legend.useDefaultMarker = true;
        let marker = chart.legend.markers.template.children.getIndex(0);
        marker.cornerRadius(4, 4, 4, 4);
        marker.strokeWidth = 3;
        // marker.stroke = am4core.color("#ccc");
        this.chart = chart;
      }
    },
    // methods calculate value
    // compute set value
    computed: {
      letSync: function () {
        return this.syncChartData(this.hotel_data, this.channelList)
      }
    },
    watch: {
      hotel_data: function (newVa, oldVa) {
        this.syncChartData(newVa, this.channelList)
      }
    },
    mounted() {
      this.syncChartData(this.hotel_data, this.channelList)
    },

    beforeDestroy() {
      if (this.chart) {
        this.chart.dispose();
      }
    }
  }
</script>
