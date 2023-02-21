<template>
  <div class="home-page">
    <div class="home-page__container container">
      <Advertising class="advertising" />
      <div class="card-wrapper">
        <Card class="card" />
      </div>
      <div class="notification">
        <p>Хотите быть в курсе свежих новостей?  Включите уведомления!</p>
        <Button class="notification__btn" btn_text="Включит" />
      </div>
    </div>
  </div>
</template>

<script>
import Advertising from '@/components/Advertising.vue';
import Card from '@/components/Card.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'HomePage',
  components: {
    Advertising,
    Card,
    Button
  },
}
</script>

<style scoped>
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -10px;
}

.advertising {
  margin-bottom: 50px;
}

.notification__btn {
  background-color: var(--cl-orange);
}
</style>