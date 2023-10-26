
<template>
  <div class="search-container">
      <div class="search-block" v-bind:class="{'search-block-focused': search_value.length!==0}">
        <div><v-icon name="ri-search-eye-line" class="search-icon" v-bind:class="{'search-icon-focused': search_value.length!==0}"/></div>
        <div><input v-model="search_value" class="search"
                    placeholder="Search by name or author..."
        ></div>
      </div>
  </div>
</template>

<script>
import {OhVueIcon} from "oh-vue-icons";
import {useStore} from "vuex";
import {store} from "../store/store.js";

export default {
  computed: {
    store() {
      return store
    }
  },
  setup(){
    const store = useStore()
  },
  data(){
    return {search_value: ''}
  },
  components: {"v-icon": OhVueIcon},
  props:{
    setSearchGallery:{
      type: Function
    }
  },
  methods:{
  },
  watch:{
    search_value: function (val){
      this.setSearchGallery(store.getters.getGalleryBySearch(val))
    }
  }
}

</script>

<style scoped lang="scss">
  .search-container{
    width:50%;
    margin: 5vh auto;
  }
  .search-block{
    display: grid;
    grid-template-columns: 1fr 11fr;
    border-radius: 5vh;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
    border: 1px solid #a8a8a8;
    transition: 300ms ease-in-out;
    >div{
      display: grid;
      align-items: center;
      height: 7vh;
    }
  }
  .search-icon{
    margin: auto;
    fill: #a8a8a8;
    transition: 300ms ease-in-out;
  }
  .search{
    width:90%;
    font-size: 0.94em;
    outline: none;
    border: 0;
  }
  .search-icon-focused{
    fill: black;
  }
  .search-block-focused{
    border: 1px solid black;
  }
</style>