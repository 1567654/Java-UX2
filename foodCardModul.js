const foodCardApp = Vue.createApp({})

foodCardApp.component('food-card', {
    props: {
        image: String,
        title: String,
        numberofservings: String,
        cookingtime: String
    },
    template: `
        <div id="card">
            <img :src="image" alt="mat">
            <div id="foodInfo">
                <h2>{{ title }}</h2>
                <h4>Typ</h4>
                <h4>Antal portioner: {{numberofservings}}</h4>
                <h4>kastrul: {{cookingtime}} min</h4>
                <h4>Innehåller: ???</h4>
            </div>
            <hr>
            <div id="adaptation">
                <h3>Anpassning</h3>
                <ul>
                    <!-- Anpassningslista -->
                </ul>
            </div>
        </div>
    `
})

foodCardApp.mount('#kundfavoriter')