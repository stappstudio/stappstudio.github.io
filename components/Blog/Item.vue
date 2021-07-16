<template>
  <div class="content-container">
    <div class="w-full p-16">
      <nuxt-link :to="post.path" class="w-full h-32">
        <!-- <img :src="post.media" class="w-full"> -->
        <div class="bg-gray-300 rounded-xl w-full h-32" />
      </nuxt-link>
      <div class="w-full mt-8 text-center">
        <nuxt-link :to="post.path">
          <span class="block stapp-heading-text text-2xl text-stapp-blue hover:text-stapp-pink">
            {{ post.title }}
          </span>
        </nuxt-link>
        <nuxt-link :to="post.path">
          <p class="block stapp-body-text mt-4">
            {{ post.description }}
          </p>
        </nuxt-link>
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
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
