import Vuex from 'vuex';
import IMG1 from '../assets/1.jpg'
import IMG2 from '../assets/2.jpg'
import IMG3 from '../assets/3.jpg'
import IMG4 from '../assets/4.jpg'
import IMG5 from '../assets/5.jpg'
import IMG6 from '../assets/6.jpg'
import IMG7 from '../assets/7.jpg'
import IMG8 from '../assets/8.jpg'
import IMG9 from '../assets/9.jpg'
import IMG10 from '../assets/10.jpg'
import IMG12 from '../assets/12.jpg'

export const store = new Vuex.Store({
    state: {
        gallery: [
            {id: 1, name: "Lush Green Valley", "author": "Emma Mitchell", tag: ['travel'], img: IMG1},
            {id: 2, name: "Sunset over the Mountains", "author": "James Anderson", tag: ['travel'], img: IMG2},
            {id: 3, name: "Urban Reflections", "author": "Sophia Rivera", tag: ['travel'], img: IMG3},
            {id: 4, name: "Ocean's Serenity", "author": "Liam Turner", tag: ['travel'], img: IMG4},
            {id: 5, name: "City Lights at Night", "author": "Ava Johnson", tag: ['travel'], img: IMG5},
            {id: 6, name: "Autumn Leaves", "author": "Ethan Reynolds", tag: ['travel'], img: IMG6},
            {id: 7, name: "Misty Forest", "author": "Olivia Pearson", tag: ['travel'], img: IMG7},
            {id: 8, name: "Desert Oasis", "author": "Mason Sullivan", tag: ['travel'], img: IMG12},
            {id: 9, name: "Tropical Paradise", "author": "Isabella Clarke", tag: ['travel'], img: IMG8},
            {id: 10, name: "Winter Wonderland", "author": "Nathan Douglas", tag: ['travel'], img: IMG9},
            {id: 10, name: "Low temperature", "author": "Nathan Douglas", tag: ['travel'], img: IMG10},
        ],
        modal: false
    },
    mutations: {
        modal_changer(state){ state.modal = !state.modal}
    },
    actions: {
        change_modal_status(context){
            context.commit('modal_changer')
        }
    },
    getters: {
        getImgByID:(state) => (img_id) =>{
            return state.gallery.filter(p => p.id === img_id)
        },
        getGallery(state) {
            return state.gallery
        },
        getGalleryBySearch:(state)=>(search)=>{
            return state.gallery.filter(img=>{
                return img.name.toLowerCase().includes(search.toLowerCase()) || img.author.toLowerCase().includes(search.toLowerCase())
            })
        },
        isModal(state) {
            return state.modal
        }
    }
});