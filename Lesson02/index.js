


// 我们的数据对象
var data = { a: 1 }

// // 该对象被加入到一个 Vue 实例中
// var vm = new Vue({
//     el: '#app',
//     data: data
// })

// // 获得这个实例上的属性
// // 返回源数据中对应的字段
// vm.a == data.a // => true

// // 设置属性也会影响到原始数据
// vm.a = 2
// data.a // => 2

// // ……反之亦然
// data.a = 3
// vm.a // => 3

var vm = new Vue({
    el: '#app-1',
    data: data
})

// watch 为一个监听器
var unwatch01 = vm.$watch('a', function(newValue, oldValue) {
    console.log("vm watched a is changed!", newValue, "oldValue ", oldValue);
})

var unwatch02 = vm.$watch('a', function(newValue, oldValue) {
    console.log("vm watched a is changed2!", newValue, "oldValue ", oldValue);
})

var unwatch03 = vm.$watch('a', function(newValue, oldValue) {
    console.log("vm watched a is changed3!", newValue, "oldValue ", oldValue);
})

// 调用unwatch* 方法关闭监听

var vm1 = new Vue({

    el: '#app-2',

    data: {
        a : 1 
    }, 

    template: "<div>Hello World! {{a}}</div>", 

    created() {
        console.log("call created()");
    },

    beforeCreate() {
        console.log("call beforeCreate()");
    },

    beforeMount() {
        console.log("call beforeMount()");
    },

    mounted() {
        console.log('call mounted()');
        this.$nextTick(function() {

        })
    },

    beforeUpdate() {
        console.log('call beforeUpdate()');
    },

    updated() {
        console.log('call updated()');
    },

    activated() {
        console.log('call updated()');
    },

    beforeDestroy() {
        console.log('call beforeDestroy()');
    },

    destroyed() {
        console.log('call destroyed()');
    },


})

var unwatch = vm1.$watch('a', function(newValue, oldValue) {
    console.log("vm1 watched a is changed!", newValue, "oldValue ", oldValue);
})