<template>
  <div>
    <el-radio-group v-model="size">
      <el-radio label="">默认</el-radio>
      <el-radio label="medium">中等</el-radio>
      <el-radio label="small">小型</el-radio>
      <el-radio label="mini">超小</el-radio>
    </el-radio-group>
    <el-descriptions class="margin-top" title="带边框列表" :column="3" :size="size" border>
      <template slot="extra">
        <el-button type="primary" size="small" @click="submit">提交</el-button>
      </template>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user" />
          用户名
        </template>
        <div contenteditable="true"> 张三三</div>
      </el-descriptions-item>
      <!-- <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone" />
          手机号
        </template>
        <div contenteditable="true"> 18100000000</div>

      </el-descriptions-item> -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline" />
          居住地
        </template>
        <div contenteditable="true" @blur=" ($event)" v-text="address" />
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets" />
          备注
        </template>
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building" />
          联系地址
        </template>
        <div contenteditable="true" @keyup="editMessage($event)">{{ message }}</div>

      </el-descriptions-item>
    </el-descriptions>
    <!-- show-overflow-tooltip 表格中当内容过长被隐藏时显示 tooltip -->
    <p class="text-one">一行文本超出的内容展示为省略号，多用于表单展示详情信息，仅适用于块级元素，行内元素不适用</p>
    <span class="text-more"> <b> 多行文本超出显示省略号 </b><br> 超出行数时， <br> 多余的行数文本展示为省略号 <br> 该样式行内元素，块级元素都适用

    <!-- <input v-model="message1" type="text" @keyup="Message()"> -->
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: '',
      address: '苏州市',
      message: '北京 ',
      message1: '江苏省'
    }
  },
  methods: {
    submit() {
      console.log(this.address, this.message)
    },
    editAddress(e) {
      this.address = e.target.innerText.replace(/[\s\r\n]/g, '').trim()
      console.log(this.address)
    },
    editMessage(e) {
      this.message = e.target.innerText.replace(/[\s\r\n]/g, '').trim()
      console.log(this.message)
    },
    Message() {
      console.log(this.message1)
    }
  }
}
</script>
<style lang='scss' scoped>
.contenteditable{
  // width: 200px;
  // height: 20px;
  border: 1px solid white;
}
.text-one{
  width: 200px;
  border: 1px solid rgb(17, 219, 34);
  overflow: hidden;  //
  text-overflow:ellipsis;
  white-space: nowrap;
}
.text-more{
  width: 200px;
  border: 1px solid rgb(17, 219, 34);
  display: -webkit-box;  //弹性伸缩盒子模型
  -webkit-box-orient: vertical; // 伸缩盒子的子元素排列方式
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
