<script>
import { store } from './store';

// importing components
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import MainAboutMe from './components/main_components/MainAboutMe.vue';
import MainBegin from './components/main_components/MainBegin.vue';
import MainBlogUpdated from './components/main_components/MainBlogUpdated.vue';
import MainBookStore from './components/main_components/MainBookStore.vue';
import MainRealStrories from './components/main_components/MainRealStrories.vue';
import MainSponsor from './components/main_components/MainSponsor.vue';
import MainStatistics from './components/main_components/MainStatistics.vue';

export default {
  components: {
    MainStatistics,
    AppHeader,
    AppFooter,
    MainAboutMe,
    MainBegin,
    MainBookStore,
    MainSponsor,
    MainRealStrories,
    MainBlogUpdated
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <AppHeader />
  <main>
    <MainStatistics />
    <MainAboutMe />
    <MainBegin />
    <MainBookStore />
    <MainSponsor />
    <MainRealStrories />
    <MainBlogUpdated />
  </main>
  <AppFooter />
</template>

<style lang="scss">
@use './style.scss' as *;

.container {
  max-width: 1170px;
  margin: 0 auto;
}
</style>
