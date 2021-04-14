<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input
          bottom-slots
          v-model="newQweetContent"
          class="new-qweet"
          placeholder="What's happening?"
          counter
          maxlength="280"
          :dense="dense"
          autogrow
        >
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://cdn.quasar.dev/img/avatar5.jpg">
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn
          class="q-mb-lg"
          :disable="!newQweetContent"
          unelevated
          rounded color="primary"
          label="QTweet"
          no-caps
        />
      </div>

    </div>
    <q-separator
      size="10px"
      color="grey-2"
      class="divider"
    />

    <q-list>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://twitter.com/byrookas/photo">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label ><strong>Rookas Rudzianskas</strong>
          <span class="text-grey-7">
            @rookasrudzianskas
          </span>
          </q-item-label>
          <q-item-label>
            <span class="text-weight-bold">Janet</span>
            -- I'll be in your neighborhood doing errands this
            weekend. Do you want to grab brunch?
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'PageHome',
  data() {
    return {
      newQweetContent: ''
    }
  }

}
</script>

<style lang="sass">
.new-qweet
  textarea
    font-size: 19px
    line-height: 1.4 !important

.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
</style>
