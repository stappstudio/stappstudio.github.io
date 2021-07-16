<template>
  <div class="content-container">
    <div class="w-full flex justify-start items-center p-16 gap-16">
      <nuxt-link :to="post.path" class="w-1/4 h-56">
        <div class="bg-gray-300 rounded-xl w-full h-full" />
      </nuxt-link>
      <div class="flex-grow">
        <nuxt-link :to="post.path">
          <span class="stapp-heading-text text-5xl text-stapp-blue hover:text-stapp-pink">
            {{ post.title }}
          </span>
        </nuxt-link>
        <nuxt-link :to="post.path">
          <p class="stapp-body-text text-xl mt-4 text-black">
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
