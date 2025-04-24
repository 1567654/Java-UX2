const rangeSliderApp = Vue.createApp({})

rangeSliderApp.component('range-slider', {
    props: {
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        startMin: {
            type: Number,
            default: 20
        },
        startMax: {
            type: Number,
            default: 80
        },
        minGap: {
            type: Number,
            default: 5
        }
    },
    data() {
        return {
            minValue: this.startMin,
            maxValue: this.startMax
        }
    },
    computed: {
        leftStyle() {
            return ((this.minValue - this.min) / (this.max - this.min)) * 100 + '%'
        },
        rightStyle() {
            return 100 - ((this.maxValue - this.min) / (this.max - this.min)) * 100 + '%'
        }
    },
    methods: {
        updateMin(e) {
            let val = parseInt(e.target.value)
            //   console.log("this.maxValue: " + this.maxValue + " val: " + val)
            if (this.maxValue - val < this.minGap) {
                val = this.maxValue - this.minGap
            }
            this.minValue = Math.max(this.min, val)
            //   console.log("minValue: "+  this.minValue)
        },
        updateMax(e) {
            let val = parseInt(e.target.value)
            if (val - this.minValue < this.minGap) {
                val = this.minValue + this.minGap
            }
            this.maxValue = Math.min(this.max, val)
        }
    },
    template: `
    <div>
      <div class="range-price">      
        <label for="min">Min</label>
        <input type="number" name="min" :value="minValue" @input="updateMin">      
        <label for="max">Max</label>
        <input type="number" name="max" :value="maxValue" @input="updateMax">      
      </div>

      <div class="range-slider">
        <span class="range-selected" :style="{ left: leftStyle, right: rightStyle }"></span>
      </div>

      <div class="range-input">
        <input type="range" class="min" :min="min" :max="max" :value="minValue" @input="updateMin">
        <input type="range" class="max" :min="min" :max="max" :value="maxValue" @input="updateMax">
      </div>
    </div>
  `
})

rangeSliderApp.mount('.range')