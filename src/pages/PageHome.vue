<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
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
          @click="addNewQweet"
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
        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow"
         >
           <q-item
          v-for="qweet in qweets"
          :key="qweet.date"
          class="qweet q-py-md">
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
              <br class="lt-md">&bull; {{qweet.date  | relativeDate}}
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
                @click="deleteQweet(qweet)"
                flat
                round color="grey"
                icon="fas fa-trash"
                size="sm"
              />
            </div>
          </q-item-section>
        </q-item>
        </transition-group>
    </q-list>

    </q-scroll-area>
  </q-page>

</template>

<script>
import db from 'src/boot/firebase'
import { formatDistance } from 'date-fns'
export default {
  name: 'PageHome',
  data() {
    return {
      newQweetContent: '',
      qweets: [
        // {
        //   content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit nibh ut hendrerit laoreet. Donec vestibulum erat sed faucibus tristique',
        //   date: 1618424659701,
        // },
        // {
        //   content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit nibh ut hendrerit laoreet. Donec vestibulum erat sed faucibus tristique',
        //   date: 1618424677545,
        // },
      ]
    }
  },
  methods: {
    addNewQweet() {
      let newQweet = {
        content: this.newQweetContent,
        date: Date.now()
      }
      // this.qweets.unshift(newQweet)
      db.collection('qweets').add(newQweet).then((docRef) => {
          console.log('Document written with ID: ', docRef.id)
        }).catch((error) => {
          console.error('Error adding document: ', error)
        })
      this.newQweetContent = ''
    },
    deleteQweet(qweet) {
      let dateToDelete = qweet.date
      let index = this.qweets.findIndex(qweet => qweet.date === dateToDelete)
      this.qweets.splice(index, 1)
    }
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date())
    }
  },
  mounted() {
    db.collection('qweets').orderBy('date').onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          let qweetChange = change.doc.data()
          if (change.type === 'added') {
            console.log('New qweet: ', qweetChange)
            this.qweets.unshift(qweetChange)
          }
          if (change.type === 'modified') {
            console.log('Modified qweet: ', qweetChange)
          }
          if (change.type === 'removed') {
            console.log('Removed qweet: ', qweetChange)
          }
        });
      });
  },
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

.qweet:not(:first-child)
  border-top: 1px solid rgba(0, 0, 0, 0.12)
</style>
