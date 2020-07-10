<template >
  <div class="dashboard">
    <v-subheader class="grey--text">Dashboard</v-subheader>

<!-- create task -->
    <div class="ml-3 mt-0 mb-5">
        <v-dialog
        v-model="dialog"
        width="500"
        >
        <template v-slot:activator="{ on }">
            <v-btn
            color="green"
            dark
            v-on="on"
            >
            Create a task
            </v-btn>
        </template>

<!-- <form dialog> -->
        <v-card>
            <h2 class="pt-7 pl-10">Add a new task</h2>
            <v-form
                ref="form"
                class="pa-10 pt-4"
            >
                <v-text-field
                v-model="title"
                label="title"
                prepend-icon="title"
                required
                ></v-text-field>


                <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-main-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="due"
                        label="Picker in menu"
                        prepend-icon="event"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker v-model="due" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                    </v-date-picker>
                </v-menu>

                <v-btn
                color="warning"
                @click="submit"
                >
                Add
                </v-btn>
            </v-form>
        </v-card>
        </v-dialog>
    </div>

<!-- tasklist -->
        <div>
            <div class="d-flex" v-for="task in tasks" :key="task.title">
                <v-row no-gutters >
                    <v-col>
                        <v-card
                        class="pa-2 pl-5 grey--text"
                        tile
                        >
                        {{ task.title}}
                        </v-card>
                    </v-col>
                    <v-col md="2">
                        <v-card
                        class="pa-2 grey--text"
                        tile
                        >
                        {{ task.due }}    
                        </v-card>
                    </v-col>
                    <v-col lg="2">
                        <v-card
                        class="pa-2 grey--text"
                        tile
                        >
                        {{ task.status }}
                        </v-card>
                    </v-col>
                </v-row>               
            </div>
        </div>

  </div>
</template>

<script>
import format from 'date-fns/format'
// import { db } from '@/firebase'
export default {
    data() {
        return {
            tasks: [
                {title: "Go grocery shopping", due: '9th July 2020', status: "completed"},
                {title: "Coding homework", due: '12th July 2020', status: "ongoing"},
                {title: "Call mom", due: '17th July 2020', status: "completed"}
            ],
            dialog: false,
            title: "",
            due: "",
            status: "",
            date: new Date().toISOString().substr(0, 10),
            menu: false,
            modal: false,
            menu2: false,
        }
    },
    methods: {
        submit() {
            if(this.$refs.form.validate()){
                console.log(this.title);
                console.log(this.due)
                // const task = {
                //     title: this.title,
                //     content: this.content,
                //     due: format(this.due, 'Do MMM YYYY'),
                //     status: 'ongoing'
                // }
            // db.collection('tasks').add(task).then(() => {
            //     console.log("it is successfully added")
            // });
        }
    },
    computed: {
        formattedDate() {
            return this.due ? format(this.due, 'Do MMM YYYY') : ''
        }
      }
    }
}
</script>
