<script setup>

// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <div>
    <router-link to="/">首页</router-link> | 
    <router-link to="/about">关于</router-link> | 
    <router-link to="/test">测试练习</router-link>
  </div>
  <router-view></router-view> -->

  <!-- element3实现整体布局 -->
  <el-container>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <div>
            <router-link to="/">Home</router-link>
          </div>
          <div>
            <router-link to="/about">About</router-link>
          </div>
          <div>
            <router-link to="/test">Test</router-link>
          </div>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>

    </el-container>

  </el-container>
</template>

<style> 
.el-header,
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
