<template>
  <div class="post">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.explanation }}</p>
      <img v-bind:src="post.url" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        post: null,
        error: null,
      }
    },
    created() {
      // watch the params of the route to fetch the data again
      this.$watch(
        () => this.$route.params,
        () => {
          this.fetchData()
        },
        // fetch the data when the view is created and the data is
        // already being observed
        { immediate: true }
      )
    },
    methods: {
      async fetchData() {
        this.error = this.post = null
        this.loading = true
        // replace `getPost` with your data fetching util / API wrapper
        try {
          this.loading = false
          const response = await fetch('http://localhost:8000/apod-today')
          const json = await response.json()
          console.log("Download complete", json)
          this.post = json
        } catch (error) {
          console.error(`Download error: ${error.message}`);
          this.error = error
        }
      },
    },
  }
</script>
