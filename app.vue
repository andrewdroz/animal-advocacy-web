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
                  v-show="!isMobileSubmitted"
                  v-model="mobileNumber" label="mobile number"
                  :error="error"
                  :error-messages="errMessages"
                ></v-text-field>
                <v-otp-input v-show="isMobileSubmitted" v-model="otpEntered"></v-otp-input>
              </div>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col>
              <v-btn variant="outlined" @click="isMobileSubmitted ? verifyOtp : sendOtp">
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
  const isMobileSubmitted = ref(false);
  const otpEntered = ref(null);
  const error = ref(false)
  const errMessages = ref([])

  async function sendOtp() {
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
    
    isMobileSubmitted.value = true;
    // await $fetch(`/api/saveMobile`,
    //   {
    //     method: 'POST',
    //     body: { number: mobileNumber.value }
    //   }
    // );
  }

  async function verifyOtp() {
    await $fetch(`/api/verifyOtp`,
      {
        method: 'POST',
        body: { otp: otpEntered.value }
      }
    );
  }

  // async function getMobiles() {
    // retrievedNumbers.value = await useFetch('/api/retrieveMobiles').data.value;
  // }
</script>