const { createApp } = Vue;

createApp({
    data() {
        return {
            newTask: {
                text: '',
                done: false,
            },
            error: false,
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
        addTask() {
            console.log('Ho cliccato su add task');
            console.log(this.newTask);

            // non consento l'aggiunta di input vuoti
            if(this.newTask.text.length < 5) {

                // mostro un errore
                this.error = true;

            } else {
                this.error = false;

                // pusho la task nell'array
                this.tasks.unshift(this.newTask);

                // svuoto l'input dopo aver aggiunto la task
                this.newTask = '';
            }
        },
        remove(index) {
            console.log('Ho cliccato sulla x:', index);
            this.tasks.splice(index, 1);
        },
    }
}).mount('#app');