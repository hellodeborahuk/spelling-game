import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaCheck, GiPartyPopper, MdReplay, FaTimes  } from "oh-vue-icons/icons";

addIcons(FaCheck, GiPartyPopper, MdReplay, FaTimes );

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("v-icon", OhVueIcon);
});