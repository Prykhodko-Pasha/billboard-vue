<!-- <script>
import LanguageSwitch from "../components/languageSwitch.vue"
import AppBar from "../components/appBar.vue"
</script> -->

<template>
    <!-- <div className={styles.container}> -->
    <!-- <div class="container"> -->
    <v-app>
        <AppBar />
            <v-container class="h-full">
                <!-- <Head>
                    <title>Billboard</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head> -->
                <!-- <LanguageSwitch /> -->
                <!-- <main class="main"> -->
                <v-main  class="h-full">
                    <slot/>
                </v-main>
                <!-- </main> -->
            </v-container>
    </v-app>
    <!-- </div> -->
</template>

<!-- <style scoped>
    .container {
        padding: 1rem 2rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .main {
        padding: 4rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style> -->