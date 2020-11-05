<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item>
        <b-icon icon="menu-open"></b-icon>
      </b-navbar-item>
    </template>
    <template slot="start">
      <div class="title-company">Личный кабинет компании GameShells</div>
    </template>

    <template slot="end"></template>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
<style>
.navbar {
  min-height: 64px;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  background-color: #f5f5f5;
  color: rgba(0, 0, 0, 0.87);
}
.title-company {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>