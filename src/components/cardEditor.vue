<template lang="pug">
.container
  .field
    label.label Title
    .control
      input.input(
        v-model="cardState.title",
        @change="update"
        type="text",
        placeholder="")
  .field
    label.label Subtitle
    .control
      input.input(
        v-model="cardState.subtitle",
        @change="update"
        type="text",
        placeholder="")
  .field
    label.label Image Url
    .control
      input.input(
        v-model="cardState.imageUri",
        @change="update"
        type="text",
        placeholder="")
    p.help url for image, image manager coming soon
  .field
    label.label Body Text
    .control
      textarea.textarea(
        v-model="cardState.formattedText",
        @change="update"
        type="text",
        placeholder="")
  .field
    label.label Buttons
  .field.is-grouped(v-for="(button, index) in cardState.buttons", :key="button.uid")
    .control
      input.input(
        v-model="button.title",
        @change="update"
        type="text",
        placeholder="Title")
    .control.is-expanded
      input.input(
        v-model="button.uri",
        @change="update"
        type="text",
        placeholder="uri")
    .control
      .field.has-addons
        .control
          button.button.is-rounded(v-bind:disabled="index === 0", v-on:click="swap(index, -1)")
            span.icon.is-small
              i.fas.fa-angle-double-up
        .control
          button.button.is-rounded(v-bind:disabled="index === cardState.buttons.length - 1", v-on:click="swap(index, 1)")
            span.icon.is-small
              i.fas.fa-angle-double-down
    .control
      a.button.is-outlined.is-danger
        span.icon.is-small
          i.fas.fa-trash
  .field
    .control
      a.button
        span.icon.is-small
          i.fas.fa-plus
        span Add Button

</template>
<script>
  import u from '../util/index.js'
  import cardService from '../services/card.js'
  export default {
    name: 'cardEditor',
    props: [
      'card'
    ],
    data: function() {
      return {
        cardState: cardService.copyUI(this.card)
      }
    },
    methods: {
      update() {
        this.$emit('update', cardService.copyUI(this.cardState))
      },
      swap(i,d) {
        this.cardState.buttons = u.arr.swap([i,i+d])(this.cardState.buttons)
        this.update()
      }
    }
  }
</script>
