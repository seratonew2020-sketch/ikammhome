<script setup>
import LanguageSwitcher from './LanguageSwitcher.vue'

defineProps({
  favoritesCount: {
    type: Number,
    default: 0
  },
  showOnlyFavorites: {
    type: Boolean,
    default: false
  },
  currentLang: {
    type: String,
    default: 'th'
  },
  t: {
    type: Object,
    required: true
  }
})

defineEmits(['reset-filters', 'toggle-favorites', 'change-language', 'open-contact'])
</script>

<template>
  <v-app-bar
    color="#0B130E"
    density="prominent"
    height="96"
    class="border-b"
    style="border-color: rgba(30, 58, 43, 0.5) !important;"
    flat
  >
    <v-container class="max-width-xl d-flex align-center justify-space-between py-2">
      <!-- IKAMM Logo Brand Section -->
      <div 
        class="d-flex align-center cursor-pointer"
        style="cursor: pointer;"
        @click="$emit('reset-filters')"
      >
        <v-sheet
          color="white"
          rounded="xl"
          elevation="4"
          class="px-3 px-sm-4 py-2 d-flex flex-column align-center justify-center ikamm-border-accent"
        >
          <span 
            class="font-serif font-weight-black text-secondary text-body-1 text-sm-h6 tracking-widest text-no-wrap"
            style="letter-spacing: 0.16em !important; line-height: 1;"
          >
            {{ t.brandName }}
          </span>
          <span 
            class="text-uppercase font-weight-bold text-caption text-ikamm-dark border-t mt-1 pt-1 text-no-wrap"
            style="font-size: 8px !important; letter-spacing: 0.28em !important; border-color: rgba(30, 58, 43, 0.25) !important;"
          >
            {{ t.brandSub }}
          </span>
        </v-sheet>
      </div>

      <!-- Quick Info / Language / Actions -->
      <div class="d-flex align-center ga-2 ga-sm-3">
        <!-- Highlights features for wide screen -->
        <div class="d-none d-xl-flex align-center ga-5 text-caption font-weight-medium text-muted mr-2">
          <span class="d-flex align-center ga-1 hover-gold">
            <v-icon icon="mdi-compass-outline" size="small" color="primary"></v-icon>
            {{ t.navFeatures.bespoke }}
          </span>
          <span class="d-flex align-center ga-1 hover-gold">
            <v-icon icon="mdi-cube-outline" size="small" color="primary"></v-icon>
            {{ t.navFeatures.systems }}
          </span>
          <span class="d-flex align-center ga-1 hover-gold">
            <v-icon icon="mdi-shield-crown-outline" size="small" color="primary"></v-icon>
            {{ t.navFeatures.luxury }}
          </span>
        </div>

        <!-- Contact Us Quick Button -->
        <v-btn
          variant="outlined"
          color="primary"
          size="small"
          rounded="lg"
          class="text-none font-weight-bold d-none d-sm-inline-flex px-3"
          @click="$emit('open-contact')"
        >
          <v-icon icon="mdi-phone-in-talk-outline" class="mr-1" size="small"></v-icon>
          {{ t.navContact }}
        </v-btn>

        <!-- Language Selector -->
        <LanguageSwitcher 
          :current-lang="currentLang"
          @change-language="$emit('change-language', $event)"
        />

        <!-- Favorite Button -->
        <v-btn
          icon
          variant="flat"
          color="surface"
          rounded="xl"
          class="ikamm-border text-slate-300"
          :title="t.savedTooltip"
          @click="$emit('toggle-favorites')"
        >
          <v-badge
            v-if="favoritesCount"
            :content="favoritesCount"
            color="primary"
            text-color="background"
            offset-x="-2"
            offset-y="-2"
          >
            <v-icon 
              :icon="favoritesCount > 0 ? 'mdi-bookmark' : 'mdi-bookmark-outline'" 
              :color="favoritesCount > 0 ? 'primary' : 'muted'"
            ></v-icon>
          </v-badge>
          <v-icon 
            v-else 
            icon="mdi-bookmark-outline" 
            color="muted"
          ></v-icon>
        </v-btn>
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
