<template>
  <p class="alert alert-info p-2 mt-2">
    You entered:
    {{ this.$store.state.staticModule.name }}
  </p>
  <hr/>
  <strong class="text-center d-block mb-3">Get users by Id</strong>
  <input class="form-control" type="number" v-model="userId" name="userId" placeholder="Enter user id here...">
  <button @click="getUsers" class="btn btn-warning mt-2">Get Users!</button>
  <p class="mt-3">{{ this.$store.state.dynamicModule.users }}</p>
</template>

<script>
export default {
  name: "CUsers",
  data() {
    return {
      userId: ''
    }
  },
  methods: {
    getUsers() {
      this.$store.dispatch('loadUsers', this.userId, this.$store.state)
    }
  }
}
</script>

