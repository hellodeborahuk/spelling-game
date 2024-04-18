<template>
    <div class="mx-auto max-w-screen-sm bg-teal-200 px-6 lg:px-0">
        <div class="p-6 space-y-6 text-center">
            <h1>Year 2 Spellings</h1>
            <p>Look Cover Write Check</p>
        <div class="text-6xl">
                <span v-if="wordVisible">{{ word }}</span>
                <span v-else class="tracking-wider">{{ hiddenWord }}</span>
        </div>
        <form @submit.prevent="onSubmit" class="flex justify-between gap-10">
            <input v-model="answer" class="w-full py-3 text-4xl">
            <button type="submit" class="bg-teal-800 text-white px-8 rounded-lg">Check</button>
        </form>
    </div>
       
    </div>
</template>

<script setup>  
    const words = [   
        "after",
        "again",
        "any",
        "bath",
        "beautiful",
        "because"
    ];

    const word = ref('')

    const hiddenWord = computed(() => {
        return '_'.repeat(word.value.length)
    })

    const randomWord = () => {
        return words[Math.floor(Math.random()*words.length)]
    }
    onMounted(() => {
        word.value = randomWord()
    })

    const answer = ref('')
    
    const wordVisible = computed(() => {
        return answer.value.length === 0
    })
    const onSubmit = () => {
        console.log(answer.value)
    }

</script>