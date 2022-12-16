<template>
    <nav class="nav">
        <NuxtLink to="/" class="router-link">
           <!-- {t("billboard")} -->
            Billboard
        </NuxtLink>
        <!-- {isLog && ( -->
        <NuxtLink to="/profile" class="router-link">
           <!-- {t("profile")} -->
            Profile
        </NuxtLink>
        <!-- )} -->
    </nav>
</template>

<script>
    
</script>

<style scoped>
    .nav {
        display: flex;
        align-items: center;
    }
    .router-link,
    .router-link-active {
        position: relative;
        display: block;
        padding: 12px 16px;
        margin: 0 2px;
        color: #ccc;
        text-decoration: none;
        /* text-transform: uppercase; */
        transition: 0.5s;
        line-height: 1;
    }

    .router-link::after,
    .router-link-active::after {
        position: absolute;
        content: '';
        top: 100%;
        left: 0;
        width: 100%;
        height: 3px;
        background: #3498db;
    }

    .router-link::after {
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.5s;
    }

    .router-link:hover,
    .router-link:focus {
        color: #ccc;
    }

    .router-link:hover::after,
    .router-link:focus::after {
        transform: scaleX(1);
        transform-origin: left;
    }

    .router-link-active {
        /* color: #212121; */
        font-weight: 500;
        transform: scaleX(1);
    }
</style>