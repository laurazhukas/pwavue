/* eslint-disable */
// External Libs
import Vue from 'vue'
require('bootstrapJs')

// Import Styles
require('!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css')
require('css/main.scss')

// Mixins

// Components
import Mainlist from './components/mainlist.js'

// Interfaces

new Vue({
  name: 'Vue Typescript Boilerplate',
  mixins: [],
  el: '#vue-main',
  components: {
    Mainlist,
  },
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
    console.log('Mounted Main')
  },
})
