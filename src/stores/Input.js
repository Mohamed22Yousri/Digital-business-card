import { defineStore } from "pinia";

export const input = defineStore("input", {
  state: () => ({
    inputs: [
      {
        name: "Mohamed",
        quote: "If you want something done right, do it yourself.	",
        mobile: "1148462926",
        email: "mohamedyousrisadeq2003@gmail.com",
        facebooke:
          "https://facebook.com/profile.php?id=61561039843450&mibextid=ZbWKwL",
        insta:
          "https://www.instagram.com/mohamed_yousri__99?igsh=MTBsMDQ5aGVwdnd2Zw==",
        youtube: "Mohamed Yousri",
        bio: "Mohamed Yousri",
      },
    ],
  }),
});
