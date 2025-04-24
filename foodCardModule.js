const foodCardApp = Vue.createApp({})

foodCardApp.component('food-card', {
    props: {
        image: String,
        title: String,
        mainingredient: String,
        numberofservings: String,
        cookingtime: String,
        contains: String,
        adaptationlist: {
            type: Array,
            required: false,
            default: () => []
        }
    },
    template: `
        <div id="card">
            <img :src="image" alt="mat">
            <div id="foodInfo">
                <h2>{{ title }}</h2>
                <h4>{{mainingredient}}</h4>
                <h4>Antal portioner: {{numberofservings}}</h4>
                <h4>kastrul: {{cookingtime}} min</h4>
                <h4>Innehåller: {{contains}}</h4>
            </div>
            <hr>
            <div id="adaptations">
                <h3>Anpassning</h3>
                <ul>
                    <li v-for="adaptation of adaptationlist">Går att göra {{adaptation}}</li>
                </ul>
            </div>
        </div>
    `,
    methods: {
        printAdaptationlist(){

        }
    }
})

foodCardApp.mount('#kundfavoriter')