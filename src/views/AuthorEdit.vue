<template>
    <div>
        <v-form>
            <v-text-field label = "code" v-model="author._id"></v-text-field>
            <v-text-field label = "name" v-model="author.name"></v-text-field>
        </v-form>
    </div>
</template>

<script>
import authorlist from '@/data/authors.json'
    export default {
        data() {
            return {
                id: 0,
                author:{
                    id:0,
                    title:"",
                }
            }
        },
        mounted(){
            this.init();
        },
        methods: {
            init(){
                this.id= this.$route.params.id
                if (this.id != 0){
                    this.author= authorlist.find(rec => rec._id == this.id)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>