<template>
  <div class="img-Container">
    <img :src="photo.img" alt="" v-bind:class="{modal_img : checkIsModal()}">
    <div class="info-container">
      <div class="name">{{ photo.name }}</div>
      <div class="author">{{ photo.author }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    photo: {
      type: Object,
      required: true
    },
    isModal: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    checkIsModal() {
      return this.isModal === false
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');

.img-Container {
  background: aliceblue;
  margin-top: 2vh;
  border-radius: 2vh;
  position: relative;

  > img {
    max-width: 100%;
    height: 100%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 2vh;
  }
}

.modal_img {
  filter: brightness(0.9);
  cursor: zoom-in;
  transition: 300ms ease-in-out;

  &:hover {
    filter: brightness(0.7);
    scale: 1.01;
  }
}

.info-container {
  position: absolute;
  bottom: 3vh;
  left: 2vw;
  font-family: 'Tilt Neon', sans-serif;

  > .name {
    font-size: 1.2em;
    color: white;
    border-radius: 1vh;
    font-family: 'Playfair Display', serif;
  }

  > .author {
    font-size: 0.9em;
    color: rgba(255, 255, 255, 0.7);
    font-weight: lighter;
    text-decoration: underline;
  }
}
</style>