<script setup lang="ts">
import BasketProfil from '@/components/BasketProfil.vue';
import BasketDessus from '@/components/BasketDessus.vue';
import { supabase } from "@/supabase";
console.log("supabase :", supabase);

let { data: baskets, error } = await supabase
  .from('basket')
  .select('*')

console.log("baskets :", baskets);

</script>

<template>
<h1>boul</h1>
    <section>
    <h1 class="text-2xl">baskets de Baskets</h1>
    <div class="flex flex-wrap gap-2">
      <div class="w-64">
        <RouterLink
            v-for="basket in baskets"
          :to="{
            name: '/basket/[id]',
            params: { id: basket.id },
          }"
        >
          <BasketProfil class="w-64" v-bind="basket" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>