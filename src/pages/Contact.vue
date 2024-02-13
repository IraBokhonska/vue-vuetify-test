<template>
  <v-content
    ><div class="staticHero">
      <v-img cover src="../assets/images/contact.jpg">
        <v-row align="end" class="white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">Contact Us</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div class="block">
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :counter="30"
            :rules="nameRules"
            label="Name Surname"
            required
          ></v-text-field>
          <v-text-field
            v-model="tel"
            :counter="9"
            :rules="telRules"
            label="Phone"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-textarea
            v-model="message"
            :rules="messageRules"
            label="Message"
            required
          ></v-textarea>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
            >Submit</v-btn
          >
          <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
        </v-form>
      </v-container>
    </div>
    <div class="googlemap">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39743.744618134384!2d-0.14783248685344214!3d51.49516039081873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876032a06b9cffb%3A0xdf1e2476b30e3bd!2sSouth%20London%20Gallery!5e0!3m2!1suk!2sua!4v1707842927075!5m2!1suk!2sua"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "Contact",

  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 30) || "Name must be less than 30 characters",
    ],
    tel: "",
    telRules: [
      (v) => !!v || "Phone is required",
      (v) =>
        (v && v.length >= 9) || "Phone number needs to be at least 9 digits.",
      (v) => /[0-9-]+/.test(v) || "Phone must be valid",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    message: "",
    messageRules: [
      (v) => !!v || "Message is required",
      (v) => (v && v.length >= 10) || "Message must be more than 10 characters",
    ],
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
