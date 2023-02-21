<template>
  <div class="container">
    <nav class="sitenav">
      <ul class="sitenav__list">
        <li class="sitenav__item">
          <router-link class="sitenav__link" to="/">Главное</router-link>
        </li>
        <li class="sitenav__item">
          <router-link class="sitenav__link" to="/list">Интересное</router-link>
        </li>
        <li class="sitenav__item">
          <router-link class="sitenav__link" to="/">Экономика</router-link>
        </li>
        <li class="sitenav__item">
          <router-link class="sitenav__link" to="/">Политика</router-link>
        </li>
        <li class="sitenav__item">
          <router-link class="sitenav__link" to="/">Общество</router-link>
        </li>
        <li class="sitenav__item">
          <router-link class="sitenav__link" to="/">Технологии</router-link>
        </li>
        <li class="sitenav__item">
          <router-link class="sitenav__link" to="/">Спорт</router-link>
        </li>
        <li class="sitenav__item">
          <router-link class="sitenav__link" to="/">Культура</router-link>
        </li>
        <li class="sitenav__item">
          <router-link class="sitenav__link" to="/">Происшествия</router-link>
        </li>
        <li class="sitenav__item">
          <router-link class="sitenav__link" to="/">Наука</router-link>
        </li>
      </ul>
    </nav>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      links: [
        { id: 1, name: 'home', text: 'Главное', params: ''},
        { id: 2, name: 'interes', text: 'Интересное', params: 'interest'},
        { id: 3, name: 'article', text: 'Экономика', params: 'eco'},
        { id: 4, name: '', text: 'Политика', params: ''},
        { id: 5, name: '', text: 'Общество', params: ''},
        { id: 6, name: '', text: 'Технологии', params: ''},
        { id: 7, name: '', text: 'Спорт', params: ''},
        { id: 8, name: '', text: 'Культура', params: ''},
        { id: 9, name: '', text: 'Происшествия', params: ''},
        { id: 10, name: '', text: 'Наука', params: ''}
      ]
    }
  }
}
</script>

<style scoped>
.sitenav {
  margin-bottom: 40px;
}

.sitenav__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--cl-border);
}

.sitenav__item:not(:last-child) {
  margin-right: 10px;
}

.sitenav__link {
  text-decoration: none;
  color: var(--cl-light-gray);
  font-size: 18px;
  line-height: 21.33px;
  font-weight: 500;
}
</style>