<script setup>
defineProps({
  project: {
    type: Object,
    required: true
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

defineEmits(['open', 'toggle-favorite'])

const handleImageError = (event, projectTitle) => {
  event.target.src = `https://placehold.co/800x600/132219/c5a059?text=${encodeURIComponent(projectTitle)}`
}
</script>

<template>
  <v-card
    class="project-card d-flex flex-column h-100 rounded-xl overflow-hidden cursor-pointer"
    elevation="4"
    @click="$emit('open', project)"
  >
    <!-- Image Box -->
    <div class="position-relative overflow-hidden bg-background" style="aspect-ratio: 4/3;">
      <v-img
        :src="project.imageUrl"
        :alt="project.titles[currentLang]"
        cover
        class="h-100 w-100 image-hover-zoom"
        @error="handleImageError($event, project.titles[currentLang])"
      >
        <template #placeholder>
          <div class="d-flex align-center justify-center fill-height bg-surface">
            <v-progress-circular indeterminate color="primary" size="28"></v-progress-circular>
          </div>
        </template>
      </v-img>

      <!-- Subtle Gradient Overlay -->
      <div class="position-absolute inset-0 w-100 h-100 card-image-overlay" style="top: 0; left: 0;"></div>

      <!-- Category Tag Badge -->
      <div class="position-absolute" style="top: 12px; left: 12px; z-index: 2;">
        <v-chip
          size="small"
          color="primary"
          variant="flat"
          class="font-weight-bold text-caption text-on-primary elevation-3"
          style="letter-spacing: 0.04em;"
        >
          {{ project.categoryNames[currentLang] }}
        </v-chip>
      </div>

      <!-- Bookmark Button -->
      <div class="position-absolute" style="top: 10px; right: 10px; z-index: 2;">
        <v-btn
          icon
          size="small"
          variant="flat"
          :color="isSaved ? 'primary' : 'surface'"
          class="ikamm-border elevation-3"
          @click.stop="$emit('toggle-favorite', project.id)"
          :title="isSaved ? t.savedBtn : t.saveBtn"
        >
          <v-icon
            :icon="isSaved ? 'mdi-bookmark' : 'mdi-bookmark-outline'"
            :color="isSaved ? 'on-primary' : 'white'"
            size="18"
          ></v-icon>
        </v-btn>
      </div>

      <!-- Bottom Image Info Bar: Area & Color Palette Dots -->
      <div 
        class="position-absolute d-flex align-center justify-space-between px-3 py-1.5"
        style="bottom: 8px; left: 8px; right: 8px; z-index: 2;"
      >
        <v-chip
          size="x-small"
          variant="flat"
          class="glass-pill text-white font-weight-bold ikamm-border"
          prepend-icon="mdi-ruler-square"
        >
          {{ project.specs.areas[currentLang] }}
        </v-chip>

        <!-- Color Palette Swatches -->
        <div 
          v-if="project.colorPalette && project.colorPalette.length"
          class="d-flex align-center ga-1 px-2 py-1 rounded-pill glass-pill ikamm-border"
        >
          <span
            v-for="(color, idx) in project.colorPalette"
            :key="idx"
            class="color-dot"
            :style="{ backgroundColor: color.hex, width: '12px', height: '12px' }"
            :title="color.name"
          ></span>
        </div>
      </div>
    </div>

    <!-- Card Content -->
    <v-card-text class="pa-5 d-flex flex-column flex-grow-1 justify-space-between">
      <div>
        <!-- Highlight Specs -->
        <div class="d-flex align-center text-caption text-primary font-weight-bold mb-1.5">
          <v-icon icon="mdi-sparkles" size="14" class="mr-1.5 flex-shrink-0"></v-icon>
          <span class="line-clamp-1">{{ project.specs.highlights[currentLang] }}</span>
        </div>

        <!-- Project Title -->
        <h3 class="font-serif text-subtitle-1 font-weight-bold text-white mb-2 line-clamp-1">
          {{ project.titles[currentLang] }}
        </h3>

        <!-- Description -->
        <p class="text-caption text-muted font-weight-regular line-clamp-2 mb-3" style="line-height: 1.65;">
          {{ project.descriptions[currentLang] }}
        </p>
      </div>

      <!-- Card Footer -->
      <div class="pt-3 border-t d-flex align-center justify-space-between" style="border-color: rgba(255, 255, 255, 0.07) !important;">
        <!-- Materials Preview -->
        <span class="text-caption text-muted line-clamp-1 mr-2" style="max-width: 60%;">
          <v-icon icon="mdi-layers-triple-outline" size="13" color="primary" class="mr-1"></v-icon>
          {{ project.specs.materials[currentLang] }}
        </span>

        <!-- Explore Button -->
        <v-btn
          variant="tonal"
          color="primary"
          size="small"
          rounded="pill"
          append-icon="mdi-arrow-right"
          class="text-none font-weight-bold text-caption px-3"
        >
          {{ t.exploreConcept }}
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>
