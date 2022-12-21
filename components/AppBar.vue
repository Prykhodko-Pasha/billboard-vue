<template>
    <!-- <div class="app_bar"> -->
        <v-app-bar app extended>
            <div class="w-full flex justify-between">
                <Navigation />
                <AuthNav />
            </div>
        </v-app-bar>
        
        <!-- {user ? (
        <UserMenu :name="user.name" />
        ) : (
        <AuthNav />
        )} -->
    <!-- </div> -->
</template>

<!-- <script>
    export default {
        
    }
</script> -->

<!-- <style scoped>
    .app_bar {
        width: 100%;
        height: 48px;
        display: flex;
        justify-content: space-between;
    }
</style> -->