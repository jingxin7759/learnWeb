<template>
  <div class="wrap">
    <div class="header">
      <div class="header_box"> <span class="merquee-txt">{{name}}</span> </div>
    </div>
    <div class="layout">
      <div class="layout_left">
        <silder @clickTitle="clickTitle"></silder>
      </div>
      <div class="layout_right">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import silder from "@/views/home/silder.vue";
export default {
  components: {
    silder,
   
  },
  data () {
    return {
       name:'本系列文章主要是针对JS的相关知识点做一个类似提纲似的提炼，一来可以作为今后温故知新的参照；二来也是希望能够帮助自己更加系统清晰的理解JS这门语言。'
    }
  },
  methods: {
    clickTitle(name){
      this.name=name
    }
  }
}
</script>

<style scoped lang="scss">
.wrap{
  .header{
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #eeeeee;
    margin-bottom: 5px;
    .header_box{
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
      height: 25px;
      line-height: 25px;
      box-sizing: border-box;
      word-break: break-all;
      white-space: nowrap;
      overflow: hidden;
      .merquee-txt{
        display: inline-block;
        padding-left: 100%;  /* 从右至左开始滚动 */
        animation: marqueeTransform 16s linear infinite;
      }
        @keyframes marqueeTransform {
          0%   { transform: translate(0, 0); }
          100% { transform: translate(-100%, 0); }
        }
    }
  }
}
.layout {
  display: flex;
  flex-flow: row nowrap;
  .layout_left {
    width: 200px;
    height: 85vh;
    overflow: auto;
  }
  .layout_right {
    height: 85vh;
    min-width: 1000px;
    flex: 1;
    margin-left: 5px;
    overflow: auto;
  }
}
</style>
