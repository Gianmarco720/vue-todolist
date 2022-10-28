const { createApp } = Vue;

    createApp({
        data() {
            return{
                tasks: [
                    {
                        text: 'Fare gli esercizi',
                        done: false,
                    },

                    {
                        text: 'Comprare delle corde nuove',
                        done: true,
                    },

                    {
                        text: 'Cambiare le corde alla chitarra',
                        done: false,
                    },

                    {
                        text: 'Lavare la macchina',
                        done: true
                    },

                    {
                        text: 'Committare e pushare',
                        done: false
                    }
                ]
            }
        },
        methods: {
            remove(index) {
                console.log('Ho cliccato sulla x:', index);
                this.tasks.splice(index, 1);
            }
        }
    }).mount('#app');