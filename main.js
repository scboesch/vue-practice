Vue.config.productionTip = false;
import App from "./components/App.js";

new Vue({
  render: h => h(App)
}).$mount(`#app`);
