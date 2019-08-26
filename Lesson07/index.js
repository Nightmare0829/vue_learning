
var vm = new Vue({
    el: '#app', 
    data: {
        // activeColor: '#0000ff',
        // activeColor: 'red',
        // activeColor: 'green',
        activeColor: 'rgba(255, 99, 71, 0.5)',

        // fontSize: 30
        fontSize: 50
    },
    computed: {
        
    }
})

var vm1 = new Vue({
    el: '#app-1', 
    data: {
        baseStyles: {
            activeColor: 'rgba(255, 99, 71, 0.5)',
            fontSize: 50
        },
        overridingStyles: {
            activeColor: 'rgba(255, 99, 71, 0.5)',
            fontSize: 50
        }
    },
    computed: {
        
    }
})
