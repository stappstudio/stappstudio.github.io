<template>
  <div class="content-container">
    <div class="w-full flex flex-wrap justify-between gap-16">
      <div v-for="post in posts" :key="post.dir" class="w-1/4">
        <BlogItem :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @typedef { import("@nuxt/types").Context } NuxtContext
 * @typedef { import("nuxt-i18n") }
 * @typedef { import("@nuxt/content") }
 *
 * @typedef { import("pages/blog/index.vue").ContentDocument } ContentDocument
 */
export default {
  /** @this NuxtContext */
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  mounted () {
    console.log(this.props)
  }
}
</script>
