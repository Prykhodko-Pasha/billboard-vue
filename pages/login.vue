<template>
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-indigo-500">Login page</h2>
            <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
                <div class="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label for="email-address" class="sr-only">Email address</label>
                        <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required
                            class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Email address">
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required
                            class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Password">
                    </div>
                </div>
        
                <div>
                    <button type="submit"
                        class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { setCookies } from "~~/helpers/cookies";
import { loginUserAPI } from "~~/services/users-api";

const email = ref("");
const password = ref("");

const handleSubmit = async () => {
    // e.preventDefault();
    // if (error) return;
    try {
        const credentials = { email: email.value, password: password.value };
        console.log('credentials :>> ', credentials);
        const user = await loginUserAPI(credentials);
        console.log('user :>> ', user);
        if (user) {
            // await setUser(user);
            useState("user").value = user;

            setCookies(user.token);

            // Router.push("/profile");
            useRouter().push("/profile");
        }
    } catch (error) {
        console.error(error);
    }
};
</script>

<style scoped>

</style>