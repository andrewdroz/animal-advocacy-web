<template>
  <div>
    <v-app>

      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="4"
            >
              <v-mask-input v-model="mobileNumber" label="mobile number" mask="########">
              </v-mask-input>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-btn variant="outlined" @click="saveMobile">
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>

      <v-btn @click="getMobiles">get</v-btn>
      <div>numbers in db: {{ retrievedNumbers }}</div>
    </v-app>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const mobileNumber = ref(null);
  const retrievedNumbers = ref([12345]);

  async function saveMobile() {
    await $fetch(`/api/saveMobile`,
      {
        method: 'POST',
        body: { number: this.mobileNumber }
      }
    );
  }

  async function getMobiles() {
    retrievedNumbers = await useFetch('/api/retrieveMobiles')
  }
</script>