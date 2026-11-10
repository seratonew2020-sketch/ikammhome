<script setup>
import { useDisplay } from 'vuetify'

defineProps({
  searchQuery: {
    type: String,
    default: ''
  },
  totalProjects: {
    type: Number,
    default: 36
  },
  t: {
    type: Object,
    required: true
  }
})

defineEmits(['update:searchQuery', 'clear-search', 'quick-search'])

const { xs } = useDisplay()

const quickTags = [
  { label: 'Walk-in Closet', icon: 'mdi-wardrobe-outline' },
  { label: 'Marble', icon: 'mdi-texture-box' },
  { label: 'Warm Glow', icon: 'mdi-lightbulb-on-outline' },
  { label: 'Brass', icon: 'mdi-shimmer' }
]
</script>

<template>
  <div class="hero-gradient py-6 py-sm-9 py-md-12">
    <v-container class="px-3 px-sm-4" style="max-width: 1100px;">
      <div class="text-center mx-auto" style="max-width: 820px;">
        <!-- Sub-badge -->
        <v-chip
          variant="outlined"
          color="primary"
          prepend-icon="mdi-star-four-points"
          class="mb-3 mb-sm-4 text-uppercase font-weight-bold px-3 px-sm-4"
          :size="xs ? 'x-small' : 'small'"
          style="letter-spacing: 0.12em; background-color: rgba(197, 160, 89, 0.1);"
        >
          {{ t.heroTag }}
        </v-chip>

        <!-- Main Headline -->
        <h1 class="font-serif text-h5 text-sm-h3 font-weight-bold text-white mb-2.5 mb-sm-3 px-1" style="line-height: 1.25;">
          {{ t.heroTitlePrefix }}
          <span class="gold-text-gradient d-block mt-1">{{ t.heroTitleGold }}</span>
        </h1>

        <!-- Description -->
        <p class="text-muted text-caption text-sm-body-1 mb-5 mb-sm-6 mx-auto font-weight-regular px-2" style="max-width: 660px; line-height: 1.7;">
          {{ t.heroDesc }}
        </p>

        <!-- Search Bar -->
        <div class="mx-auto mb-3.5 mb-sm-4" style="max-width: 640px;">
          <v-text-field
            :model-value="searchQuery"
            @update:model-value="$emit('update:searchQuery', $event)"
            :placeholder="t.searchPlaceholder"
            prepend-inner-icon="mdi-magnify"
            clearable
            variant="solo-filled"
            bg-color="surface"
            color="primary"
            rounded="pill"
            :density="xs ? 'compact' : 'comfortable'"
            hide-details
            class="ikamm-border-accent elevation-8"
            @click:clear="$emit('clear-search')"
          >
            <template #append-inner>
              <v-chip
                v-if="!searchQuery"
                size="x-small"
                color="primary"
                variant="tonal"
                class="font-weight-bold d-none d-sm-inline-flex"
              >
                {{ totalProjects }} {{ t.conceptsUnit }}
              </v-chip>
            </template>
          </v-text-field>
        </div>

        <!-- Quick Search Suggestions -->
        <div class="d-flex flex-wrap align-center justify-center ga-1.5 ga-sm-2">
          <span class="text-caption text-muted mr-1 d-none d-sm-inline">Popular:</span>
          <v-chip
            v-for="tag in quickTags"
            :key="tag.label"
            :size="xs ? 'x-small' : 'small'"
            :variant="searchQuery.toLowerCase() === tag.label.toLowerCase() ? 'flat' : 'tonal'"
            :color="searchQuery.toLowerCase() === tag.label.toLowerCase() ? 'primary' : 'muted'"
            :prepend-icon="tag.icon"
            class="cursor-pointer font-weight-medium text-caption px-2.5"
            @click="$emit('update:searchQuery', searchQuery === tag.label ? '' : tag.label)"
          >
            {{ tag.label }}
          </v-chip>
        </div>
      </div>
    </v-container>
  </div>
</template>
