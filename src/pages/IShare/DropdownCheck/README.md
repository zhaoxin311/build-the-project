---
title: 下拉列表绑定表格控制显示隐藏
---

## 使用案例

```vue
<template>
  <el-container class="contentBox">
      <div class="div1">
        <DropdownCheck ref="dropdownCheck" :data="dropdownList" :hideOnClick="false" @boolClick="dropdownClick"></DropdownCheck>
      </div>
  </el-container>
</template>

<script>
import DropdownCheck from '@/components/DropdownCheck'
export default {
  name: 'ceshi', // 返回页面之后input值不消失，与routes下index.js中name一致
  components: { DropdownCheck },
  data() {
    return {
      dropdownList: [{
        value: 'a',
        label: '1',
        bool: false
      }, {
        value: 'b',
        label: '2',
        bool: true
      }, {
        value: 'c',
        label: '3',
        bool: false
      }, {
        value: 'd',
        label: '4',
        bool: false
      }],
      objList: {}
    }
  },
  methods: {
    dropdownClick(newObj) {
      this.dropdownObj = newObj
      for (var key in newObj) {
        this[key] = newObj[key]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.div1 {
    margin: 100px;
}
</style>
```

## DropdownCheck 属性

| 参数           | 说明                       | 类型    | 可选值          | 默认值  |
| -------------- | -------------------------- | ------- | --------------- | ------- |
| data        | 自定义下拉数组               | Array  | —               | —       |
| hideOnClick     | 是否在点击菜单项后隐藏菜单	    | boolean  | true/false             | true       |

## DropdownCheck 事件

| 方法名       | 说明                                                         | 参数 |
| ------------ | ------------------------------------------------------------ | ---- |
| boolClick | 子组件生成对象附值 | —    |

