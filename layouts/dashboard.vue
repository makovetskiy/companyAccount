<template>
  <div class="dashboard">
    <div class="dashboard-columns">
      <Sidebar />
      <section class="dashboard-main-section">
        <Navbar />
        <div class="is-fullhd">
          <nuxt />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Sidebar from '~/components/Sidebar'
export default {
  components: {
    Navbar,
    Sidebar,
  },
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' },
        },
      ],
    }
  },
}
</script>
<style>
.dashboard {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}
.dashboard-columns {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}
.dashboard-main-section {
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
}
</style>