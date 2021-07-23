<template>
    <div class="my-8">
        <div class="pb-6 md:pb-0 flex flex-col items-center">
            <div>
                <label class="input-field inline-flex border-none shadow-md bg-white p-4">
                    <!-- <span class="flex-none text-dusty-blue-darker select-none leading-none">domain.com/</span> -->
                    <div class="flex-1 leading-none">
                        <input id="handle" type="text" class="placeholder-blue w-96 p-0 no-outline text-dusty-blue-darker" v-on="listeners" name="handle" placeholder="add a new todo" @keydown.enter="clearInput">
                    </div>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: '',
        }
    },
    computed: {
        listeners() {
            return {
                // 자식에게서 부모에게 전달되는 모든 이벤트들
                ...this.$listeners,
                // input 이벤트만 재정의
                input: event => this.$emit('input', event.target.value),
            }
        }
    },
    methods: {
        clearInput() {
            document.getElementById("handle").value = "";
            this.$emit('addTodo');
        }
    },
}
</script>

<style scoped>
.input {
    width: 100%;
    padding: 8px, 19px;
    border: 1px solid #32485F;
}
</style>