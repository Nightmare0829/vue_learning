var vm = new Vue({
    el: '#app', 
    data: {
        msg: 20, 
        seen: false,
        'url': "https://www.baidu.com/"
    },
    created() {
        setInterval(() => {
            this.msg += 1;
            this.seen = !this.seen;            
        }, 1000);  
    },
    methods: {
        onClick() {
            alert("You Clicked me!");
        }, 
        onSubmit() {
            alert("You submit me!");
        }
    }
})

var vm1 = new Vue({
    el: '#app-1', 
    data: {
        rawHtml: "<h1>This is a Vue.js Lesson03 </h1>"
    },
})

var vm2 = new Vue({
    el: '#app-2', 
    data: {
        dynamicId: "header",
        isButtonDisabled: true
    },
})




