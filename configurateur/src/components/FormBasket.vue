<script setup lang="ts">
import type { Basket } from "@/types";
import { ref } from "vue";
import { FormKit }  from "@formkit/vue";
import BasketProfil from "./BasketProfil.vue";
import BasketDessus from "./BasketDessus.vue";
import  { colors, materiaux } from "@/types";
import { supabase } from "@/supabase";
import type { Tables } from "@/supabase-types";
import { useRouter } from "vue-router/auto";
import FormKitListColors from "./FormKitListColors.vue";

const router = useRouter();

const props = defineProps<{
  data?: Tables<'basket'>;
  id?: string;
}>();

const chaussure = ref<Tables<'basket'>>(props.data ??{});

if (props.id){
    let { data: chaussureChargee, error } = await supabase
        .from('basket')
        .select('*')
        .eq('id', props.id.toString())
        .single()
        console.log("basket :", chaussureChargee)
        chaussure.value = chaussureChargee ?? {};
}

// @ts-ignore
async function upsertBasket(dataForm, node) {
 const { data, error } = await supabase.from("basket").upsert(dataForm).select();
 if (error) node.setErrors([error.message])
 else {
 node.setErrors([]);
 router.push({ name: "/basket/[id]", params: { id: data[0].id } });
 }
}
</script>

<template>

<div class="p-2">

<ul class="flex gap-1">
    <li><a href="#profil">Profil</a></li>
    <li><a href="#dessus">Dessus</a></li>
</ul>

<div class="carousel w-64">
<BasketProfil class="carousel-item w-64" v-bind="chaussure" id="profil" />
<BasketDessus class="carousel-item w-64" v-bind="chaussure" id="dessus"/>
</div>

<FormKit type="form" v-model="chaussure" @submit="upsertBasket">


<FormKit 

name="materiaux" 
label="Materiaux" 
type="radio" 
:options="materiaux"
:sections-schema="{
    inner: { $el: null },
    decorator: { $el: null },
}"
input-class="peer sr-only"
options-class="flex items-center gap-2"

>
<template #label="context">
    <div
        class="h-24 w-24 rounded-full border-2 peer-checked:border-red-600"
        :style="{ backgroundImage: `url(${context.option.value})` }"
    />
    <span class="sr-only">{{ context.option.value }}</span>
</template>
</FormKit>

    <FormKitListColors name="semelle" label="SEMELLE"/>
    <FormKitListColors name="pointe" label="POINTE" />
    <FormKitListColors name="empeigne" label="EMPEIGNE"/>
    <FormKitListColors name="oeillet" label="OEILLET" />
    <FormKitListColors name="bande" label="BANDE" />
    <FormKitListColors name="languette" label="LANGUETTE" />
    <FormKitListColors name="lacet" label="LACET" />
    <FormKitListColors name="trimestre" label="TRIMESTRE" />
</FormKit>
</div>

</template>