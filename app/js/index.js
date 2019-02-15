/* eslint-disable */
// const prod = process.env.NODE_ENV ==='production'
// const shouldSW = 'serviceWorker' in navigator && prod
// if (shouldSW) {
//   navigator.serviceWorker.register('/service-worker.js').then(
//     () => {
//     console.log("Service Worker Registered")
//   })
// }


if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
// External Libs
import Vue from 'vue'
require('bootstrapJs')

// Import Styles
require('!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css')
require('css/main.scss')

// Mixins

// Components
import Mainlist from './components/mainlist.js'
import { getParsedCommandLineOfConfigFile } from 'typescript'

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
