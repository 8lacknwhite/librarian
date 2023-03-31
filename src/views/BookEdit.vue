<template>
    <div>
        <v-form>
            <v-text-field label ="code" v-model="book._id"></v-text-field>
            <v-text-field label ="title" v-model="book.title"></v-text-field>
            <v-text-field label ="description" v-model="book.description"></v-text-field>
        </v-form>
    </div>
</template>

<script>
import bookslist from '@/data/books.json'
    export default {
        data() {
            return {
                id: 0,
                book:{
                    id:0,
                    title:"",
                    description:"",
                }
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.id= this.$route.params.id
                if (this.id !=0) {
                    this.book= bookslist.find(rec => rec._id == this.id)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>