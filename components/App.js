export default {
  name: `App`,
  data() {
    return {
      currentChart: "localBarData",
      title: "BT3103 Week 10",
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
    updateCurrentChart: function(newChart) {}
  },
  template: `
  <div>
    Todos: 
    <ol>
      <li>Change the title</li>
      <li>The currentChart should change when a button is clicked. </li>
      <li>Only show currentChart</li>
      <li>Add a pie chart</li>
      <li>Refactor the chart data to be under a single charts node.</li>
      <li>Find the list of charts from the charts node keys.</li>
    </ol>

    Welcome to {{title}}.
    Current chart: <b>{{currentChart}}</b><br>
     <button>Local Bar Chart</button>
     <button>Local Line Chart</button>
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
