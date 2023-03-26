<template>
    <div>
        <v-row>
            <v-col cols="10" sm="8" md="8" offset="1" offset-md="2" offset-sm="2">
                <v-list dense>
                    <v-list-item v-for="item in books" :key="item._id">
                        <v-list-item-avatar rounded>
                            <v-img :src="item.img"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>

                            <v-list-item-subtitle>{{ item.author.name }}</v-list-item-subtitle>
                            <v-list-item-subtitle>{{ item.pages }}</v-list-item-subtitle>
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
                                    <v-list-item>
                                        <v-list-item-title><v-btn text>Issue</v-btn></v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-title><v-btn text>Return</v-btn></v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <div>
                                <p>Status</p>
                            </div>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import booksList from '@/data/books.json'
export default {
    data() {
        return {
            books: booksList,
        };
    },
}
</script>

<style lang="scss" scoped></style>