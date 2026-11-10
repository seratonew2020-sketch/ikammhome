<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const props = defineProps({
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
  gridCols: {
    type: Number,
    default: 4
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

defineEmits(['select-category', 'update:gridCols'])

const { xs } = useDisplay()

const currentCategoryObj = computed(() => {
  return props.categories.find(c => c.id === props.activeCategory) || props.categories[0]
})

const getCategoryMdiIcon = (cat) => {
  if (cat.icon && cat.icon.startsWith('mdi-')) return cat.icon
  const map = {
    all: 'mdi-view-grid-outline',
    cafe: 'mdi-coffee-outline',
    shop: 'mdi-storefront-outline',
    restaurant: 'mdi-silverware-fork-knife',
    office: 'mdi-domain',
    clinic: 'mdi-medical-bag',
    salon: 'mdi-content-cut',
    'home-office': 'mdi-desk',
    foyer: 'mdi-shoe-heel',
    'home-theater': 'mdi-theater',
    laundry: 'mdi-washing-machine',
    bedroom: 'mdi-bed-king-outline',
    counter: 'mdi-countertop-outline'
  }
  return map[cat.id] || 'mdi-folder-outline'
}
</script>

<template>
  <div>
    <!-- Sticky Filter Bar -->
    <div class="sticky-filter-bar py-2 py-sm-3">
      <v-container class="py-0 px-3 px-sm-4" style="max-width: 1440px;">
        <div class="d-flex flex-column flex-md-row align-center justify-space-between ga-2 ga-md-3">
          <!-- Main Category Slide Group / Buttons -->
          <v-slide-group
            :model-value="activeCategory"
            show-arrows="desktop"
            center-active
            class="w-100 flex-grow-1 overflow-hidden"
          >
            <v-slide-group-item
              v-for="cat in categories"
              :key="cat.id"
              :value="cat.id"
            >
              <v-btn
                @click="$emit('select-category', cat.id)"
                rounded="pill"
                :variant="activeCategory === cat.id ? 'flat' : 'tonal'"
                :size="xs ? 'small' : 'default'"
                :color="activeCategory === cat.id ? 'primary' : 'surface-variant'"
                :class="[
                  'text-none font-weight-bold text-caption text-sm-body-2 mr-1.5 mr-sm-2 px-3 px-sm-4',
                  activeCategory === cat.id ? 'text-on-primary' : 'text-on-surface ikamm-border'
                ]"
                :elevation="activeCategory === cat.id ? 4 : 0"
              >
                <template #prepend>
                  <v-icon :icon="getCategoryMdiIcon(cat)" :size="xs ? 16 : 18"></v-icon>
                </template>
                <span>{{ cat.names[currentLang] || cat.names['th'] }}</span>
                <v-chip
                  size="x-small"
                  class="ml-1.5 ml-sm-2 font-weight-black"
                  :color="activeCategory === cat.id ? 'secondary' : 'background'"
                  :text-color="activeCategory === cat.id ? 'accent' : 'muted'"
                  variant="flat"
                >
                  {{ getCategoryCount(cat.id) }}
                </v-chip>
              </v-btn>
            </v-slide-group-item>
          </v-slide-group>

          <!-- Status Filter Info & Grid View Switcher -->
          <div class="d-flex align-center justify-space-between justify-md-end w-100 w-md-auto ga-3 flex-shrink-0 px-1 px-md-0">
            <div class="text-caption text-muted d-flex align-center ga-2 text-no-wrap">
              <span>
                {{ t.showingCount }} <strong class="text-primary text-body-2 font-weight-black">{{ filteredCount }}</strong> {{ t.conceptsUnit }}
              </span>
            </div>

            <!-- Grid Density Toggle (Desktop) -->
            <v-btn-toggle
              :model-value="gridCols"
              @update:model-value="$emit('update:gridCols', $event)"
              mandatory
              density="compact"
              rounded="lg"
              variant="tonal"
              color="primary"
              class="d-none d-lg-inline-flex ikamm-border"
            >
              <v-btn :value="6" icon="mdi-view-grid-outline" size="small" title="2 Columns (Large View)"></v-btn>
              <v-btn :value="4" icon="mdi-grid" size="small" title="3 Columns (Standard View)"></v-btn>
              <v-btn :value="3" icon="mdi-apps" size="small" title="4 Columns (Compact View)"></v-btn>
            </v-btn-toggle>
          </div>
        </div>
      </v-container>
    </div>

    <!-- Category Highlight Banner (Shows the detailed scope of the selected built-in category) -->
    <v-container class="pt-3 pt-sm-4 pb-2 px-3 px-sm-4" style="max-width: 1440px;">
      <v-sheet
        v-if="currentCategoryObj && currentCategoryObj.descriptions"
        color="surface"
        rounded="xl"
        class="pa-3.5 pa-sm-5 ikamm-border-accent d-flex flex-column flex-sm-row align-start align-sm-center justify-space-between ga-3 ga-sm-4"
      >
        <div class="d-flex align-start align-sm-center ga-3">
          <v-avatar
            color="primary"
            variant="tonal"
            :size="xs ? 40 : 48"
            rounded="lg"
            class="flex-shrink-0 ikamm-border-accent"
          >
            <v-icon :icon="getCategoryMdiIcon(currentCategoryObj)" :size="xs ? 20 : 24" color="primary"></v-icon>
          </v-avatar>
          <div style="min-width: 0;">
            <div class="d-flex align-center ga-2 flex-wrap mb-1">
              <h2 class="font-serif text-body-1 text-sm-h6 font-weight-bold text-white" style="line-height: 1.3;">
                {{ currentCategoryObj.names[currentLang] || currentCategoryObj.names['th'] }}
              </h2>
              <v-chip size="x-small" color="primary" variant="flat" class="text-on-primary font-weight-bold">
                {{ getCategoryCount(currentCategoryObj.id) }} {{ t.conceptsUnit }}
              </v-chip>
            </div>
            <p class="text-caption text-sm-body-2 text-muted mb-0" style="line-height: 1.65;">
              {{ currentCategoryObj.descriptions[currentLang] || currentCategoryObj.descriptions['th'] }}
            </p>
          </div>
        </div>

        <v-btn
          v-if="activeCategory !== 'all'"
          variant="tonal"
          color="primary"
          size="small"
          rounded="pill"
          prepend-icon="mdi-apps"
          class="text-none font-weight-bold flex-shrink-0 align-self-end align-self-sm-center"
          @click="$emit('select-category', 'all')"
        >
          {{ t.viewAll }}
        </v-btn>
      </v-sheet>
    </v-container>
  </div>
</template>
