<template>
  <div>
    <el-input v-model="name1" placeholder="请输入姓名" />
    <el-input v-model="date1" placeholder="请输入日期" />
    <el-input v-model="address1" placeholder="请输入地址" />
    <el-button type="primary" style="margin-right:20px;">搜索</el-button>
    <DropdownCheck ref="dropdownCheck" :data="dropdownList" :hide-on-click="false" @boolClick="dropdownClick" />
    <el-table :data="tableData" stripe style="width: 100%">
      <!-- <el-table-column prop="date" label="日期" width="180" /> -->
      <el-table-column v-if="date" prop="date" label="日期" />
      <el-table-column v-if="name" prop="name" label="姓名" />
      <el-table-column v-if="address" prop="address" label="地址" />
    </el-table>
  </div>

</template>

<script>

import DropdownCheck from './DropdownCheck' // 下拉列
export default {
  components: { DropdownCheck },
  data() {
    return {
      date1: '',
      name1: '',
      address1: '',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      /** 表格控制列 */
      date: true,
      name: true,
      address: true,
      /** 表格控制列 */
      dropdownList: [
        { value: 'date', label: '日期', bool: true },
        { value: 'name', label: '姓名', bool: true },
        { value: 'address', label: '地址', bool: true }
      ], // 下拉数组
      dropdownObj: {}
    }
  },
  methods: {

    // 下拉列表
    dropdownClick(newObj) {
      this.dropdownObj = newObj
      for (var key in newObj) {
        this[key] = newObj[key]
      }
    }
  }
}
</script>
<style scoped>
.el-input {
  width: 250px;
  padding: 0 10px;
}
</style>
