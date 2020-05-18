import Vue from "vue";
// 全局引入
/* import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI); */

// 按需引入
import { Pagination, MessageBox, Message, Button } from "element-ui";

Vue.component(Pagination.name, Pagination);
Vue.component(Button.name, Button);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;
