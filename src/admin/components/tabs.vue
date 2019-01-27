<template lang="pug">
    #tabs
      ul.tabs
        li.tab(v-for="tab in tabs")
          router-link(
              :to="tab.href"
          ).tab__title {{tab.title}}
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                {title: "Обо мне", href: "/admin"},
                {title: "Блог", href: "/admin/blog"},
                {title: "Мои работы", href: "/admin/works"}
            ]
        };
    }
};
</script>

<style lang="scss" scoped>

#tabs {
    background-color: #efeee9;
}

.tabs {
    display: flex;
}

.tab {
    padding: 25px 60px;
    border-right: 2px solid #fff;
    cursor: pointer;
    user-select: none;
    transition: 0.3s;

    &:hover,
    &.is-active {
        background-color: #fff;
        
        .tab__title {
            color: #16c2aa;
        }
    }
}

.tab__title {
    color: rgba(#48676e, 0.8);
    font-weight: 500;
    text-decoration: none;
}

</style>


