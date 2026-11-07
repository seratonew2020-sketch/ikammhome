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
    class="project-card d-flex flex-column rounded-xl overflow-hidden cursor-pointer"
    style="cursor: pointer;"
    elevation="4"
    @click="$emit('open', project)"
  >
    <!-- Image Box -->
    <div class="position-relative overflow-hidden" style="aspect-ratio: 4/3; background-color: #0B130E;">
      <v-img
        :src="project.imageUrl"
        :alt="project.titles[currentLang]"
        cover
        class="h-100 w-100 image-hover-zoom"
        @error="handleImageError($event, project.titles[currentLang])"
      >
        <template #placeholder>
          <div class="d-flex align-center justify-center fill-height bg-surface">
            <v-progress-circular indeterminate color="primary" size="24"></v-progress-circular>
          </div>
        </template>
      </v-img>

      <!-- Category Tag Badge -->
      <div class="position-absolute" style="top: 14px; left: 14px; z-index: 2;">
        <v-chip
          size="small"
          color="primary"
          variant="flat"
          class="font-weight-bold text-caption text-ikamm-dark shadow-sm"
          style="letter-spacing: 0.05em;"
        >
          {{ project.categoryNames[currentLang] }}
        </v-chip>
      </div>

      <!-- Bookmark Button -->
      <div class="position-absolute" style="top: 12px; right: 12px; z-index: 2;">
        <v-btn
          icon
          size="small"
          variant="flat"
          color="surface"
          class="ikamm-border"
          @click.stop="$emit('toggle-favorite', project.id)"
          :title="isSaved ? t.savedBtn : t.saveBtn"
        >
          <v-icon
            :icon="isSaved ? 'mdi-bookmark' : 'mdi-bookmark-outline'"
            :color="isSaved ? 'primary' : 'muted'"
            size="small"
          ></v-icon>
        </v-btn>
      </div>
    </div>

    <!-- Card Content -->
    <v-card-text class="pa-5 d-flex flex-column flex-grow-1 justify-space-between">
      <div>
        <!-- Highlight Specs -->
        <div class="d-flex align-center text-caption text-primary font-weight-medium mb-1">
          <v-icon icon="mdi-cube-outline" size="14" class="mr-1"></v-icon>
          <span class="line-clamp-1">{{ project.specs.highlights[currentLang] }}</span>
        </div>

        <!-- Project Title -->
        <h3 class="font-serif text-h6 font-weight-bold text-white mb-2 line-clamp-1">
          {{ project.titles[currentLang] }}
        </h3>

        <!-- Description -->
        <p class="text-caption text-muted font-weight-light line-clamp-2 mb-4" style="line-height: 1.6;">
          {{ project.descriptions[currentLang] }}
        </p>
      </div>

      <!-- Card Footer -->
      <div class="pt-3 border-t d-flex align-center justify-space-between" style="border-color: rgba(30, 58, 43, 0.4) !important;">
        <!-- Area -->
        <span class="text-caption text-muted d-flex align-center ga-1">
          <v-icon icon="mdi-ruler-square" size="14" color="primary"></v-icon>
          {{ project.specs.areas[currentLang] }}
        </span>

        <!-- Explore Link -->
        <span class="text-caption text-primary font-weight-bold d-flex align-center ga-1">
          {{ t.exploreConcept }}
          <v-icon icon="mdi-chevron-right" size="14"></v-icon>
        </span>
      </div>
    </v-card-text>
  </v-card>
</template>
