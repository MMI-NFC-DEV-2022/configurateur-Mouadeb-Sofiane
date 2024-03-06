<script setup lang="ts">
import type { ChaussureSvg } from '@/types-svg';
import { ref } from 'vue';
import VueDessus from './VueDessus.vue';
import VueProfil from './VueProfil.vue';

const chaussure = ref<ChaussureSvg>({});
</script>

<template>

  <div class="p-2">
    <ul class="flex gap-1">
      <p>Vue de profil</p>
        <div class="w-72">
            <VueDessus  v-bind="chaussure"/>
        </div>
      <p>Vue du dessus</p>
        <div class="w-20">
            <VueProfil  v-bind="chaussure"/>
        </div>
    </ul>
    <h2>Personnalisation</h2>
        <div class="flex flex-wrap justify-start">
            <FormKit type="form" v-model="chaussure" class="flex flex-wrap justify-start">
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
