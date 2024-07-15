const MyNameApp = {
    data() {
        return {
            name: 'Josiel',
            age: 35,
            input_name: ""
        }
    },
    methods:{
        submitForm(e){
            e.preventDefault();
            this.name = this.input_name;
            console.log(this.input_name)
        }
    },
}

Vue.createApp(MyNameApp).mount('#app')