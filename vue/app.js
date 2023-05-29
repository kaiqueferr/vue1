const myapp = {
    data(){
        return{
            name: "kaique",
            iname: "t",

        }
    },
    methods: {
        sub(e){
            e.preventDefault()
            console.log(this.iname);
            this.name = this.iname;
        }
    }
}
Vue.createApp(myapp).mount("#app");

