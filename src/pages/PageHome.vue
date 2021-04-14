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

    <q-list separator>
      <q-item
        v-for="qweet in qweets"
        :key="qweet.date"
        class="q-py-md">
        <q-item-section avatar top>
          <q-avatar>
            <img src="../assets/RS1Aa0iK_400x400.jpeg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>Rookas Rudzianskas</strong>
          <span class="text-grey-7">
            @rookasrudzianskas
          </span>
          </q-item-label>
          <q-item-label class="qweet-content text-body1">{{qweet.content}}</q-item-label>

          <div class="qweet-icons row justify-between q-mt-sm">
            <q-btn
              flat
              round color="grey"
              icon="far fa-comment"
              size="sm"
            />
            <q-btn
              flat
              round color="grey"
              icon="fas fa-retweet"
              size="sm"
            />
            <q-btn
              flat
              round color="grey"
              icon="far fa-heart"
              size="sm"
            />
            <q-btn
              flat
              round color="grey"
              icon="fas fa-trash"
              size="sm"
            />
          </div>
        </q-item-section>

        <q-item-section side top>
          {{qweet.date  | relativeDate}}
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { formatDistance } from 'date-fns'
export default {
  name: 'PageHome',
  data() {
    return {
      newQweetContent: '',
      qweets: [
        {
          content: 'content:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit nibh ut hendrerit laoreet. Donec vestibulum erat sed faucibus tristique',
          date: 1618424659701,
        },
        {
          content: 'content:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit nibh ut hendrerit laoreet. Donec vestibulum erat sed faucibus tristique',
          date: 1618424677545,
        }
      ]
    }
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date())
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

.qweet-content
  white-space: pre-line

.qweet-icons
  margin-left: -5px
</style>
