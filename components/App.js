export default {
  name: `App`,
  data() {
    return {
      currentChart: "localBarData",
      title: "Vue practice",
      charts: {
        localBarData: {
          title: "Bar Data",
          chartType: "column-chart",
          data: [["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]]
        },
        localLineData: {
          title: "Line Data",
          chartType: "line-chart",
          data: [["Sun", 32], ["Mon", 46], ["Tue", 28]]
        },
        pieChartData: {
          title: "Pie Data",
          chartType: "pie-chart",
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
      <li><s>Add a title for each chart in the charts node.</s></li>
      <li><s>Add a chartType for each chart in the charts node.</s></li>
      <li>Use the chartType to render the appropriate chart.</li>
    </ol>

    Welcome to {{title}}.
    <br>
    Current chart: <b>{{currentChart}}</b><br>
    <span v-for="(value, key) in charts">
      <button v-on:click="updateCurrentChart(key)">{{value.title}}</button>
    </span>
    <br>
     <div v-if="charts[currentChart].chartType=='column-chart'">
		    Chart: {{charts[currentChart].title}}
        <column-chart :data="charts[currentChart].data"></column-chart>
     </div>
     <div v-if="charts[currentChart].chartType=='line-chart'">
		    Chart: {{charts[currentChart].title}}
        <line-chart :data="charts[currentChart].data"></column-chart>
     </div>
          <div v-if="charts[currentChart].chartType=='pie-chart'">
		    Chart: {{charts[currentChart].title}}
        <pie-chart :data="charts[currentChart].data"></column-chart>
     </div>
      
   
     <br>
      
    </div>
  </div>
`
};
