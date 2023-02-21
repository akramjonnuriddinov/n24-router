<template>
  <header class="site-header">
    <div class="site-header__container container">
      <router-link to="/">
        <a class="site-header__logo" href="#">
          <img src="@/assets/images/logo.svg" width="276" height="45" alt="Namanganliklar 24">
        </a>
      </router-link>
      <div class="courses">
        <p class="courses__item"> 
          <span class="courses__icon">$</span>
          <span class="courses__number">{{ usd }}</span>
        </p>
        <p class="courses__item">
          <span class="courses__icon">P</span>
          <span class="courses__number">{{ rub }}</span>
        </p>
      </div>
      <form class="site-header__search">
        <img class="site-header__input-icon" src="@/assets/images/search-icon.svg" width="20" height="20" alt="Search icon">
        <input class="site-header__input" type="text" placeholder="Поиск">
      </form>
      <div class="site-lang">
        <button class="site-lang__btn site-lang__btn--active">УЗ</button>
        <button class="site-lang__btn">РУ</button>
      </div>
      <Button btn_text="Войти" />
    </div>
  </header>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Header',
  components: {
    Button
  },
  data() {
    return {
      country: '',
      usd: '',
      rub: '',
      KEY: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/`
    }
  },
  methods: {
    async fetchData(country) {
      const request = await fetch(this.KEY + country + '.json')
      return request.json()
    }
  },
  mounted() {
    this.fetchData('usd').then((e) => this.usd = Math.floor(e.usd.uzs))
    this.fetchData('rub').then((e) => this.rub = Math.floor(e.rub.uzs))
  }
}
</script>

<style scoped>
.site-header {
  background-color: var(--cl-card-bg);
}

.site-header__container {
  display: flex;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
}

.site-header__logo {
  margin-right: 35px;
}

.courses {
  display: flex;
  align-items: center;
}

.courses__item:first-child {
  margin-right: 25px;
}

.courses__icon {
  color: var(--cl-course-icon);
  font-weight: 700;
  font-size: 16px;
  line-height: 18.96px;
  margin-right: 5px;
}

.site-header__search {
  margin-left: auto;
  margin-right: 25px;
  position: relative;
}

.site-header__input-icon {
  position: absolute;
  top: 13px;
  left: 15px;
}

.site-header__input {
  padding: 15px 13px 13px 41px;
  max-width: 275px;
  width: 100%;
  background-color: var(--cl-white);
  border: none;
  border-radius: 60px;
}

.site-header__input::placeholder {
  color: var(--cl-placeholder);
}

.site-lang {
  display: flex;
  align-items: center;
  background-color: var(--cl-light-blue);
  color: var(--cl-lang);
  padding: 3px;
  border-radius: 39px;
  margin-right: 25px;
}

.site-lang__btn {
  border: none;
  background-color: transparent;
  color: var(-cl-lang);
  font-size: 13px;
  line-height: 12px;
  padding: 9px 7px;
  display: block;
  border-radius: 100%;
  cursor: pointer;
}

.site-lang__btn--active {
  background-color: var(--cl-white);
  color: var(--cl-black);
}
</style>