const rangeSliderApp = Vue.createApp({});

rangeSliderApp.component('range-slider', {
    props: {
        min: { type: Number, default: 0 },
        max: { type: Number, default: 100 },
        startMin: { type: Number, default: 20 },
        startMax: { type: Number, default: 80 },
        minGap: { type: Number, default: 50 },
        label: { type: String }
    },
    data() {
        return {
            minValue: this.startMin,
            maxValue: this.startMax
        };
    },
    computed: {
        leftStyle() {
            console.log("L: " +((this.minValue - this.min) / (this.max - this.min)) * 100 + '%');
            return ((this.minValue - this.min) / (this.max - this.min)) * 100 + '%';
        },
        rightStyle() {
            console.log("R: " + (Math.round(100 - ((this.maxValue - this.min) / (this.max - this.min)) * 100) + '%'));
            return 100 - ((this.maxValue - this.min) / (this.max - this.min)) * 100 + '%';
        }
    },
    methods: {
        updateMin(e) {
            let val = parseInt(e.target.value)
            //   console.log("this.maxValue: " + this.maxValue + " val: " + val)
            if (val < min) {
                this.minValue = 0;
            }
            else if (val + this.minGap <= this.maxValue) {
                this.minValue = val;
            }
            else {
                this.minValue = this.maxValue -this.minGap
            }
            //   console.log("minValue: "+  this.minValue)
        },
        updateMax(e) {
            let val = parseInt(e.target.value)
            //   console.log("this.maxValue: " + this.maxValue + " val: " + val)
            if (val > max) {
                this.maxValue = 100;
            }
            else if (val - this.minGap >= this.minValue) {
                this.maxValue = val;
            }
            else {
                this.maxValue = this.minValue + this.minGap

            }
        }
    },
    template: `
    <div class="range-wrapper">
      <div class="range-price">      
        <label for="min">Minsta {{label}}</label>
        <label for="max">Högsta {{label}}</label>
        <input type="number" id="min" name="min" :value="minValue" @input="updateMin">      
        <input type="number" id="max" name="max" :value="maxValue" @input="updateMax">      
      </div>

      <div class="range-slider">
        <span class="range-selected" :style="{ left: leftStyle, right: rightStyle }"></span>
      </div>

      <div class="range-input">
        <input type="range" class="min" :min="min" :max="max" :value="minValue" @input="updateMin">
        <input type="range" class="max" :min="min" :max="max" :value="maxValue" @input="updateMax">
      </div>

      <div class="range-endpoints">
        <p>{{ min }}</p>
        <p>{{ max }}</p>
      </div>
    </div>
  `
});

rangeSliderApp.mount('.right-body')