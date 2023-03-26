<template>
    <div>
        <v-row>
            <v-col cols="10" sm="8" md="8" offset="1" offset-md="2" offset-sm="2">
                <v-list three-line>
                    <template>
                        <v-list-item v-for="item in issues" :key="item._id">
                            <v-list-item-avatar>
                                <v-list-item-title>{{ item.returnDate }}</v-list-item-title>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>{{ item.book.title }}</v-list-item-title>
                                <v-list-item-subtitle>{{ item.member.name }}</v-list-item-subtitle>
                                <v-list-item-subtitle>{{ item.issueDate }}</v-list-item-subtitle>
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
                                            <v-list-item-title><v-btn text>Return</v-btn></v-list-item-title>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-title><v-btn text>Notify</v-btn></v-list-item-title>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-title><v-btn text>Approve</v-btn></v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-list-item-icon>
                        </v-list-item>
                    </template>
                </v-list>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import issueList from '@/data/issues.json'
export default {
    data() {
        return {
            issues: issueList,
        };
    },

}
</script>

<style lang="scss" scoped></style>