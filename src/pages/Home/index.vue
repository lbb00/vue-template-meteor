<template>
  <div>
    <svg-icon icon-name="test" />
    <app-header />
    <router-link to="/404">404</router-link>
  </div>
</template>

<script>
import AppHeader from './../../components/AppHeader'
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

</style>
