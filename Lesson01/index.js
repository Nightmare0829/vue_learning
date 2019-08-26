Vue.component ('todo-list', {
    template: '<li>this is a todo</li>'
})

Vue.component('todo-item', {
    props:['todo'],
    template: '<li> {{todo.text}} </li>'
})

var app7 = new Vue({
    el: '#app-7'
})

var app8 = new Vue({
    el: '#app-8',
    data: {
        groceryList: [
            {id: 0, text: '菠菜'},
            {id: 1, text: '洋葱'},
            {id: 2, text: '番茄'},
        ]
    }
})