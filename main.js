const clock = {
    data() {
        return {
            h: 99,
            m: 99,
            s: 99
        }
    },
    methods: {
        updateClock() {

        }
    }
};

Vue.createApp(clock).mount("#clock");