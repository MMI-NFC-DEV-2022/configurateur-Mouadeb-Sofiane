<script setup lang="ts">
    import { supabase } from "@/supabase";
    import {useRoute} from "vue-router/auto"
    import BasketProfil from "@/components/BasketProfil.vue";
    import BasketDessus from "@/components/BasketDessus.vue";

    const route=useRoute("/basket/[id]")

    let { data: chaussureChargee, error } = await supabase
        .from('basket')
        .select('*')
        .eq('id', route.params.id.toString())
        .single()
        console.log("basket :", chaussureChargee)
        
</script>

<template>
    <BasketProfil v-bind="chaussureChargee" />
    <BasketDessus v-bind="chaussureChargee" />
    <RouterLink :to="{ name: '/basket/edit/[id]', params: { id: chaussureChargee.id } }">Editer</RouterLink>
</template>