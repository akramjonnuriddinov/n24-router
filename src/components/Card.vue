<template>
  <div v-for="card in cards" class="card">
    <router-link tag="h3" to="/article" class="card__title">{{ card.title }}</router-link>
    <p class="card__text">{{ card.text }}</p>
    <img class="card__img" :src="require(`@/assets/images/${card.img_url}.jpg`)" alt="">
    <div class="card__inner">
      <img class="card__icon" :src="require(`@/assets/images/${card.icon_url}.jpg`)" alt="">
      <p class="card__time">{{ card.time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cards',
  data() {
    return {
      cards: [
        { id: 1, img_url: "card-1", icon_url: "icon-1", title: 'Кандидат на пост канцлера ФРГ Шольц назвал условия коалиционного соглашения', text: 'Лидер Социал-демократической партии Германии (СДПГ) и кандидат на должность...', time: 'ИА Красная Весна 15:55' },
        { id: 2, img_url: "card-2", icon_url: "icon-2", title: 'Ученые доказали экспериментальным путем пользу покровных культур', text: 'Новое исследование ученых университета Иллинойса объединяет полевые данные... ', time: 'Газета.Ru 12:54' },
        { id: 3, img_url: "card-3", icon_url: "icon-3", title: 'Baidu запустила публичный сервис роботакси Apollo Go в Шанхае', text: 'Автопарк Baidu состоит из модифицированных электромобилей EV... ', time: 'Хайтек+ 13:44' },
        { id: 4, img_url: "card-4", icon_url: "icon-4", title: 'Стали известны ёмкости аккумуляторов всех моделей iPhone 13', text: 'Во время презентации iPhone 13 Apple придала большое значения...', time: 'Digger.ru 14:25' },
        { id: 5, img_url: "card-5", icon_url: "icon-5", title: 'Nature: ученые смогли доказать природное происхождение коронавируса SARS-CoV-2', text: 'Во время презентации iPhone 13 Apple придала большое значение...', time: 'Lenta.ru 10:54' },
        { id: 6, img_url: "card-6", icon_url: "icon-6", title: 'Китайская марка JAC повысила цены на лифтбек и пикап в России', text: 'Две модели китайского бренда JAC из пяти, представленных на российском...', time: 'Тарантас Ньюс 10:44' }
      ]
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: var(--cl-card-bg);
  padding: 20px 17px 15px;
  border-radius: 15px;
  max-width: 392px;
  width: 100%;
  margin-bottom: 10px;
  text-decoration: none;
  color: var(--cl-dark-gray);
}

.card:not(:nth-child(3n)) {
  margin-right: 10px;
}

.card__title {
  color: var(--cl-black);
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  text-decoration: none;
}

.card__text {
  margin: 0;
}

.card__inner {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: auto;
}

.card__img {
  border-radius: 10px;
  margin-bottom: 15px;
  margin-top: 15px;
}

.card__time {
  margin: 0;
}
</style>