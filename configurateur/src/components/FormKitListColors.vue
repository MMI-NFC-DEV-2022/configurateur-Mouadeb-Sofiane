<script setup lang="ts">
    import  { colors, materiaux } from "@/types";

    import { defineProps } from 'vue';

    defineProps<{
        name: string;
        label: string;
    }>()

</script>

<template>
  <FormKit 
        :name="name" 
        :label="label" 
        value="#000000" 
        type="radio" 
        :options="colors"
        :sections-schema="{
            inner: { $el: null },
            decorator: { $el: null },
        }"
        input-class="peer sr-only"
        options-class="flex items-center gap-2"

        >
        <template #label="context">
            <div
                class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                :style="{ backgroundColor: context.option.value }"
            />
            <span class="sr-only">{{ context.option.value }}</span>
        </template>
    </FormKit>
</template>