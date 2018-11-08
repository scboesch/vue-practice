export default {
  name: `App`,
  data() {
    return {
      currentChart: "localBarData",
      title: "Vue practice",
      charts: {
        localBarData: {
          title: "Bar Data",
          data: [["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]]
        },
        localLineData: {
          title: "Line Data",
          data: [["Sun", 32], ["Mon", 46], ["Tue", 28]]
        },
        pieChartData: {
          title: "Pie Data",
          data: [["Sun", 32], ["Mon", 46], ["Tue", 28]]
        }
      }
    };
  },
  methods: {
    updateCurrentChart: function(newChart) {
      this.currentChart = newChart;
    }
  },
  template: `
  <div>
    Todos: 
    <ol>
      <li><s>Change the title</s></li>
      <li><s>The currentChart should change when a button is clicked.</s> </li>
      <li><s>Only show currentChart</s></li>
      <li><s>Add a pie chart</s></li>
      <li><s>Refactor the chart data to be under a single charts node.</s></li>
      <li><s>Find the list of charts from the charts node keys.</s></li>
      <li>Add a title for each chart in the charts node.</li>
    </ol>

    Welcome to {{title}}.
    <br>
    Current chart: <b>{{currentChart}}</b><br>
    <span v-for="(value, key) in charts">
      <button v-on:click="updateCurrentChart(key)">{{key}}</button>
    </span>
     <br>
      <div v-if="currentChart=='localBarData'">
		    Chart: Local Bar Data
        <column-chart :data="charts.localBarData"></column-chart>
      </div>
      <div v-if="currentChart=='localLineData'">
        Chart: Local Line Data
		    <line-chart :data="charts.localLineData"></line-chart>
      </div>
      <div v-if="currentChart=='pieChartData'">
        Chart: Pie Chart Data
		    <pie-chart :data="charts.pieChartData"></pie-chart>
      </div>
    </div>
  </div>
`
};
