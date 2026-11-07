<script setup>
defineProps({
  categories: {
    type: Array,
    required: true
  },
  activeCategory: {
    type: String,
    required: true
  },
  filteredCount: {
    type: Number,
    required: true
  },
  showOnlyFavorites: {
    type: Boolean,
    default: false
  },
  getCategoryCount: {
    type: Function,
    required: true
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

defineEmits(['select-category', 'clear-favorites-filter'])

const getCategoryMdiIcon = (id) => {
  const map = {
    all: 'mdi-view-grid-outline',
    cafe: 'mdi-coffee-outline',
    shop: 'mdi-shopping-outline',
    bedroom: 'mdi-bed-outline',
    counter: 'mdi-countertop-outline'
  }
  return map[id] || 'mdi-folder-outline'
}
</script>

<template>
  <v-container class="py-6">
    <div 
      class="d-flex flex-column flex-md-row align-center justify-space-between ga-4 pb-4 border-b"
      style="border-color: rgba(30, 58, 43, 0.4) !important;"
    >
      <!-- Main Category Buttons -->
      <div class="d-flex flex-wrap align-center justify-center justify-md-start ga-2">
        <v-btn
          v-for="cat in categories"
          :key="cat.id"
          @click="$emit('select-category', cat.id)"
          rounded="xl"
          variant="flat"
          size="default"
          :color="activeCategory === cat.id ? 'primary' : 'surface'"
          :class="[
            'text-none font-weight-bold text-caption text-sm-body-2',
            activeCategory === cat.id ? 'text-ikamm-dark' : 'text-muted ikamm-border'
          ]"
          elevation="activeCategory === cat.id ? 4 : 0"
        >
          <template #prepend>
            <v-icon :icon="getCategoryMdiIcon(cat.id)" size="small"></v-icon>
          </template>
          <span>{{ cat.names[currentLang] || cat.names['th'] }}</span>
          <v-chip
            size="x-small"
            class="ml-2 font-weight-bold"
            :color="activeCategory === cat.id ? 'secondary' : 'surface-variant'"
            :text-color="activeCategory === cat.id ? 'accent' : 'muted'"
            label
          >
            {{ getCategoryCount(cat.id) }}
          </v-chip>
        </v-btn>
      </div>

      <!-- Status Filter Info -->
      <div class="text-caption text-muted d-flex align-center ga-2">
        <span>
          {{ t.showingCount }} <strong class="text-white">{{ filteredCount }}</strong> {{ t.conceptsUnit }}
        </span>
        <v-btn
          v-if="showOnlyFavorites"
          variant="text"
          color="primary"
          density="compact"
          class="text-caption text-none pa-0"
          @click="$emit('clear-favorites-filter')"
        >
          {{ t.viewAll }}
        </v-btn>
      </div>
    </div>
  </v-container>
</template>
