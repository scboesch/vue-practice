export default {
  name: `App`,
  data() {
    return {
      currentChart: "localBarData",
      title: "Vue practice",
      localBarData: [
        ["Jan", 4],
        ["Feb", 2],
        ["Mar", 10],
        ["Apr", 5],
        ["May", 3]
      ],
      localLineData: [["Sun", 32], ["Mon", 46], ["Tue", 28]]
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
      <li>Only show currentChart</li>
      <li>Add a pie chart</li>
      <li>Refactor the chart data to be under a single charts node.</li>
      <li>Find the list of charts from the charts node keys.</li>
    </ol>

    Welcome to {{title}}.
    Current chart: <b>{{currentChart}}</b><br>
     <button v-on:click="updateCurrentChart('localBarData')">Local Bar Chart</button>
     <button v-on:click="updateCurrentChart('localLineData')">Local Line Chart</button>
     <br>
     
		  Chart: Local Bar Data
      <column-chart :data="localBarData"></column-chart>
      <br> 
      Chart: Local Line Data
		  <line-chart :data="localLineData"></line-chart>
    </div>
  </div>
`
};
