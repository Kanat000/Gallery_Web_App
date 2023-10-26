<template>
  <div class="container">
    <div class="grid-container">
      <Modal v-bind:photo="modal_data" v-if="store.getters.isModal"/>
      <ImageFrame
          v-for="photo of getGallery()"
          v-bind:photo="photo" v-bind:is-modal="false"
          @click="open_the_img(photo.id,store)"
      />
    </div>
  </div>
</template>

<script>
import ImageFrame from "./ImageFrame.vue";
import {useStore} from "vuex";
import Modal from "./Modal.vue";

export default {

  setup(){
    const store = useStore()
    return {store}
  },
  data(){
    return {
      modal_data: {}
    }
  },
  props:{
    search_gallery: {
      type: Object,
      required:false
    }
  },
  components: {Modal, ImageFrame},
  methods:{
    open_the_img(img_id,store){
      store.dispatch('change_modal_status')
      this.modal_data = store.getters.getImgByID(img_id)[0]
    },
    getGallery(){
      if(this.search_gallery===null || this.search_gallery.length === 0){
        return this.store.getters.getGallery
      }
      return this.search_gallery
    }
  }
}
</script>

<style lang="scss" scoped>
    .container{
      width: 90%;
      height: 95vh;
      padding: 5vh 2vw 5vh 2vw ;
      overflow-y: auto;
      overflow-x: hidden;
      margin: auto;
      scroll-behavior: auto;
    }
    .grid-container{
      columns: 3;
      column-gap: 2vw;
    }
</style>