<template>
  <div class="box column is-8">
    <div class="media">
      <figure class="media-left image is-128x128">
        <img v-bind:src="imageUri">
      </figure>
      <div class="media-content">
        <div class="title is-4">{{title}}</div>
        <div class="subtitle is-6">{{subtitle}}</div>
        <!-- important make sure to sanitize on save -->
        <div class="content is-small" v-html="formattedText"></div>
        <div class="buttons">
          <a v-for="(button, index) in buttons" :key="button.uid"
              v-bind:href="button.uri"
              target="_blank"
              class="button is-small">{{button.title}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cardPreview',
    props: [
      'title',
      'subtitle',
      'formattedText',
      'imageUri',
      'buttons'
    ],
    data: function() {
      return {

      }
    }
  }
</script>
