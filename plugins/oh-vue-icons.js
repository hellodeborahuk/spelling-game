import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaCheck, GiPartyPopper, MdReplay } from "oh-vue-icons/icons";

addIcons(FaCheck, GiPartyPopper, MdReplay);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("v-icon", OhVueIcon);
});