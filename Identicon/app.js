new Vue({
  el:'#app',
  data: { // initialized
    textInput: ''
  },
  computed: { // turn data into viewable values
    identicon: function(){
      return jdenticon.toSvg(this.textInput,200);
    }
  },
  methods: { // use these functions to change data
    onInput: function (event){
      // console.log(event.target.value);
      this.textInput = event.target.value;
    }
  }
});