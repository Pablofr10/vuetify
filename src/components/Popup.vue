<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template #activator="{ on, attrs }">
      <v-btn color="success" v-bind="attrs" v-on="on"> Add new project </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2">
        <h2>Add a New Project</h2>
        <v-card-text>
          <v-form>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Nome"
                  v-model="project.title"
                  prepend-icon="mdi-cursor-text"
                >
                </v-text-field>
                <v-textarea
                  label="Information"
                  v-model="project.content"
                  prepend-icon="mdi-information-outline"
                ></v-textarea>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="project.date"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template #activator="{ on, attrs }">
                    <v-text-field
                      v-bind="attrs"
                      v-on="on"
                      v-model="project.date"
                      label="Data"
                      prepend-icon="mdi-calendar"
                    >
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="project.date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
                <v-btn text class="success mx-0 mt-3" @click="submitInfo()"
                  >Add Project</v-btn
                >
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Popup",
  data() {
    return {
      dialog: false,
      project: {
        title: "",
        content: "",
        date: "",
      },
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
    };
  },
  methods: {
    submitInfo() {
      console.log(this.project);
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
</style>
