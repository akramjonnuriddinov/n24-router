<template>
  <div>
    <button class="btn">{{ btn_text }}</button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: ['btn_text']
}
</script>

<style scoped>
.btn {
  border: none;
  margin: 0;
  padding: 13px 20px;
  font-size: 16px;
  line-height: 18.96px;
  font-weight: 500;
  color: var(--cl-white);
  background-color: var(--cl-blue);
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
}
</style>