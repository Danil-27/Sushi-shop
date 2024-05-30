<template>
  <Header />
  <router-view />
  <div class="lorem1">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum voluptatem
    libero labore provident iusto sunt magnam illum delectus, nisi asperiores
    aliquam? Exercitationem voluptate ab dicta soluta fuga provident, ipsum
    consectetur!
  </div>
  <div class="lorem2">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
    eligendi inventore ullam? Enim veritatis corporis ullam, explicabo,
    consequatur cupiditate esse distinctio impedit perspiciatis similique
    debitis ad quam nihil praesentium excepturi possimus deserunt tempora dolor
    ea soluta officiis! Nam ipsa fugiat dolore excepturi id, vero nostrum
    voluptatibus eius officiis veniam tempore soluta, mollitia corporis
    distinctio magni voluptate tenetur consequuntur, pariatur hic itaque sint
    eaque placeat quibusdam? Inventore quasi minus quia, sunt, voluptatibus
    quaerat vero sed voluptatum at possimus architecto ipsum eum pariatur
    facilis dolorum perferendis blanditiis aspernatur veniam dolor ratione! Ut
    animi fugiat inventore earum tempore? Dicta aut iure nisi ad?
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from 'src/components/header/Header.vue';
import Footer from 'src/components/header/Footer.vue';
</script>

<style scoped lang="scss">
.lorem1 {
  margin-top: 30px;
}
.lorem2 {
  margin-top: 400px;
}
</style>
