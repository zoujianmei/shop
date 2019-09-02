
// import headerNav from '../components/header/nav';

import footer from '../components/footer.vue'
// import productcard from '../components/common/productcard.vue'
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  Sku,
  Card,Button,SwipeCell,Dialog,Tab, Tabs,Row,Checkbox, CheckboxGroup, SubmitBar,NavBar,Tabbar, TabbarItem,Panel,List,Step, Steps,Field ,
  Popup,Stepper,RadioGroup, Radio,Picker,Uploader,Info
} from 'vant';

const components=[
    Tag,
    Col,
    Icon,
    Cell,
    CellGroup,
    Swipe,
    SwipeItem,
    GoodsAction,
    Sku,
    Card,
    Button,
    SwipeCell ,
    Dialog ,
    Tab, Tabs,Toast,Row,Checkbox, CheckboxGroup, SubmitBar,NavBar ,Tabbar, TabbarItem,Panel,List ,Step, Steps,Field ,
    Popup,Stepper,RadioGroup, Radio,Picker,Uploader,Info,footer
]


export default (Vue)=>{
    components.forEach(Component => {
        Vue.component(Component.name, Component)
    });
}
