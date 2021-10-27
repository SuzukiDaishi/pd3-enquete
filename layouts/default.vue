<template lang="pug">
  div
    section.hero.is-link
      .hero-body
        h1.title PD3 アンケート調査
        p.subtitle 金沢工業大学 4EP3 鈴木大志
    //- Nuxt
    Junbi
    footer.footer
  </div>
</template>

<script>
import Junbi from '@/components/Junbi.vue'

export default {
  components: {
    Junbi,
  }
}
</script>
