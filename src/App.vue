<script setup>

import Gallery from "./components/Gallery.vue";
import Search from "./components/Search.vue"
import {useStore} from "vuex";

const store = useStore()

</script>
<template>
  <div class="app-container">
    <Search :setSearchGallery="setSearchGallery" />
    <Gallery v-bind:search_gallery="search_gallery"/>

  </div>
</template>

<script>
export default {
  data(){
    return{
      search_gallery: null
    }
  },
  methods:{
    setSearchGallery(gallery){
      this.search_gallery = gallery
    }
  }
}
</script>
<style scoped>
</style>
