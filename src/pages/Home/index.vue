<template>
  <div>
    <svg-icon icon-name="meteor" class="logo"/>
    <app-header />
    <router-link to="/404">404</router-link>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
export default{
  name: '',
  components: {
    AppHeader
  },
  mixins: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang='scss'>
.logo{
  width: 120px;
  height: 120px;
}
</style>
