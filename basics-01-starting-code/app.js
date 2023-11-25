const app = Vue.createApp({
    data(){
        return {
            goals: ["finish this course", "do three projects"]
        }
    }
});

app.mount("#user-goal");