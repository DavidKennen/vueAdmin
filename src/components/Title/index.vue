<template>
  <h3 class="title">
    <slot></slot>
  </h3>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.title {
  background-color: rgba(242, 242, 242, 1);
  border: 1px solid rgba(228, 228, 228, 1);
  height: 45px;
  line-height: 45px;
  color: #666666;
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
}
</style>