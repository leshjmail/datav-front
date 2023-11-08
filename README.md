## 集成准备
获得nexus仓库访问方式
## 前端集成
> 工具包
```
// 镜像配置
npm config set registry=http://nexus.eagle.kuaimeo.com:8090/repository/npm-local/
// 安装工具包
npm install coffee-report
```
> 依赖包
```
npm install element-ui,echarts,echarts-stat,vue-echarts,vue-echarts
```
> 配置方式
``` js
// 图表库
import "echarts";
import ECharts from 'vue-echarts'
Vue.component('v-chart', ECharts)

// UI库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, { size: 'small' })

// 工具库
import CoffeeReport from 'coffee-report';
import 'coffee-report/DatavDesigner.css'
Vue.use(CoffeeReport)
```
> 工具库使用方式
``` vue
// 设计器
<DatavDesigner></DatavDesigner>
// 渲染器
<DatavRender :options="options"></DatavRender>
// 渲染器配置参数

  data(){
    return {
      options:{
        versionId:'276169455149514752185'
      }
    }
  }
      
```