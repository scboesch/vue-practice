export default {
  name: `App`,
  data() {
    return {
      currentChart: "localBarData",
      title: "Vue practice",
      charts: {
        localBarData: [
          ["Jan", 4],
          ["Feb", 2],
          ["Mar", 10],
          ["Apr", 5],
          ["May", 3]
        ],
        localLineData: [["Sun", 32], ["Mon", 46], ["Tue", 28]],
        pieChartData: [["Sun", 32], ["Mon", 46], ["Tue", 28]]
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
      <li>Refactor the chart data to be under a single charts node.</li>
      <li>Find the list of charts from the charts node keys.</li>
    </ol>

    Welcome to {{title}}.
    Current chart: <b>{{currentChart}}</b><br>
     <button v-on:click="updateCurrentChart('localBarData')">Bar Chart</button>
     <button v-on:click="updateCurrentChart('localLineData')">Line Chart</button>
     <button v-on:click="updateCurrentChart('pieChartData')">Pie Chart</button>
    
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
