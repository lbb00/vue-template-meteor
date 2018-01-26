<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="_iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    iconName: {
      type: String,
      required: true
    }
  },
  computed: {
    _iconName () {
      return `#icon-${this.iconName}`
    }
  }
}
</script>

<style>
.svg-icon {
  /* width: 1em;
  height: 1em;
  vertical-align: -0.15em; */
  fill: currentColor;
  overflow: hidden;
}
</style>
