<template>
  <section class="sidebar-layout">
    <b-sidebar
      position="static"
      :mobile="mobile"
      :reduce="reduce"
      :fullheight="true"
      open
      class="sidebar"
    >
      <div class="logo-block">
        <figure class="image is-32x32">
          <img class="is-rounded" src="~/static/logo.png" />
        </figure>
        <span>Вакансии на Tproger</span>
      </div>
      <b-menu class="is-custom-mobile">
        <b-menu-list label>
          <b-menu-item icon="account" label="Отклики кандидатов"></b-menu-item>
          <b-menu-item icon="information-outline" label="Вакансии"></b-menu-item>
          <hr />
          <b-menu-item icon="logout" label="Logout"></b-menu-item>
        </b-menu-list>
      </b-menu>
    </b-sidebar>
  </section>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      mobile: 'reduce',
      reduce: false,
    }
  },
}
</script>
<style lang="scss">
.logo-block {
  display: flex;
  align-items: center;
  align-self: flex-start;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #a5a5a5;
  min-height: 64px;
  height: 64px;
}
.logo-block span {
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
  padding: 5px;
  color: #fff;
}
</style>