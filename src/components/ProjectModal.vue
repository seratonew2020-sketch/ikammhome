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
  currentLang: {
    type: String,
    default: 'th'
  },
  t: {
    type: Object,
    required: true
  }
})

defineEmits(['close', 'toggle-favorite', 'request-quote'])
</script>

<template>
  <v-dialog
    :model-value="!!project"
    @update:model-value="!$event && $emit('close')"
    max-width="1000px"
    scrollable
    transition="dialog-transition"
  >
    <v-card 
      v-if="project"
      color="surface"
      rounded="xl"
      class="ikamm-border overflow-hidden position-relative"
      elevation="24"
    >
      <!-- Close Button -->
      <v-btn
        icon="mdi-close"
        size="small"
        variant="flat"
        color="surface-variant"
        class="position-absolute ikamm-border"
        style="top: 16px; right: 16px; z-index: 10;"
        @click="$emit('close')"
      ></v-btn>

      <v-row no-gutters>
        <!-- Left Image View -->
        <v-col cols="12" md="7" class="position-relative bg-black d-flex align-center justify-center">
          <v-img
            :src="project.imageUrl"
            :alt="project.titles[currentLang]"
            cover
            max-height="600"
            class="w-100 h-100"
          ></v-img>

          <!-- Floating Image Bar -->
          <div 
            class="position-absolute pa-3 rounded-lg d-flex align-center justify-space-between ikamm-border"
            style="bottom: 16px; left: 16px; right: 16px; background-color: rgba(11, 19, 14, 0.9); backdrop-filter: blur(8px);"
          >
            <span class="text-caption text-primary d-flex align-center ga-1 font-weight-medium">
              <v-icon icon="mdi-shield-check-outline" size="small"></v-icon>
              {{ t.modalBadge }}
            </span>
            <v-btn
              variant="text"
              color="primary"
              density="compact"
              size="small"
              class="text-caption font-weight-bold text-none"
              @click="$emit('toggle-favorite', project.id)"
            >
              <v-icon 
                :icon="isSaved ? 'mdi-bookmark' : 'mdi-bookmark-outline'" 
                class="mr-1"
              ></v-icon>
              {{ isSaved ? t.savedBtn : t.saveBtn }}
            </v-btn>
          </div>
        </v-col>

        <!-- Right Content & Specifications -->
        <v-col cols="12" md="5" class="pa-6 pa-sm-8 d-flex flex-column justify-space-between border-s-md" style="border-color: rgba(30, 58, 43, 0.4) !important;">
          <div>
            <!-- Header Tag & ID -->
            <div class="d-flex align-center justify-space-between mb-3">
              <v-chip
                size="small"
                color="primary"
                variant="outlined"
                class="font-weight-bold text-caption text-uppercase"
              >
                {{ project.categoryNames[currentLang] }}
              </v-chip>
              <span class="text-caption text-muted">ID: #IK-{{ project.id }}</span>
            </div>

            <!-- Title -->
            <h2 class="font-serif text-h5 font-weight-bold text-white mb-2" style="line-height: 1.3;">
              {{ project.titles[currentLang] }}
            </h2>

            <!-- Description -->
            <p class="text-caption text-muted font-weight-light mb-6" style="line-height: 1.7;">
              {{ project.descriptions[currentLang] }}
            </p>

            <!-- Specifications Card -->
            <v-sheet
              color="surface-variant"
              rounded="lg"
              class="pa-4 mb-6 ikamm-border"
            >
              <div class="d-flex align-center ga-1 text-caption text-primary font-weight-bold text-uppercase mb-3" style="letter-spacing: 0.1em;">
                <v-icon icon="mdi-format-list-checks" size="small"></v-icon>
                {{ t.specsTitle }}
              </div>

              <!-- Spec Items -->
              <div class="d-flex flex-column ga-2 text-caption">
                <div class="d-flex justify-space-between pb-1 border-b" style="border-color: rgba(30, 58, 43, 0.4) !important;">
                  <span class="text-muted">{{ t.coreFeature }}</span>
                  <span class="text-white font-weight-bold text-right" style="max-width: 60%;">{{ project.specs.highlights[currentLang] }}</span>
                </div>
                <div class="d-flex justify-space-between pb-1 border-b" style="border-color: rgba(30, 58, 43, 0.4) !important;">
                  <span class="text-muted">{{ t.materials }}</span>
                  <span class="text-white font-weight-bold text-right" style="max-width: 60%;">{{ project.specs.materials[currentLang] }}</span>
                </div>
                <div class="d-flex justify-space-between pb-1 border-b" style="border-color: rgba(30, 58, 43, 0.4) !important;">
                  <span class="text-muted">{{ t.lighting }}</span>
                  <span class="text-white font-weight-bold text-right" style="max-width: 60%;">{{ project.specs.lighting[currentLang] }}</span>
                </div>
                <div class="d-flex justify-space-between pt-1">
                  <span class="text-muted">{{ t.estSpace }}</span>
                  <span class="text-white font-weight-bold">{{ project.specs.areas[currentLang] }}</span>
                </div>
              </div>
            </v-sheet>

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
                  <span class="color-dot mr-1.5" :style="{ backgroundColor: color.hex }"></span>
                  <span class="text-slate-300">{{ color.name }}</span>
                </v-chip>
              </div>
            </div>
          </div>

          <!-- Action CTA -->
          <div class="pt-4 border-t" style="border-color: rgba(30, 58, 43, 0.4) !important;">
            <v-btn
              block
              color="primary"
              size="large"
              rounded="xl"
              prepend-icon="mdi-send-outline"
              class="text-ikamm-dark font-weight-bold text-none shadow-lg text-body-2"
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
