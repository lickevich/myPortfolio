<template lang="pug">
  .blog
    h2.blog__title Страница «Блог» 
    .blog__content
      h3.blog__head Добавить запись
      form.blog__form
        label.blog__row
          input(type="text" placeholder="Название").blog__input
        label.blog__row
          input(type="date" placeholder="Дата").blog__input
        label.blog__row
          textarea(type="text" placeholder="Содержание").blog__textarea
        .blog__row
          button(type="submit").btn Добавить
</template>

<style lang="scss" scoped>

.blog__head {
  margin: 0;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
}
.blog__form {
  display: flex;
  flex-direction: column;
}
.blog__row {
  max-width: 500px;
  margin-bottom: 25px;
}
.blog__input,
.blog__textarea {
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-family: "Roboto", Helvetica, sans-serif;
}
.blog__input {
  width: 60%;
}
.blog__textarea {
  min-height: 170px;
}

</style>