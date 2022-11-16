<template>
  <el-dropdown class="columnStyle" :hide-on-click="hideOnClick" size="small">
    <el-button>
      选择列
      <i class="el-icon-arrow-down el-icon--right" />
    </el-button>
    <el-dropdown-menu slot="dropdown" size="small">
      <el-dropdown-item
        v-for="item in data"
        :key="item.label"
        :label="item.label"
        :value="item.value"
      >
        <el-checkbox v-model="item.bool" class="columnCheckbox">{{ item.label }}</el-checkbox>
        <!-- <span> {{ item.bool }}</span> -->
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'DropdownCheck',
  props: {
    // 下拉选项
    data: {
      type: Array,
      default: () => []
    },
    hideOnClick: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      newObj: {}
    }
  },
  watch: {
    // 监听
    data: {
      handler(arr) {
        this.data_ = JSON.parse(JSON.stringify(arr))
        this.data_.forEach(item => {
          this.newObj[item.value] = item.bool
        })
        this.$emit('boolClick', this.newObj)
      },
      deep: true
    }
  },
  mounted() {
    this.getBool()
  },
  methods: {
    getBool() {
      this.data_ = JSON.parse(JSON.stringify(this.data))
      this.data_.forEach(item => {
        this.newObj[item.value] = item.bool
      })
      this.$emit('boolClick', this.newObj)
    }
  }
}
</script>

<style scoped>

</style>
