import Vue from "vue";
import App from "./components/App.js";

describe("Vue component tests", () => {
  it("An example test should pass.", () => {
    expect(2).toEqual(2);
  });
  it("The component should have the correct title property.", () => {
    const defaultData = App.data();
    expect(defaultData.title).toBe("Vue practice");
  });

  it("The component should have an updateCurrentChart function.", () => {
    expect(typeof App.methods.updateCurrentChart).toBe("function");
  });
  it("The component type to be object", () => {
    expect(typeof App).toBe("object");
  });
  it("The component should have a data function.", () => {
    expect(typeof App.data).toBe("function");
    const defaultData = App.data();
    // And there should be localCharts.
    expect(typeof defaultData).toBe("object");
  });
  it("There should be local chart data.", () => {
    const defaultData = App.data();
    expect(defaultData.charts.localLineData.data.length).toBe(3);
    expect(defaultData.charts.localBarData.data.length).toBe(5);
  });
  it("Current chart default should be localBarData.", () => {
    const defaultData = App.data();
    expect(defaultData.currentChart).toBe("localBarData");
  });
  it("Calling updateCurrentChart should update the currentChart", () => {
    // We will mount the component for testing.
    const vm = new Vue(App).$mount();
    expect(vm.currentChart).toBe("localBarData");
    // Call the updateCurrentChart function
    vm.updateCurrentChart("localLineData");
    expect(vm.currentChart).toBe("localLineData");
  });
  // Move chart data down to the data node on each child
  it("There should be a charts node with the same chart data.", () => {
    // We will mount the component for testing.
    const vm = new Vue(App).$mount();
    expect(typeof vm.charts).toBe("object");
    // Add the same chart data as new nodes under the charts node.
    expect(vm.charts.localLineData.data.length).toBe(3);
    expect(vm.charts.localBarData.data.length).toBe(5);
    expect(vm.charts.pieChartData.data.length).toBe(3);
  });
  it("There should be a title property for each chart.", () => {
    // We will mount the component for testing.
    const vm = new Vue(App).$mount();
    // Add the same chart data as new nodes under the charts node.
    expect(typeof vm.charts.localLineData.title).toBe("string");
    expect(typeof vm.charts.localBarData.title).toBe("string");
    expect(typeof vm.charts.pieChartData.title).toBe("string");
  });
  it("There should be a correct chartType property for each chart.", () => {
    // We will mount the component for testing.
    const vm = new Vue(App).$mount();
    expect(vm.charts.localLineData.chartType).toBe("line-chart");
    expect(vm.charts.localBarData.chartType).toBe("column-chart");
    expect(vm.charts.pieChartData.chartType).toBe("pie-chart");
  });
  it("There should be 4 charts.", () => {
    const vm = new Vue(App).$mount();
    expect(typeof vm.charts).toBe("object");
    // Copy a chart node and add another chart to charts.
    // This test counts the number of keys charts in the charts data
    expect(Object.keys(vm.charts).length).toEqual(4);
  });
});
