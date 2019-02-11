const Taskbar= {
  name: 'Component',
  props: [],
  template: require('../../templates/taskbar.html'),
  mixins: [],
  components: {},
  data() {
    return {
      item : null,
      ul : null,
      li : null
    }
  },
  methods: {
    message : function(value) {
      console.log('In message function, input returned: '+value)
      this.$emit('message', document.getElementById('userInput').value)
    },
    buttonPressed : function(val) {
      console.log('In taskBar and '+document.getElementById('userInput').value)
      this.$emit('button-pressed', val)
      this.newListItem()
    },
    newListItem() {
      this.item = document.getElementById('userInput').value
      this.ul = document.getElementById('list')
      this.li = document.createElement('li')
      this.li.appendChild(document.createTextNode(this.item))
      this.ul.appendChild(this.li)
      document.getElementById('userInput').value = ''
      this.li.onclick = this.removeItem
    },
    removeItem(e) {
      e.target.parentElement.removeChild(e.target)
    }
  },
  created() {
  },
  computed: {
  },
}
export default Taskbar