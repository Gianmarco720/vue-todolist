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
        }
    }).mount('#app');