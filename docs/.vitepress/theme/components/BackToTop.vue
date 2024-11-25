<template>
  <div class="back-to-top" v-if="visible" @click="scrollToTop">
    <svg viewBox="0 0 36 36" class="circular-progress">
      <!-- 背景圆 -->
      <circle class="circle-bg" cx="18" cy="18" r="16" />
      <!-- 动态进度圆 -->
      <circle
        class="circle"
        cx="18"
        cy="18"
        r="16"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashOffset"
      />
    </svg>
    <div class="arrow">↑</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// 响应式数据
const visible = ref(false); // 控制按钮显示
const progress = ref(0); // 滚动的百分比
const radius = 16; // 圆的半径
const circumference = 2 * Math.PI * radius; // 圆的周长
const dashOffset = ref(circumference); // stroke-dashoffset 的动态值

// 处理滚动事件
const handleScroll = () => {
  const scrollTop = window.scrollY; // 当前滚动高度
  const scrollHeight = document.documentElement.scrollHeight; // 文档总高度
  const clientHeight = document.documentElement.clientHeight; // 可见区域高度

  // 计算滚动进度百分比
  progress.value = (scrollTop / (scrollHeight - clientHeight)) * 100;
  progress.value = Math.min(progress.value, 100); // 限制最大值为 100%

  // 更新 dashOffset（圆环进度）
  dashOffset.value = circumference - (progress.value / 100) * circumference;

  // 控制按钮显示逻辑
  visible.value = scrollTop > 100;
};

// 返回顶部功能
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// 生命周期管理
onMounted(() => {
  window.addEventListener("scroll", handleScroll); // 添加滚动事件监听
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll); // 移除滚动事件监听
});
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
}

.circular-progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  transform: rotate(-90deg); /* 旋转使进度从顶部开始 */
}

.circle-bg {
  fill: none;
  stroke: #e6e6e6; /* 背景圆的颜色 */
  stroke-width: 4;
}

.circle {
  fill: none;
  stroke: #0078ff; /* 进度条颜色 */
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 0; /* 动态绑定 */
  stroke-dashoffset: 0; /* 动态绑定 */
  transition: stroke-dashoffset 0.1s ease; /* 平滑动画 */
}

.arrow {
  position: relative;
  font-size: 20px;
  color: #0078ff;
  z-index: 1;
}
</style>
