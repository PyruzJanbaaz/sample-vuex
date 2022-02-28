<template>
  <label class="mb-1">Enter your name:</label>
  <input class="form-control" @input="changed" name="name">
</template>

<script>
export default {
  name: "CForm",
  methods: {
    changed(e) {
      this.$store.commit('staticModule/CHANGE', e.target.value)
    }
  }
}
</script>

