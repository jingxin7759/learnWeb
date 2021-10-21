<template>
  <div class="silder">
    <el-menu
      default-active="1-1-1"
      class="el-menu-vertical-demo"
    >
      <el-submenu index="1">
        <template slot="title">
          <span slot="title">JavaScript</span>
        </template>
        <el-submenu index="1-1">
            <span slot="title" @click="goPage('','本系列文章主要是针对JS的相关知识点做一个类似提纲似的提炼，一来可以作为今后温故知新的参照；二来也是希望能够帮助自己更加系统清晰的理解JS这门语言。')">JavaScript基础</span>
          <el-menu-item index="1-1-1" @click="goPage('/','JavaScript基本类型')">JavaScript基本类型</el-menu-item>
        </el-submenu>
        <el-menu-item-group>
          <el-menu-item index="1-3" @click="goPage('/about','xxxx')">选项2</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    goPage(url,name){
        if(!url){
            this.$emit('clickTitle',name)
        }else{
            this.$emit('clickTitle',name)
            this.$router.push(url)
        }
       
    }
  },
};
</script>

<style></style>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.silder{
    width: 200px;
    height: 100vh;
    border-right: 1px solid #eeeeee;
}
.el-menu{
    border: none;
}
</style>
