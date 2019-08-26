
var vm = new Vue({
    el: '#app', 
    data: {
        isActive: true, 
        hasError: false,
    },
    computed: {
        
    }
})

var vm1 = new Vue({
    el: '#app-1', 
    data: {
        isActive: true, 
        error: null, 
        activeClass: 'active',
        errorClass: 'text-danger',
    },
    computed: {
        classObject: function() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
})

var example1 = new Vue({
    el: '#example-1',
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
})

var example2 = new Vue({
    el: '#example-2',
    data: {
        parentMessage: 'Parent',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
})

var example3 = new Vue({
    el: '#v-for-object',
    data: {
        object: {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
       }
    }
})



