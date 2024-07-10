<template>
  <div class="about pa-10">
    <v-container v-for="item in inputs" :key="item.name">
      <v-row
        class="px-3"
        style="background-color: #4d4d4d; border-radius: 30px"
      >
        <v-col :cols="12" class="d-flex justify-end">
          <img
            style="cursor: pointer"
            @click="$router.push({ name: 'home' })"
            src="@/assets/edit.png"
            alt=""
          />
        </v-col>
        <v-col :cols="12">
          <h3
            class="text-center ma-auto"
            style="color: white; width: 300px; height: 70px"
          >
            {{ item.quote }}
          </h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col :cols="12" class="d-flex align-center justify-center mt-4">
          <h3>{{ item.name }}</h3>
        </v-col>
        <div class="d-flex align-center justify-center" style="width: 100%">
          <v-col :cols="2" class="d-flex align-center justify-center"
            ><img
              style="cursor: pointer"
              @click="dialog = !dialog"
              src="@/assets/Group 1.png"
              alt=""
          /></v-col>
          <v-col :cols="3" class="d-flex align-center justify-center"
            ><img
              style="cursor: pointer"
              @click="dialog1 = !dialog1"
              src="@/assets/Group 2.png"
              alt=""
          /></v-col>
        </div>
        <v-col :cols="12" class="mt-6">
          <div>
            <p class="text-center">
              {{ item.bio }}
            </p>
          </div>
        </v-col>
        <v-col :cols="12">
          <div class="text-center">
            <img src="@/assets/Frame 1.png" alt="" />
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" v-for="item in inputs" :key="item.name">
      <v-card>
        <v-card-title>
          <div class="text-center">
            <img src="@/assets/Group 1.png" alt="" />
          </div>
        </v-card-title>
        <v-card-text>
          <label class="px-4" for="">+20</label>
          <input
            :value="item.mobile"
            style="
              background-color: #fcfcfc;
              border: 1px solid #e4e4e7;
              outline: none;
              width: 80%;
              height: 30px;
            "
            type="text"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog1" v-for="item in inputs" :key="item.name">
      <v-card>
        <v-card-title>
          <div class="text-center">
            <img src="@/assets/Group 2.png" alt="" />
          </div>
        </v-card-title>
        <v-card-text>
          <v-icon
            class="pr-6"
            color="teal-darken-2"
            icon="mdi-email"
            size="large"
          ></v-icon>
          <input
            :value="item.email"
            style="
              background-color: #fcfcfc;
              border: 1px solid #e4e4e7;
              outline: none;
              width: 80%;
              height: 30px;
            "
            type="text"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { input } from "@/stores/Input";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(input, ["inputs"]),
  },
  data() {
    return {
      dialog: false,
      dialog1: false,
    };
  },
};
</script>
