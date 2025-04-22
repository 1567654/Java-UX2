const foodCradApp = Vue.createApp({})

foodCradApp.component('foodCrad', {
    props: ['bild', 'MaträttNamn'],
    template: `<div id="card">
                <img src={{bild}} alt="mat">
                <div id="MatInfo">
                    <h2>{{MaträttNamn}}</h2>
                    <h4>Typ</h4>
                    <h4>Antal potioner</h4>
                    <h4>Tid</h4>
                    <h4>Innehåller: ???</h4>
                </div>
                <hr>
                <div id="Anpassning">
                    <h3>Anpssning</h3>
                    <ul>
                        
                    </ul>
                </div>
            </div>`
})

foodCradApp.mount('#app')