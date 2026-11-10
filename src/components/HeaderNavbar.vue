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
    height="80"
    class="glass-bar border-b ikamm-border"
    flat
  >
    <v-container class="d-flex align-center justify-space-between py-0" style="max-width: 1440px;">
      <!-- IKAMM Logo Brand Section -->
      <div 
        class="d-flex align-center ga-3 cursor-pointer"
        @click="$emit('reset-filters')"
      >
        <v-avatar
          size="50"
          rounded="lg"
          class="ikamm-border-accent elevation-4 overflow-hidden bg-surface"
        >
          <v-img
            src="/logo.jpg"
            alt="IKAMM Logo"
            cover
          ></v-img>
        </v-avatar>
        <div class="d-flex flex-column justify-center">
          <span 
            class="font-serif font-weight-black text-white text-subtitle-1 text-sm-h6 text-no-wrap"
            style="letter-spacing: 0.12em !important; line-height: 1.15;"
          >
            {{ t.brandName }}
          </span>
          <span 
            class="text-uppercase font-weight-bold text-caption text-primary mt-0.5 text-no-wrap"
            style="font-size: 9px !important; letter-spacing: 0.2em !important;"
          >
            {{ t.brandSub }}
          </span>
        </div>
      </div>

      <!-- Quick Info / Language / Actions -->
      <div class="d-flex align-center ga-2 ga-sm-3">
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

        <!-- Favorite Button -->
        <v-btn
          :variant="showOnlyFavorites ? 'flat' : 'tonal'"
          :color="showOnlyFavorites ? 'primary' : 'surface-variant'"
          rounded="xl"
          size="default"
          class="ikamm-border text-none font-weight-bold px-3"
          :title="t.savedTooltip"
          @click="$emit('toggle-favorites')"
        >
          <v-icon 
            :icon="favoritesCount > 0 ? 'mdi-bookmark' : 'mdi-bookmark-outline'" 
            :color="showOnlyFavorites ? 'on-primary' : (favoritesCount > 0 ? 'primary' : 'muted')"
            size="20"
          ></v-icon>
          <span 
            v-if="favoritesCount > 0" 
            class="ml-1.5 text-caption font-weight-black"
            :class="showOnlyFavorites ? 'text-on-primary' : 'text-primary'"
          >
            {{ favoritesCount }}
          </span>
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
