import PrimeVue from "primevue/config"
import StyleClass from "primevue/styleclass"

export default defineNuxtPlugin(({ vueApp }) => {
   vueApp.use(PrimeVue, {
      unstyled: true,
   })
   vueApp.directive("styleclass", StyleClass)
})
