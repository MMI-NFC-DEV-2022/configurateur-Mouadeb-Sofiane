<script setup lang="ts">
import VueProfil from '@/components/VueProfil.vue';
import VueDessus from '@/components/VueDessus.vue';
// import { supabase } from "../supabase";
// console.log("supabase :", supabase);

// import type { Basket } from "../types";
// let { data: exemples, error } = await supabase
//   .from('basket')
//   .select('*')

import BasketProfil from "../components/BasketProfil.vue";
import type { Basket } from "../types";
const exemples: Basket[] = [{
  semelle: "#FF0000",
  empeigne: "#FFFFFF",
  pointe: "#FFFFFF",
  oeillet: "#FFFFFF",
  bande: "#00FF00",
  languette: "#FFFFFF",
  lacet: "#00FF00",
  trimestre: "#FFFFFF",
},
{
  semelle: "#000000",
  empeigne: "#FFFFFF",
  pointe: "#FFFFFF",
  oeillet: "#FFFFFF",
  bande: "#FFFFFF",
  languette: "#FFFFFF",
  lacet: "#00FF00",
  trimestre: "#FFFFFF",
},

{
    semelle: "#000000",
    empeigne: "#FFFFFF",
    pointe: "#FFFFFF",
    oeillet: "#FFFFFF",
    bande: "#00FF00",
    languette: "#FFFFFF",
    lacet: "#00FF00",
    trimestre: "#FFFFFF",
},
{
    semelle: "#FF0003",
    empeigne: "#FFFFFF",
    pointe: "#FFFFFF",
    oeillet: "#FFFFFF",
    bande: "#00FF00",
    languette: "#FFFFFF",
    lacet: "#00FF00",
    trimestre: "#000000",
}
];
</script>

<template>
    <h1>Bonjour</h1>
        <p>Chaussures :</p>
            <p>Vue de profil:</p>
                <div class="w-5">
                    <VueProfil />
                </div>
            <p>Vue du dessus:</p>
                <div class="w-80">
                    <VueDessus />
                </div>


    <section>
    <h1 class="text-2xl">Exemples de Baskets</h1>
    <div class="flex flex-wrap gap-2">
      <div class="w-64">
        <RouterLink
            v-for="exemple in exemples"
          :to="{
            name: '/basket/exemple/[data]',
            params: { data: JSON.stringify(exemple) },
          }"
        >
          <BasketProfil class="w-64" v-bind="exemple" />
        </RouterLink>
        <!-- <RouterLink
          :to="{
            name: '/basket/exemple/[data]',
            params: { data: JSON.stringify(exemples[1]) },
          }"
        >
          <BasketProfil class="w-64" v-bind="exemples[1]" />
        </RouterLink> -->
      </div>
    </div>
  </section>
</template>