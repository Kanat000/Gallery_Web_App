<template>
  <div class="modal-container">

      <div class="modal-content">
        <ImageFrame v-bind:photo="photo" v-bind:isModal="true"/>
        <div class="close-block">
          <v-icon name="io-close-circle-outline" scale="1.7" @click="store.dispatch('change_modal_status')"/>
        </div>
      </div>
  </div>
</template>

<script>
import ImageFrame from "./ImageFrame.vue";
import IMG1 from "../assets/1.jpg";
import {OhVueIcon} from "oh-vue-icons";
import {useStore} from "vuex";

export default {
  setup(){
    const store = useStore()
    return {store}
  },
  components: {ImageFrame, "v-icon": OhVueIcon},
  props: {
    photo: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(85, 85, 85, 0.54);
  z-index: 9999;
  display: grid;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.modal-content {
  min-width: 10vw;
  min-height: 10vh;
  max-width: 80vw;
  padding: 1vh 3vw;
  background-color: white;
  border-radius: 2vh;
  position: relative;
  animation: fadeInAnimation ease .7s;
}

.close-block {
  z-index: 999;
  background-color: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: -1vh;
  right: -1vh;
  border-radius: 50%;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
    scale: 0;
  }
  80% {
    scale: 1.05;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
}
</style>