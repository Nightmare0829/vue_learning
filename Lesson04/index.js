var vm = new Vue({
    el: '#app', 
    data: {
       message: "Hello World", 
       firstName: 'Foo',
       lastName: 'Bar',
       fullName: 'Foo Bar'
    },
    created() {
        console.log("call created()");
    },
    computed: {
        // 你可以打开浏览器的控制台，自行修改例子中的 vm。vm.reversedMessage 的值始终取决于 vm.message 的值。
        // 你可以像绑定普通属性一样在模板中绑定计算属性。Vue 知道 vm.reversedMessage 依赖于 vm.message，因此当 vm.message 发生改变时，所有依赖 vm.reversedMessage 的绑定也会更新。
        // 而且最妙的是我们已经以声明的方式创建了这种依赖关系：计算属性的 getter 函数是没有副作用 (side effect) 的，这使它更易于测试和理解。
        // 计算属性的 getter
        reversedMessage: function () {
            console.log('reversedMessage--called');
            // `this` 指向 vm 实例
            return this.message.split('').reverse().join('');
        }
    },
    methods: {
        // 我们可以将同一函数定义为一个方法而不是一个计算属性。
        // 两种方式的最终结果确实是完全相同的。然而，不同的是计算属性是基于它们的响应式依赖进行缓存的。
        // 只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。
        reversedMessageFunc() {
            console.log('reversedMessageFunc--called');
            return this.message.split('').reverse().join('');
        }
    }, 

})


var vm1 = new Vue({
    el: '#app-1', 
    data: {
       firstName: 'Foo',
       lastName: 'Bar',
    },
    // watch: {
    //     firstName(val) {
    //         console.log("first name changed!");
    //         this.fullName = val + ' ' + this.lastName;
    //     }, 
    //     lastName(val) {
    //         console.log("last name changed!");
    //         this.fullName = this.firstName + ' ' + val;
    //     }
    // }, 
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        }
    }
})

