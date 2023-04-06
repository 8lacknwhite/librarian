<template>
    <div>
        <app-header @add=" $router.push('/authors/0')" title="Authors" @search=" searchInAuthors($event)"></app-header>
        <v-row>
            <v-col cols="10" sm="8" md="8" offset="1" offset-md="2" offset-sm="2">
                <template>
                    <v-list dense>
                        <v-list-item v-for="item in authors" :key="item._id">
                            <v-list-item-content>
                                <v-list-item-title>{{ item.name }}</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-icon>
                                <v-menu offset-y>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn text v-bind="attrs" v-on="on">
                                            <v-icon>mdi-dots-vertical</v-icon>
                                        </v-btn>
                                    </template>
                                    <v-list>
                                        <v-list-item>
                                            <v-list-item-title><v-btn text>Edit</v-btn></v-list-item-title>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-title><v-btn text>Delete</v-btn></v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-list-item-icon>

                        </v-list-item>
                    </v-list>
                </template>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import authorList from '@/data/authors.json'
import AppHeader from '@/components/AppHeader.vue'
export default {
    components: {
        AppHeader,
    },
    data() {
        return {
            authors: authorList,
        };
    },
    methods: {
        searchInAuthors(searchText){
            if(searchText){
                this.authors = authorlist.filter(rec => rec.title.toLowerCase().includes(searchText.toLowerCase()))
            }
        }
    }

}
</script>

<style lang="scss" scoped></style>