<template>
  <div class="content">
    <div class="content__side">
      <v-card outlined class="mt-12">
        <v-card-title>過去の履歴</v-card-title>
        <v-list v-for="item in randomChoiceRes" :key="item.id">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>{{ item.winnerResult }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.createdAt }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
    <div class="content__main">
      <v-container>
        <div class="text-h1 text-center">
          {{ result || '🔮🔮🔮' }}
        </div>
      </v-container>
      <v-container class="d-flex justify-center">
        <v-btn class="mr-7" size="x-large" @click="choseAndCreateResult">
          🍥🍥ランダムに選ぶ🍥🍥
        </v-btn>
        <v-btn size="x-large" @click="reset"> 🍥🍥リセット🍥🍥 </v-btn>
      </v-container>
      <v-divider class="mt-4"></v-divider>
      <v-container class="w-50 mt-12">
        <BaseForm @get-text="addChoice">
          <template v-slot:btnName="slotProps"
            >{{ slotProps.label.default }}
          </template>
        </BaseForm>
      </v-container>
      <v-table density="comfortable" class="ml-7">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">候補</th>
              <th class="text-center">なんか</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in choices" :key="item.meme">
              <td class="text-center">{{ item.text }}</td>
              <td class="text-center">
                <v-img :src="item.meme" sizes="50px"></v-img>
              </td>
            </tr>
          </tbody>
        </template>
      </v-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '@/store/index'

interface Choice {
  text: string
  meme: string
}
const store = useStore()
const randomChoiceRes = computed(() => store.listRandomChoicesRes)

const choices = ref<Choice[]>([])
const result = ref('')
const watchTrigger = ref(0)

const { memes } = useMeme()

const addChoice = (t: string) => {
  const number = Math.floor(Math.random() * memes.memes.length)
  const memeUrl = memes.memes[number].url
  choices.value.push({
    text: t,
    meme: memeUrl,
  })
}

const reset = () => {
  choices.value = []
  result.value = ''
}

const choseAndCreateResult = async () => {
  const number = Math.floor(Math.random() * choices.value.length)
  result.value = choices.value[number].text
  await store.createRandomChoice({
    id: result.value + number * 123,
    winnerResult: result.value,
  })
  watchTrigger.value++
}

watch(watchTrigger, async (watchTrigger, oldValue) => {
  console.log(oldValue)
  await store.getListRandomChoicesRes()
})
</script>

<style scoped lang="scss">
.content {
  display: flex;
  padding: 4rem;
  &__side {
    width: 20%;
  }
  &__main {
    width: 80%;
  }
}
</style>
