<template>
  <div class="form_list">
    <v-container class="pa-10">
      <form action="" v-for="item in inputs" :key="item.name">
        <v-row>
          <v-col :cols="12">
            <p>Weclcom Back,</p>
            <div class="d-flex justify-space-between">
              <h3>{{ item.name }}</h3>
              <div>
                <img
                  style="cursor: pointer"
                  @click="$router.push({ name: 'about' })"
                  src="@/assets/remove_red_eye.png"
                  alt=""
                />
              </div>
            </div>
          </v-col>
          <v-col :cols="12">
            <p class="pb-2">Name</p>
            <input
              v-model.lazy="item.name"
              style="
                background-color: #fcfcfc;
                width: 100%;
                height: 30px;
                border: 1px solid #e4e4e7;
                outline: none;
              "
              type="text"
            />
          </v-col>
          <v-col :cols="12">
            <p class="pb-2">Quote</p>
            <input
              v-model="item.quote"
              style="
                background-color: #fcfcfc;
                width: 100%;
                height: 30px;
                border: 1px solid #e4e4e7;
                outline: none;
              "
              type="text"
            />
          </v-col>
          <v-col :cols="12">
            <p class="pb-2">Mobile number</p>
            <input
              v-model="item.mobile"
              style="
                background-color: #fcfcfc;
                width: 100%;
                height: 30px;
                border: 1px solid #e4e4e7;
                outline: none;
              "
              type="text"
            />
          </v-col>
          <v-col :cols="12">
            <p class="pb-2">E-mail</p>
            <input
              v-model="item.email"
              style="
                background-color: #fcfcfc;
                width: 100%;
                height: 30px;
                border: 1px solid #e4e4e7;
                outline: none;
              "
              type="text"
            />
          </v-col>
          <v-col :cols="12">
            <p class="pb-2">Facebook</p>
            <input
              v-model.lazy="item.facebooke"
              style="
                background-color: #fcfcfc;
                width: 100%;
                height: 30px;
                border: 1px solid #e4e4e7;
                outline: none;
              "
              type="text"
            />
          </v-col>
          <v-col :cols="12">
            <p class="pb-2">Instagram</p>
            <input
              v-model.lazy="item.insta"
              style="
                background-color: #fcfcfc;
                width: 100%;
                height: 30px;
                border: 1px solid #e4e4e7;
                outline: none;
              "
              type="text"
            />
          </v-col>
          <v-col :cols="12">
            <p class="pb-2">Youtube</p>
            <input
              v-model.lazy="item.youtube"
              style="
                background-color: #fcfcfc;
                width: 100%;
                height: 30px;
                border: 1px solid #e4e4e7;
                outline: none;
              "
              type="text"
            />
          </v-col>
          <v-col :cols="12">
            <p class="pb-2">Bio</p>
            <textarea
              v-model="item.bio"
              style="
                background-color: #fcfcfc;
                width: 100%;
                height: 70px;
                border: 1px solid #e4e4e7;
                outline: none;
              "
            ></textarea>
          </v-col>
        </v-row>
        <v-col :cols="12">
          <input
            @click="formSave"
            type="submit"
            value="Save"
            style="
              background-color: #016ffe;
              padding: 15px 10px;
              width: 100%;
              color: white;
            "
          />
        </v-col>
      </form>
    </v-container>
  </div>
</template>

<script>
import { input } from "@/stores/Input";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(input, ["inputs"]),
  },

  methods: {
    formSave(e) {
      e.preventDefault();
      this.$router.push({ name: "about" });
    },
  },
};
</script>

<style>
form p {
  color: #a0a0a0;
}
</style>
