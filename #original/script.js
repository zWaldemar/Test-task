new Vue({
  data(){
    return{ 
      currentFocus: '',
      autocomplete: '',
      onBlur: true,
      onFocus: false,
      arr: ["Краска","Кирпич","Саморезы","Инструмент","Профнастил","Линолеум"]
    }
  },
  mounted(){
    var vm = this;
    document.addEventListener("click", function(e){
      
      vm.onBlur ?vm.onFocus = false: false});
    
  },
  methods:{
    addActive(){
      var vm = this;
      if (!vm.array) return false;
      if (vm.currentFocus >= vm.array.length) vm.currentFocus = 0;
      if (vm.currentFocus < 0) vm.currentFocus = (vm.array.length - 1);
    },
    keyDown(e){ 
    var vm = this;
      if (e.keyCode == 40) {
      vm.currentFocus++;
      vm.addActive()
    } else if (e.keyCode == 38) {
      vm.currentFocus--;
      vm.addActive()
      
    }
    }
  }
}).$mount('#app')

$(document).ready(function() {  
  $('.hover').on( "click", function() {
    $(this).toggleClass('active');
  });
});

