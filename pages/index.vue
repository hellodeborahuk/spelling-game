<template>
    <div class="mx-auto max-w-screen-sm bg-teal-200 m-6 px-6 lg:px-0 rounded-lg">
        <div class="p-6 space-y-6 text-center">
            <h1>Year 2 Spellings</h1>
            <p>Look Cover Write Check</p>
        <div class="text-6xl">
            <template v-if="!isComplete">
                <span v-if="wordVisible">{{ word }}</span>
                <span v-else class="tracking-wider">{{ hiddenWord }}</span>
            </template>
                <span v-else>Well done!</span>
        </div>
        <form @submit.prevent="nextWord" class="flex justify-between gap-10">
            <input v-model="answer" class="w-full py-3 text-4xl">
            <span v-if="isCorrect">tick</span>
            <button :disabled="!isCorrect" @click="nextWord" type="button">Next</button>
        </form>
    </div>
       
    </div>
</template>

<script setup>  
    import {words} from '../data/words'

    const word = ref('')
    const done = ref([])
    const wordSet = ref([])

    const hiddenWord = computed(() => {
        return '_'.repeat(word.value.length)
    })

    const randomWord = () => {
        const incompleteWords = wordSet.value.filter((w) => {
            return done.value.indexOf(w) === -1
        })
        return incompleteWords[Math.floor(Math.random()*incompleteWords.length)]
    }
    onMounted(() => {
        wordSet.value = words.sort(() => Math.random() - 0.5).slice(0,6)
        word.value = randomWord()
    })

    const answer = ref('')
    
    const isCorrect = computed(() => {
        return answer.value.trim() === word.value
    })

    const wordVisible = computed(() => {
        return answer.value.length === 0 || isCorrect.value
    })

    const nextWord = () => {
        if (!isCorrect.value) {
            return
        }
        done.value.push(answer.value)
        answer.value=''
        if (done.value.length !== wordSet.value.length) {
        word.value = randomWord()
        }
    }
    
    const isComplete = computed(() => {
        return word.value.length > 0 && done.value.length === wordSet.value.length
    })
   
</script>