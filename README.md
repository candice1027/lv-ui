##  一个UI库

## 开始使用
1. 前提
使用本框架前，请在css中开启border-box
```
*{border-box: box-sizing}


```
2. 安装 ui
```
npm i --save lv-ui
```
3. 引入
```
import {Button, ButtonGroup, Icon} from 'lv-ui-test'
import lv-ui/dist/lvui.css
export default {
    name: 'app',
    components: {
        'g-button': Button,
        'g-icon': Icon
    }
}
```



