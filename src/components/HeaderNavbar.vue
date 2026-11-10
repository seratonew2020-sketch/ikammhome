<script setup>
import { useDisplay } from 'vuetify'
import LanguageSwitcher from './LanguageSwitcher.vue'

defineProps({
  currentLang: {
    type: String,
    default: 'th'
  },
  t: {
    type: Object,
    required: true
  }
})

defineEmits(['reset-filters', 'change-language', 'open-contact'])

const { xs } = useDisplay()
</script>

<template>
  <v-app-bar
    :height="xs ? 64 : 80"
    class="glass-bar border-b ikamm-border"
    flat
  >
    <v-container class="d-flex align-center justify-space-between py-0 px-3 px-sm-4" style="max-width: 1440px;">
      <!-- IKAMM Logo Brand Section -->
      <div 
        class="d-flex align-center ga-2 ga-sm-3 cursor-pointer flex-shrink-1 overflow-hidden"
        style="min-width: 0;"
        @click="$emit('reset-filters')"
      >
        <v-avatar
          :size="xs ? 40 : 50"
          rounded="lg"
          class="ikamm-border-accent elevation-4 overflow-hidden bg-surface flex-shrink-0"
        >
          <v-img
            src="/logo.jpg"
            alt="IKAMM Logo"
            cover
          ></v-img>
        </v-avatar>
        <div class="d-flex flex-column justify-center overflow-hidden" style="min-width: 0;">
          <span 
            class="font-serif font-weight-black text-white text-subtitle-1 text-sm-h6 text-truncate brand-title-mobile"
            style="letter-spacing: 0.12em; line-height: 1.15;"
          >
            {{ t.brandName }}
          </span>
          <span 
            class="text-uppercase font-weight-bold text-caption text-primary mt-0.5 text-truncate brand-sub-mobile"
            style="font-size: 9px; letter-spacing: 0.2em;"
          >
            {{ t.brandSub }}
          </span>
        </div>
      </div>

      <!-- Quick Info / Language / Actions -->
      <div class="d-flex align-center ga-1.5 ga-sm-3 flex-shrink-0">
        <!-- Highlights features for wide screen -->
        <div class="d-none d-lg-flex align-center ga-2 mr-2">
          <v-chip
            size="small"
            variant="tonal"
            color="primary"
            prepend-icon="mdi-compass-outline"
            class="font-weight-medium text-caption"
          >
            {{ t.navFeatures.bespoke }}
          </v-chip>
          <v-chip
            size="small"
            variant="tonal"
            color="primary"
            prepend-icon="mdi-cube-outline"
            class="font-weight-medium text-caption"
          >
            {{ t.navFeatures.systems }}
          </v-chip>
          <v-chip
            size="small"
            variant="tonal"
            color="primary"
            prepend-icon="mdi-shield-crown-outline"
            class="font-weight-medium text-caption"
          >
            {{ t.navFeatures.luxury }}
          </v-chip>
        </div>

        <!-- Contact Us Quick Button -->
        <v-btn
          variant="flat"
          color="primary"
          size="default"
          rounded="xl"
          prepend-icon="mdi-phone-in-talk-outline"
          class="text-on-primary text-none font-weight-bold d-none d-md-inline-flex px-4 elevation-2"
          @click="$emit('open-contact')"
        >
          {{ t.navContact }}
        </v-btn>

        <!-- Mobile Contact Icon Button -->
        <v-btn
          icon="mdi-phone-in-talk-outline"
          variant="tonal"
          color="primary"
          size="small"
          rounded="xl"
          class="d-md-none"
          :title="t.navContact"
          @click="$emit('open-contact')"
        ></v-btn>

        <!-- Language Selector -->
        <LanguageSwitcher 
          :current-lang="currentLang"
          @change-language="$emit('change-language', $event)"
        />
      </div>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.hover-gold:hover {
  color: #C5A059;
  cursor: pointer;
  transition: color 0.2s;
}
</style>
