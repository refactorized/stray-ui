<template>
  <div id="app">
    <section class="hero is-primary is-bold">
      <div class="hero-body">
      </div>
    </section>
    <section class="hero is-light is-bold">
      <div class="hero-body">
        <div class="container is-widescreen">
          <div class="columns is-centered">

          <card-preview v-bind="card"></card-preview>

          </div>
        </div>
      </div>
    </section>
    <section class="section">
        <card-editor v-bind:card="card" v-on:update="updateCard"></card-editor>
    </section>
  </div>
</template>

<script>
// todo: only import icons needed in production
import fontawesome from '@fortawesome/fontawesome'
import fa_solid from '@fortawesome/fontawesome-free-solid'

import cardService from './services/card.js'

import cardPreview from './components/cardPreview.vue'
import cardEditor from './components/cardEditor.vue'

export default {
  name: 'app',
  components: {
    cardPreview,
    cardEditor
  },
  data: function() {
  // todo further separate, and allow setting of path to get/save
    let card = cardService.toUI(cardService.getCard('demo/card'))
    return { card }
  },
  methods: {
    updateCard(c) {
      console.log({from: this.card, to: c})
      this.card = c
    }

  }
}

</script>

<style lang="scss">
  @import './style/main.scss';
</style>
