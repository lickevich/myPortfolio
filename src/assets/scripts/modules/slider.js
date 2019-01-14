
import Vue from 'vue';

const info = {
    template: "#slider-info",
    props: {
        work: Object
    }
};
const display = {
    template: "#slider-display",
    props: {
        work: Object
    }
};
const btns = {
    template: "#slider-btns",
    data() {
        return {
            prevButtonWorks: [],
            nextButtonWorks: []
        };
    },
    methods: {
        slide(direction) {
            this.$emit('slide', direction);
        },
        transformWorksArrForBtn(btnDirection) {
            switch (btnDirection) {
                case 'next':
                break;

                case 'prev':
                break;
            }
        }
    }
};

new Vue({
    el: "#slider-component",
    components: {
        info, display, btns
    },
    data() {
        return {
            works: [],
            currentIndex: 0
        }
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex]
        }
    },
    watch: {
        currentIndex(value) {
            this.makeInfiniteSliding(value);
        }
    },
    created() {
        this.works = require('../../../data/works.json');
    },
    methods: {
        makeInfiniteSliding(value) {
            const worksAmountMinusOne = this.works.length - 1;

            if (value > worksAmountMinusOne) {
                this.currentIndex = 0
            }
            if (value < 0) {
                this.currentIndex = worksAmountMinusOne
            }
        },
        handleSlide(direction) {
            switch(direction) {
              case "next" :
                this.currentIndex = this.currentIndex + 1
              break
              case "prev" :
                this.currentIndex = this.currentIndex - 1
              break
            }
        }
    },
    template: "#slider-root"
});