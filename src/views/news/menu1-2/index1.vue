<template>

  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="Name"
        label="姓名"
        width="120"
      />
      <el-table-column
        prop="CountryCode"
        label="省份"
        width="120"
      />
      <el-table-column
        prop="District"
        label="市区"
        width="120"
      />
      <el-table-column
        prop="Population"
        label="地址"
        width="300"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="100"
      >
        <template>
          <el-button type="text" size="small" @click="dialogVisible = true">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      v-loading="loading"
      :visible.sync="dialogVisible"
      title="提示"
      :append-to-body="true"
      width="30%"
      custom-class="dialog"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { postFun } from '@/api/common' /* 表格列表、post请求、get请求 */

export default {

  data() {
    return {
      loading: false,
      dialogVisible: false,
      tableData: []
    }
  },
  created() {
    this.getCity()
  },
  methods: {
    handleClick(row) {
      console.log(row)
    },
    confirm() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)',
        target: document.querySelector('.dialog')
      })
      setTimeout(() => {
        loading.close()
      }, 2000)
    },
    getCity() {
      postFun('/world/city').then((res) => {
        this.tableData = res.data
        console.log(this.tableData, res, 'tableData')
      })
    }
  }
}
</script>
