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
    <h3> Charts based on
			<a href="https://github.com/ankane/vue-chartkick">vue-chartkick</a>
		</h3>
    Current chart: {{currentChart}}
     <button>Local Bar Chart</button>
     <button>Local Line Chart</button>
     <button>FB Bar Chart</button>
     <button>FB Line Chart</button>
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
