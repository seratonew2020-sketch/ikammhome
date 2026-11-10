<script setup>
defineProps({
  project: {
    type: Object,
    default: null
  },
  isSaved: {
    type: Boolean,
    default: false
  },
  hasPrev: {
    type: Boolean,
    default: false
  },
  hasNext: {
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

defineEmits(['close', 'toggle-favorite', 'request-quote', 'prev-project', 'next-project'])
</script>

<template>
  <v-dialog
    :model-value="!!project"
    @update:model-value="!$event && $emit('close')"
    max-width="1060px"
    scrollable
    transition="dialog-transition"
  >
    <v-card 
      v-if="project"
      color="surface"
      rounded="xl"
      class="ikamm-border-accent overflow-hidden position-relative"
      elevation="24"
    >
      <!-- Top Right Controls (Prev / Next / Close) -->
      <div class="position-absolute d-flex align-center ga-1.5" style="top: 14px; right: 14px; z-index: 10;">
        <v-btn
          icon="mdi-chevron-left"
          size="small"
          variant="flat"
          color="surface-variant"
          class="ikamm-border"
          :disabled="!hasPrev"
          title="Previous Concept"
          @click="$emit('prev-project')"
        ></v-btn>
        <v-btn
          icon="mdi-chevron-right"
          size="small"
          variant="flat"
          color="surface-variant"
          class="ikamm-border"
          :disabled="!hasNext"
          title="Next Concept"
          @click="$emit('next-project')"
        ></v-btn>
        <v-btn
          icon="mdi-close"
          size="small"
          variant="flat"
          color="primary"
          class="text-on-primary ml-1"
          @click="$emit('close')"
        ></v-btn>
      </div>

      <v-row no-gutters>
        <!-- Left Image View -->
        <v-col cols="12" md="7" class="position-relative bg-background d-flex align-center justify-center">
          <v-img
            :src="project.imageUrl"
            :alt="project.titles[currentLang]"
            cover
            min-height="360"
            max-height="640"
            class="w-100 h-100"
          >
            <template #placeholder>
              <div class="d-flex align-center justify-center fill-height bg-surface">
                <v-progress-circular indeterminate color="primary" size="36"></v-progress-circular>
              </div>
            </template>
          </v-img>

          <!-- Floating Image Bar -->
          <div 
            class="position-absolute pa-3 rounded-xl d-flex align-center justify-space-between glass-bar ikamm-border"
            style="bottom: 16px; left: 16px; right: 16px;"
          >
            <span class="text-caption text-primary d-flex align-center ga-1.5 font-weight-bold">
              <v-icon icon="mdi-shield-check" size="18"></v-icon>
              {{ t.modalBadge }}
            </span>
            <v-btn
              :variant="isSaved ? 'flat' : 'tonal'"
              color="primary"
              size="small"
              rounded="pill"
              class="text-caption font-weight-bold text-none"
              @click="$emit('toggle-favorite', project.id)"
            >
              <v-icon 
                :icon="isSaved ? 'mdi-bookmark' : 'mdi-bookmark-outline'" 
                class="mr-1"
                size="16"
              ></v-icon>
              {{ isSaved ? t.savedBtn : t.saveBtn }}
            </v-btn>
          </div>
        </v-col>

        <!-- Right Content & Specifications -->
        <v-col cols="12" md="5" class="pa-6 pa-sm-8 d-flex flex-column justify-space-between border-s-md" style="border-color: rgba(255, 255, 255, 0.08) !important;">
          <div>
            <!-- Header Tag & ID -->
            <div class="d-flex align-center justify-space-between mb-3 pr-16">
              <v-chip
                size="small"
                color="primary"
                variant="tonal"
                class="font-weight-bold text-caption text-uppercase"
              >
                {{ project.categoryNames[currentLang] }}
              </v-chip>
              <span class="text-caption text-muted font-weight-medium">#{{ project.id.toUpperCase() }}</span>
            </div>

            <!-- Title -->
            <h2 class="font-serif text-h5 font-weight-bold text-white mb-2" style="line-height: 1.3;">
              {{ project.titles[currentLang] }}
            </h2>

            <!-- Description -->
            <p class="text-body-2 text-muted font-weight-regular mb-5" style="line-height: 1.7;">
              {{ project.descriptions[currentLang] }}
            </p>

            <!-- Specifications Grid Cards -->
            <div class="text-caption text-primary font-weight-bold text-uppercase mb-2.5 d-flex align-center ga-1.5" style="letter-spacing: 0.08em;">
              <v-icon icon="mdi-format-list-checks" size="16"></v-icon>
              {{ t.specsTitle }}
            </div>

            <v-row dense class="mb-5">
              <v-col cols="12">
                <v-sheet color="surface-variant" rounded="lg" class="pa-3 ikamm-border d-flex align-start ga-3">
                  <v-avatar color="primary" variant="tonal" size="32" rounded="lg">
                    <v-icon icon="mdi-sparkles" size="18"></v-icon>
                  </v-avatar>
                  <div>
                    <div class="text-caption text-muted">{{ t.coreFeature }}</div>
                    <div class="text-caption text-white font-weight-bold">{{ project.specs.highlights[currentLang] }}</div>
                  </div>
                </v-sheet>
              </v-col>

              <v-col cols="12">
                <v-sheet color="surface-variant" rounded="lg" class="pa-3 ikamm-border d-flex align-start ga-3">
                  <v-avatar color="primary" variant="tonal" size="32" rounded="lg">
                    <v-icon icon="mdi-layers-triple-outline" size="18"></v-icon>
                  </v-avatar>
                  <div>
                    <div class="text-caption text-muted">{{ t.materials }}</div>
                    <div class="text-caption text-white font-weight-bold">{{ project.specs.materials[currentLang] }}</div>
                  </div>
                </v-sheet>
              </v-col>

              <v-col cols="7">
                <v-sheet color="surface-variant" rounded="lg" class="pa-3 ikamm-border h-100 d-flex align-start ga-2.5">
                  <v-avatar color="primary" variant="tonal" size="30" rounded="lg">
                    <v-icon icon="mdi-lightbulb-on-outline" size="16"></v-icon>
                  </v-avatar>
                  <div>
                    <div class="text-caption text-muted">{{ t.lighting }}</div>
                    <div class="text-caption text-white font-weight-bold">{{ project.specs.lighting[currentLang] }}</div>
                  </div>
                </v-sheet>
              </v-col>

              <v-col cols="5">
                <v-sheet color="surface-variant" rounded="lg" class="pa-3 ikamm-border h-100 d-flex align-start ga-2.5">
                  <v-avatar color="primary" variant="tonal" size="30" rounded="lg">
                    <v-icon icon="mdi-ruler-square" size="16"></v-icon>
                  </v-avatar>
                  <div>
                    <div class="text-caption text-muted">{{ t.estSpace }}</div>
                    <div class="text-caption text-primary font-weight-black">{{ project.specs.areas[currentLang] }}</div>
                  </div>
                </v-sheet>
              </v-col>
            </v-row>

            <!-- Color Palette -->
            <div class="mb-6">
              <div class="text-caption text-muted font-weight-bold text-uppercase mb-2">
                {{ t.colorTone }}
              </div>
              <div class="d-flex flex-wrap ga-2">
                <v-chip
                  v-for="(color, idx) in project.colorPalette"
                  :key="idx"
                  size="small"
                  color="surface-variant"
                  variant="flat"
                  class="ikamm-border text-caption"
                >
                  <span class="color-dot mr-2" :style="{ backgroundColor: color.hex }"></span>
                  <span class="text-on-surface font-weight-medium">{{ color.name }}</span>
                </v-chip>
              </div>
            </div>
          </div>

          <!-- Action CTA -->
          <div class="pt-4 border-t d-flex ga-2" style="border-color: rgba(255, 255, 255, 0.08) !important;">
            <v-btn
              color="primary"
              size="large"
              rounded="xl"
              prepend-icon="mdi-chat-processing-outline"
              class="text-on-primary font-weight-bold text-none elevation-4 text-body-2 flex-grow-1"
              @click="$emit('request-quote', project)"
            >
              {{ t.contactButton }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>
