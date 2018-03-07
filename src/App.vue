<template>
  <div id="app">
    <section class="hero is-light is-bold">
      <div class="hero-body">

      </div>
    </section>
    <section class="section">
    <div class="container">

      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" placeholder="">
        </div>
      </div>

      <div class="field">
        <label class="label">Subtitle</label>
        <div class="control">
          <input class="input" type="text" placeholder="">
        </div>
      </div>

      <div class="field">
        <label class="label">Image Url</label>
        <div class="control">
          <input class="input" type="text" placeholder="">
        </div>
        <p class="help">url for image, image manager coming soon</p>
      </div>

      <div class="field">
        <label class="label">Body Text</label>
        <div class="control">
          <textarea class="textarea" type="text" placeholder=""></textarea>
        </div>
      </div>

      <div class="field">
        <label class="label">Buttons</label>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <input class="input" type="text" placeholder="Title">
        </div>
        <div class="control is-expanded">
          <input class="input" type="text" placeholder="url">
        </div>
        <div class="control">
          <div class="field has-addons">
            <div class="control">
              <a class="button is-rounded">
                <span class="icon is-small">
                  <i class="fas fa-angle-double-up"></i>
                </span>
              </a>
            </div>
            <div class="control">
              <a class="button is-rounded">
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



//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    //HelloWorld
  }
}
</script>

<style lang="scss">
  @import './style/main.scss';
</style>
