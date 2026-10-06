const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            name: 'Martin',
            list: [1,2,3,4,5],
            nr: 0,
            hide: false,
            nameList: [
                {name: 'Alice', age: 25},
                {name: 'Bob', age: 30},
                {name: 'Charlie', age: 35}
            ]
        }
    },
    methods: {
        myMethod(){

        },
        add(){ 
            this.list.push(this.nr)
        },
        hideList(){
            this.hide = !this.hide
            console.log(this.hide + "Hello")
        },
        addPerson(){
            this.nameList.push({name: this.name, age: this.age})
        }

    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
