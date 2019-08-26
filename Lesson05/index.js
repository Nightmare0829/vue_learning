
var vm = new Vue({
    el: '#app', 
    data: {
       firstName: 'Foo',
       lastName: 'Bar',
    },
    computed: {
        fullName: {
            get:function() {
                return this.firstName + ' ' + this.lastName;
            },

            set:function(newValue) {
                var names = newValue.split(' ');
                this.lastName = names[names.length - 1];
                this.firstName = names[0];
            },
        }
    }
})


