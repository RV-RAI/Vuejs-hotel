<template>
  <div class="show-chart">
    <GChart
      type="LineChart"
      :data="dataChart"
      :options="chartOptions"
      class="test"
      style="height:500px;width:100%;"
    />
  </div>
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
    data() {
      return {
        chartOptions: {
          displayAnnotations: true,
          chartArea: {height: '400', width: '100%'},
          chart: {
            title: "",
            lineWidth: 10
          },
          colors: [
            '#7AB43F',
            '#ED632B',
            '#ffc506',
            '#002f7f',
            '#4987F8'
          ],
          // curveType: 'function',
          legend: { position: 'top', alignment: "center" },
          // axisTitlesPosition: "none",
          hAxis: {
            textPosition: 'in',
            textStyle: {
              fontSize: 8
            }
          },
          vAxis: {
            textPosition: 'out'
          }
        },
        height: 400
      }
    },
    computed: {
      dataChart() {
        let headers = ["Date"]
        this.channelList.map(i => headers.push(i.name))

        let finalDataArr = []
        this.hotel_data.map(i => {
          let dataArr = []
          dataArr.push(i.checkindate)
          for(let j = 0; j < this.channelList.length; j++) {
            dataArr.push(i[`${this.channelList[j].id}_min_price`])
          }
          finalDataArr.push(dataArr)
        })

        return [
          headers,
          ...finalDataArr
        ]
      }
    }
  }
</script>
