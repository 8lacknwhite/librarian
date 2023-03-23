<template>
    <div class="center">
        <v-row>
            <v-col cols="10" sm="6" md="4" offset="1" offset-md="4" offset-sm="3">
                <v-avatar size="56">
                    <v-img src="@/assets/stockphoto.jpg"></v-img>
                </v-avatar>
                <v-text-field label="Username"></v-text-field>
                <v-text-field label="Password" type="password"></v-text-field>
                <v-btn block> Login</v-btn>
            </v-col>
        </v-row>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>