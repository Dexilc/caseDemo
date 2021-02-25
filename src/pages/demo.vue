<!--
* @description  参数1
* @fileName  demo
* @author userName
* @date 2021-02-25 18:33:05
* @version V1.0.0
!-->
<template>
 <div id='demo'
             class='demo'>

 </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
            @Component({
              name: 'demo'
            })
   export default class demo extends Vue {
  @Watch('name')
  getWatchValue(newVal: string, oldVal: string) {
    console.log(newVal, oldVal)
  }
  mounted() {
    console.log('mounted')
  }
}
</script>

<style scoped lang="scss">
// @import './index.scss';
</style>