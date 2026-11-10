<script setup>
import { languages } from '../i18n/translations.js'

defineProps({
  currentLang: {
    type: String,
    default: 'th'
  }
})

defineEmits(['change-language'])
</script>

<template>
  <v-sheet color="background" rounded="lg" class="d-inline-flex align-center pa-1 ikamm-border">
    <v-btn-toggle
      :model-value="currentLang"
      mandatory
      variant="flat"
      density="compact"
      rounded="lg"
      class="bg-transparent"
    >
      <v-btn
        v-for="lang in languages"
        :key="lang.code"
        :value="lang.code"
        @click="$emit('change-language', lang.code)"
        size="small"
        :color="currentLang === lang.code ? 'primary' : 'transparent'"
        :class="currentLang === lang.code ? 'text-on-primary font-weight-bold elevation-2' : 'text-muted'"
        class="text-none px-2 px-sm-3"
      >
        <span class="mr-1 text-caption">{{ lang.flag }}</span>
        <span class="d-none d-sm-inline text-caption font-weight-medium">{{ lang.label }}</span>
        <span class="d-sm-none text-caption font-weight-bold">{{ lang.short }}</span>
      </v-btn>
    </v-btn-toggle>
  </v-sheet>
</template>
