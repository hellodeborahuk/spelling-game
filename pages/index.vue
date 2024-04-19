<template>
    <ClientOnly>
        <div class="mx-auto max-w-screen-sm bg-slate-800 text-white min-h-svh md:min-h-min md:mt-6 p-6 lg:px-0 rounded-lg">
            <div class="p-6 text-center">
                <h1 class="text-3xl text-amber-400 font-bold mb-2">Year 2 Spellings</h1>
                <p class="tracking-wide text-2xl font-medium mb-6">Look Cover Write Check</p>
                <div class="text-3xl md:text-6xl border border-pink-400 py-8 rounded-lg mb-6">
                    <template v-if="!isComplete">
                        <span v-if="wordVisible">{{ word }}</span>
                        <span v-else class="tracking-wider">{{ hiddenWord }}</span>
                    </template>
                        <span class="text-amber-400 " v-else><v-icon name="gi-party-popper" class="w-8 h-8 md:w-14 md:h-14 text-pink-400" />Well done!<v-icon name="gi-party-popper" class="w-8 h-8 md:w-14 md:h-14 text-pink-400 scale-x-[-1]" /></span>
                </div>
                <form @submit.prevent="nextWord" class="flex flex-col md:flex-row justify-between gap-4">
                    <input v-model="answer" v-if="!isComplete" class="w-full md:w-2/3 py-3 text-3xl md:text-4xl text-slate-800 rounded-lg px-4" placeholder="type here">
                    <div v-if="!isComplete" class="flex items-center justify-center gap-4">
                        <span v-if="isCorrect"><v-icon name="fa-check" fill="currentColor" class="text-pink-400 w-14 h-14"/></span>
                        <span v-else-if="wrongAnswer"><v-icon name="fa-times" fill="currentColor" class="text-pink-400 w-14 h-14"/></span>
                        <button :disabled="!isCorrect" @click="nextWord" type="button" class="bg-amber-400 rounded-lg px-4 py-2 text-slate-800 text-2xl font-semibold disabled:bg-amber-400/50 hover:bg-pink-400 ease-in duration-150">next</button>
                    </div>
                </form>
                <button @click="playAgain" v-if="isComplete" class="mt-4 md:mt-6 bg-pink-400 rounded-lg px-4 py-2 text-slate-800 text-2xl font-semibold hover:bg-amber-400 ease-in duration-150">play again <v-icon name="md-replay" class="w-6 h-6" /></button>
            </div>
            <span>{{ wordSet }} - {{ done }}</span>
        </div>
    </ClientOnly>
</template>

<script setup>  
    import {randomWords} from '../data/words'

    const word = ref('')
    const done = ref([])
    const wordSet = ref([])
    const wrongAnswer = ref(false)

    const hiddenWord = computed(() => {
        return '_'.repeat(word.value.length)
    })

    const randomWord = () => {
        const incompleteWords = wordSet.value.filter((w) => {
            return done.value.indexOf(w) === -1
        })
        return incompleteWords[0];
    }

    const beginGame = () => {
        wordSet.value = randomWords(6);
        word.value = randomWord()
    }

    const answer = ref('')
    
    const isCorrect = computed(() => {
        return answer.value.trim().toLocaleLowerCase() === word.value
    })

    const wordVisible = computed(() => {
        return answer.value.length === 0 || isCorrect.value
    })

    const nextWord = () => {
        if (!isCorrect.value) {
            wrongAnswer.value = true
            return
        }
        wrongAnswer.value = false
        done.value.push(answer.value)
        answer.value=''
        if (done.value.length !== wordSet.value.length) {
        word.value = randomWord()
        }
    }
    
    const isComplete = computed(() => {
        return word.value.length > 0 && done.value.length === wordSet.value.length
    })

    const playAgain = () => {
        done.value = []
        beginGame()
    }

    onBeforeMount(() => beginGame());
</script>