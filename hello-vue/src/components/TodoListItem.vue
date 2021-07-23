<template>
    <!-- <li>
        {{ todo.text }}
        <button @click="$emit('remove', todo.id)">X</button>
    </li> -->
    <div>
        <div class="container border-2 mb-2 pl-4" :class="bgColor">
    
        <div class="flex items-stretch py-2">
            <div class="flex-auto font-bold text-lg w-full break-words" :class="additionalClass">{{ todo.text }}</div>
        </div>
        <div class="w-full flex justify-end">
            <div><span> {{ date }}</span></div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="onClickCheckButton">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="flex-end mr-2 h-6 w-6 inline" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" @click="$emit('remove', todo.id)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
        
        </div>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true,
        },
        bgColor: String,
    },
    data() {
        return {
            additionalClass: '',
            date: '',
        }
    },
    methods: {
        onClickCheckButton() {
            this.additionalClass += ' line-through';

            let date = new Date();

            this.date = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate();
        }
    },
}
</script>