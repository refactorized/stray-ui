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
                    <a v-for="(button, index) in buttons" :key="button._uid"
                        v-bind:href="button.uri"
                        target="_blank"
                        class="button is-small">{{button.title}}
                    </a>
                  </div>
                </div>
                <div class="media-right">
                  <p class="is-rotated-ccw">
                    PREVIEW
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
    <div class="container">

      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input v-model="title" class="input" type="text" placeholder="">
        </div>
      </div>

      <div class="field">
        <label class="label">Subtitle</label>
        <div class="control">
          <input v-model="subtitle" class="input" type="text" placeholder="">
        </div>
      </div>

      <div class="field">
        <label class="label">Image Url</label>
        <div class="control">
          <input v-model="imageUri" class="input" type="text" placeholder="">
        </div>
        <p class="help">url for image, image manager coming soon</p>
      </div>

      <div class="field">
        <label class="label">Body Text</label>
        <div class="control">
          <textarea v-model="formattedText" class="textarea" type="text" placeholder=""></textarea>
        </div>
      </div>

      <div class="field">
        <label class="label">Buttons</label>
      </div>

      <div v-for="(button, index) in buttons" :key="button._uid" class="field is-grouped">
        <div class="control">
          <input class="input" v-model="button.title" type="text" placeholder="Title">
        </div>
        <div class="control is-expanded">
          <input class="input" v-model="button.uri" type="text" placeholder="uri">
        </div>
        <div class="control">
          <div class="field has-addons">
            <div class="control">
              <a class="button is-rounded" v-bind:disabled="index === 0">
                <span class="icon is-small">
                  <i class="fas fa-angle-double-up"></i>
                </span>
              </a>
            </div>
            <div class="control">
              <a class="button is-rounded" v-bind:disabled="index === buttons.length - 1">
                <span class="icon is-small">
                  <i class="fas fa-angle-double-down"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="control">
          <a class="button is-outlined is-danger">
            <span class="icon is-small">
              <i class="fas fa-trash"></i>
            </span>
          </a>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <a class="button">
            <span class="icon is-small">
              <i class="fas fa-plus"></i>
            </span>
            <span>Add Button</span>
          </a>
        </div>

      </div>
    </div>
  </section>
  </div>
</template>

<script>
// todo: only import icons needed in production
import fontawesome from '@fortawesome/fontawesome'
import fa_solid from '@fortawesome/fontawesome-free-solid'

import cardService from './services/card.js'

//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    //HelloWorld
  },
  data() {
  // todo further separate, and allow setting of path to get/save
    let data = cardService.toUI(cardService.getCard('demo/card'))
    console.dir(data)
    return data
  }
}

</script>

<style lang="scss">
  @import './style/main.scss';
</style>
