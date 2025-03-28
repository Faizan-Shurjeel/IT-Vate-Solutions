<template>
    <DefaultLayout>
        <section class="container">
            <h1>Our Services</h1>
            <CoreServices />
        </section>
    </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import CoreServices from '@/components/CoreServices.vue';

export default {
    components: {
        DefaultLayout,
        CoreServices
    }
};
</script>