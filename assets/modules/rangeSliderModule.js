const rangeSliderApp = Vue.createApp({});

rangeSliderApp.component('range-slider', {
    props: {
        min: { type: Number, default: 0 },
        max: { type: Number, default: 100 },
        startMin: { type: Number, default: 20 },
        startMax: { type: Number, default: 80 },
        minGap: { type: Number, default: 50 }
    },
    data() {
        return {
            minValue: this.startMin,
            maxValue: this.startMax
        };
    },
    computed: {
        leftStyle() {
            return ((this.minValue - this.min) / (this.max - this.min)) * 100 + '%';
        },
        rightStyle() {
            return 100 - ((this.maxValue - this.min) / (this.max - this.min)) * 100 + '%';
        }
    },
    methods: {
        updateMin(e) {
            const val = parseInt(e.target.value);
            if (val + this.minGap >= this.maxValue) {
                this.minValue = val;
            } else {
                this.minValue = this.maxValue - this.minGap;
            }
            console.log(this.minValue)
        },
        updateMax(e) {
            const val = parseInt(e.target.value);
            if (val - this.minGap >= this.minValue) {
                this.maxValue = val;
            } else {
                this.maxValue = this.minValue + this.minGap;
            }
            console.log(this.maxValue)
        }
    },
    template: `
    <div class="range-wrapper">
      <div class="range-price">      
        <label>Kortast tid</label>
        <input type="number" :value="minValue" @input="updateMin">      
        <label>Längsta tid</label>
        <input type="number" :value="maxValue" @input="updateMax">      
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

rangeSliderApp.mount('#range');
