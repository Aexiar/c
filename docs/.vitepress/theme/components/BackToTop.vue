<!-- components/BackToTop.vue -->
<template>
  <div class="back-to-top" v-if="visible" @click="scrollToTop">
    <svg viewBox="0 0 36 36" class="circular-progress">
      <path
        class="circle-bg"
        d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
      />
      <path
        class="circle"
        :stroke-dasharray="progress + ', 100'"
        d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
      />
    </svg>
    <div class="arrow">↑</div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const visible = ref(false);
    const progress = ref(0);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      progress.value = percentage.toFixed(2);
      visible.value = scrollTop > 100;
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      visible,
      progress,
      scrollToTop,
    };
  },
};
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
  transition: opacity 0.3s ease;
}

.circular-progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  transform: rotate(-90deg);
}

.circle-bg {
  fill: none;
  stroke: #e6e6e6;
  stroke-width: 4;
}

.circle {
  fill: none;
  stroke: #0078ff;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 0, 100;
  transition: stroke-dasharray 0.3s ease;
}

.arrow {
  position: relative;
  font-size: 20px;
  color: #0078ff;
  z-index: 1;
}
</style>
