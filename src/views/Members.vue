<template>
    <div>
        <v-row>
            <v-col cols="10" sm="8" md="8" offset="1" offset-md="2" offset-sm="2">
                <v-list dense>
                    <v-list-item v-for="item in members" :key="item._id">
                        <v-list-item-avatar rounded>
                            <v-img :src="item.img"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.firstName }} {{ item.middleName }} {{ item.lastName
                            }}</v-list-item-title>
                            <v-list-item-subtitle>{{ item.mobileNo }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import memberList from '@/data/members.json'
export default {
    data() {
        return {
            members: memberList,
        };
    },

}
</script>

<style lang="scss" scoped></style>