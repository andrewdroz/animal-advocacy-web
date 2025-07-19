<template>
  <div>
    <v-app>
        <v-container>
          <v-row>
            <v-col>
              <div class="text-h2">Nus Vege - The Vegan Revolution</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="text-subtitle-1">Register using your mobile number:</div>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-row>
            <v-col>
              <div>
                <v-text-field
                  v-model="mobileNumber" label="mobile number"
                  :error="error"
                  :error-messages="errMessages"
                ></v-text-field>
              </div>
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
      

      
    </v-app>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const mobileNumber = ref(null);
  const retrievedNumbers = ref([12345]);
  const error = ref(false)
  const errMessages = ref([])

  async function saveMobile() {
    if (!mobileNumber.value) {
      error.value = true;
      errMessages.value = (["Mobile number is required"])
      return;
    }
    
    await $fetch(`/api/sendAuth`,
      {
        method: 'POST',
        body: { number: mobileNumber.value }
      }
    );
    
    // await $fetch(`/api/saveMobile`,
    //   {
    //     method: 'POST',
    //     body: { number: mobileNumber.value }
    //   }
    // );
  }

  // async function getMobiles() {
    // retrievedNumbers.value = await useFetch('/api/retrieveMobiles').data.value;
  // }
</script>