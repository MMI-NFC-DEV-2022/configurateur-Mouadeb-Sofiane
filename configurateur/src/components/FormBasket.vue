<script setup lang="ts">
import type { Basket } from '@/types';
import { ref } from 'vue';
import BasketDessus from './BasketDessus.vue';
import BasketProfil from './BasketProfil.vue';
const props = defineProps<{
  data?: Basket;
  id?: string;
}>();

const basket = ref<Basket>(props.data ?? {});


</script>

<template>

  <div class="p-2">
    <ul class="flex gap-1">
      <p>Vue de profil</p>
        <div class="w-72">
            <BasketDessus  v-bind="basket"/>
        </div>
      <p>Vue du dessus</p>
        <div class="w-20">
            <BasketProfil  v-bind="basket"/>
        </div>
    </ul>
    <h2>Personnalisation</h2>
        <div class="flex flex-wrap justify-start">
            <FormKit type="form" v-model="basket" class="flex flex-wrap justify-start">
                <FormKit name="semelle" label="semelle" value="#FFFFFF" type="color" class="w-full md:w-1/2 lg:w-1/4" />
                <FormKit name="empeigne" label="empeigne" value="#FFFFFF" type="color" class="w-full md:w-1/2 lg:w-1/4" />
                <FormKit name="pointe" label="pointe" value="#FFFFFF" type="color" class="w-full md:w-1/2 lg:w-1/4" />
                <FormKit name="lacet" label="lacet" value="#FFFFFF" type="color" class="w-full md:w-1/2 lg:w-1/4" />
                <FormKit name="oeillet" label="oeillet" value="#FFFFFF" type="color" class="w-full md:w-1/2 lg:w-1/4" />
                <FormKit name="trimestre" label="trimestre" value="#FFFFFF" type="color" class="w-full md:w-1/2 lg:w-1/4" />
                <FormKit name="bande" label="bande" value="#FFFFFF" type="color" class="w-full md:w-1/2 lg:w-1/4" />
                <FormKit name="languette" label="languette" value="#FFFFFF" type="color" class="w-full md:w-1/2 lg:w-1/4" />
            </FormKit>
        </div>
  </div>
</template>
