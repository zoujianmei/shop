
// import headerNav from '../components/header/nav';

import footer from '../components/footer.vue'
// import productcard from '../components/common/productcard.vue'
import {
  Divider,
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
  Search,
  Card,Button,SwipeCell,Dialog,Tab, Tabs,Row,Checkbox, CheckboxGroup, SubmitBar,NavBar,Tabbar, TabbarItem,Panel,List,Step, Steps,Field ,
  Sidebar,SidebarItem,Popup,Stepper,RadioGroup, Radio,Picker,Uploader,Info
} from 'vant';

const components=[
    Divider,
    Tag,
    Col,
    Icon,
    Cell,
    CellGroup,
    Swipe,
    SwipeItem,
    GoodsAction,
    Sku,
    Search,
    Card,
    Button,
    SwipeCell ,
    Dialog ,
    Tab, Tabs,Toast,Row,Checkbox, CheckboxGroup, SubmitBar,NavBar ,Tabbar, TabbarItem,Panel,List ,Step, Steps,Field ,
    Sidebar,SidebarItem,Popup,Stepper,RadioGroup, Radio,Picker,Uploader,Info,footer
]


export default (Vue)=>{
    components.forEach(Component => {
        Vue.component(Component.name, Component)
    });
}
