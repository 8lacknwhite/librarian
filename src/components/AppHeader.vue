<template>
    <div class="app-header">
        <v-row>
            <v-col cols="10">{{ title }}</v-col>
            <v-col cols="2" class="text-right">
                <v-btn text @click="$emit('add')">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
             </v-col>
        </v-row>
        <v-row>
            <v-col><v-text-field solo label="Search" append-icon="mdi-magnify" @input="$emit('search', $event)"></v-text-field></v-col>
        </v-row>
    </div>
</template>

<script>

export default {
    props: {
        title: {
            type: String,
            default: () => ''
        },

    }

}
</script>

<style scoped>
.app-header {
    padding: 1rem
}
</style>