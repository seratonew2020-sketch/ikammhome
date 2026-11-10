<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { languages } from '../i18n/translations.js'

const props = defineProps({
  currentLang: {
    type: String,
    default: 'th'
  }
})

defineEmits(['change-language'])

const { xs } = useDisplay()

const currentLangObj = computed(() => {
  return languages.find(l => l.code === props.currentLang) || languages[0]
})
</script>

<template>
  <!-- Mobile: Compact & Easy-to-Tap Language Selector Menu (Fits inside screen on all phones) -->
  <div v-if="xs" class="d-inline-flex align-center">
    <v-menu location="bottom end" offset="8">
      <template #activator="{ props: menuProps }">
        <v-btn
          v-bind="menuProps"
          color="surface-variant"
          variant="flat"
          rounded="pill"
          size="small"
          class="ikamm-border-accent px-2.5 text-none font-weight-bold elevation-2"
          style="height: 36px; min-width: 72px;"
        >
          <span class="mr-1" style="font-size: 14px; line-height: 1;">{{ currentLangObj.flag }}</span>
          <span class="text-caption font-weight-black text-primary">{{ currentLangObj.short }}</span>
          <v-icon icon="mdi-chevron-down" size="16" color="primary" class="ml-0.5"></v-icon>
        </v-btn>
      </template>

      <v-list
        bg-color="surface"
        rounded="xl"
        elevation="12"
        density="compact"
        class="pa-1.5 ikamm-border-accent"
        style="min-width: 150px;"
      >
        <v-list-item
          v-for="lang in languages"
          :key="lang.code"
          :active="currentLang === lang.code"
          color="primary"
          rounded="lg"
          class="mb-0.5"
          @click="$emit('change-language', lang.code)"
        >
          <template #prepend>
            <span class="mr-2.5" style="font-size: 16px;">{{ lang.flag }}</span>
          </template>
          <v-list-item-title
            class="text-caption font-weight-bold"
            :class="currentLang === lang.code ? 'text-primary' : 'text-white'"
          >
            {{ lang.label }} ({{ lang.short }})
          </v-list-item-title>
          <template #append v-if="currentLang === lang.code">
            <v-icon icon="mdi-check-circle" size="16" color="primary"></v-icon>
          </template>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>

  <!-- Tablet & Desktop: Full Segmented Pill Toggle -->
  <v-sheet v-else color="background" rounded="lg" class="d-inline-flex align-center pa-1 ikamm-border">
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
        class="text-none px-3"
      >
        <span class="mr-1.5 text-caption">{{ lang.flag }}</span>
        <span class="text-caption font-weight-medium">{{ lang.label }}</span>
      </v-btn>
    </v-btn-toggle>
  </v-sheet>
</template>
