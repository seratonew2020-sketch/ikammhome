<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { categories, initialProjects } from './data/projects.js'
import { translations } from './i18n/translations.js'

import HeaderNavbar from './components/HeaderNavbar.vue'
import HeroBanner from './components/HeroBanner.vue'
import CategoryFilters from './components/CategoryFilters.vue'
import ProjectCard from './components/ProjectCard.vue'
import ProjectModal from './components/ProjectModal.vue'
import ContactDialog from './components/ContactDialog.vue'
import ToastNotification from './components/ToastNotification.vue'
import AppFooter from './components/AppFooter.vue'

// Language State (Default: Thai 'th')
const currentLang = ref('th')
const t = computed(() => translations[currentLang.value] || translations['th'])

const changeLanguage = (langCode) => {
  if (translations[langCode]) {
    currentLang.value = langCode
    try {
      localStorage.setItem('ikamm_lang', langCode)
    } catch (e) {
      console.error(e)
    }
  }
}

// App State
const activeCategory = ref('all')
const searchQuery = ref('')
const selectedProject = ref(null)
const favorites = ref([])
const showOnlyFavorites = ref(false)
const toastMessage = ref('')
const isContactOpen = ref(false)
const projects = ref(initialProjects)

let toastTimer = null

// Lifecycle Hooks
onMounted(() => {
  // Load saved language
  try {
    const savedLang = localStorage.getItem('ikamm_lang')
    if (savedLang && translations[savedLang]) {
      currentLang.value = savedLang
    }
  } catch (e) {
    console.error(e)
  }

  // Load saved favorites
  try {
    const savedFavs = localStorage.getItem('ikamm_favorites')
    if (savedFavs) {
      favorites.value = JSON.parse(savedFavs)
    }
  } catch (e) {
    console.error('Failed to parse favorites from storage', e)
  }

  // Escape shortcut
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

const handleKeydown = (e) => {
  if (e.key === 'Escape') {
    if (isContactOpen.value) {
      isContactOpen.value = false
    } else if (selectedProject.value) {
      closeModal()
    }
  }
}

// Save favorites
const saveFavoritesToStorage = () => {
  try {
    localStorage.setItem('ikamm_favorites', JSON.stringify(favorites.value))
  } catch (e) {
    console.error(e)
  }
}

// Computed Filtered Projects
const filteredProjects = computed(() => {
  const lang = currentLang.value
  const q = searchQuery.value.toLowerCase().trim()

  return projects.value.filter(project => {
    // Category match
    const matchesCategory = activeCategory.value === 'all' || project.categoryId === activeCategory.value

    // Search query match across multiple fields and languages
    const currentTitle = (project.titles[lang] || project.titles.th || '').toLowerCase()
    const currentDesc = (project.descriptions[lang] || project.descriptions.th || '').toLowerCase()
    const currentCat = (project.categoryNames[lang] || project.categoryNames.th || '').toLowerCase()
    const currentMat = (project.specs.materials[lang] || project.specs.materials.th || '').toLowerCase()
    const currentHigh = (project.specs.highlights[lang] || project.specs.highlights.th || '').toLowerCase()

    const matchesSearch = !q || 
      currentTitle.includes(q) ||
      currentDesc.includes(q) ||
      currentCat.includes(q) ||
      currentMat.includes(q) ||
      currentHigh.includes(q)

    // Favorites match
    const matchesFavorite = !showOnlyFavorites.value || favorites.value.includes(project.id)

    return matchesCategory && matchesSearch && matchesFavorite
  })
})

const getCategoryCount = (catId) => {
  if (catId === 'all') return projects.value.length
  return projects.value.filter(p => p.categoryId === catId).length
}

// Modal Handlers
const openModal = (project) => {
  selectedProject.value = project
}

const closeModal = () => {
  selectedProject.value = null
}

// Favorites Handlers
const toggleFavorite = (id) => {
  const index = favorites.value.indexOf(id)
  if (index > -1) {
    favorites.value.splice(index, 1)
    showToast(t.value.toastRemoved)
  } else {
    favorites.value.push(id)
    showToast(t.value.toastSaved)
  }
  saveFavoritesToStorage()
}

const isFavorite = (id) => favorites.value.includes(id)

const toggleFavoriteView = () => {
  showOnlyFavorites.value = !showOnlyFavorites.value
  if (showOnlyFavorites.value) {
    activeCategory.value = 'all'
  }
}

const resetFilters = () => {
  activeCategory.value = 'all'
  searchQuery.value = ''
  showOnlyFavorites.value = false
}

// Toast
const showToast = (msg) => {
  toastMessage.value = msg
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    toastMessage.value = ''
  }, 3200)
}

const requestConsultation = (project) => {
  // Open contact dialog directly for convenient contact
  isContactOpen.value = true
}
</script>

<template>
  <v-app class="bg-background">
    <!-- Header with IKAMM Brand & Contact Button -->
    <HeaderNavbar 
      :favorites-count="favorites.length"
      :show-only-favorites="showOnlyFavorites"
      :current-lang="currentLang"
      :t="t"
      @reset-filters="resetFilters"
      @toggle-favorites="toggleFavoriteView"
      @change-language="changeLanguage"
      @open-contact="isContactOpen = true"
    />

    <!-- Main Content Area -->
    <v-main>
      <!-- Hero Banner -->
      <HeroBanner 
        v-model:search-query="searchQuery"
        :t="t"
        @clear-search="searchQuery = ''"
      />

      <!-- Category Filter Tabs -->
      <CategoryFilters 
        :categories="categories"
        :active-category="activeCategory"
        :filtered-count="filteredProjects.length"
        :show-only-favorites="showOnlyFavorites"
        :get-category-count="getCategoryCount"
        :current-lang="currentLang"
        :t="t"
        @select-category="activeCategory = $event"
        @clear-favorites-filter="showOnlyFavorites = false"
      />

      <!-- Projects Gallery Grid -->
      <v-container class="pb-16 pt-2">
        <!-- Empty State -->
        <v-sheet
          v-if="filteredProjects.length === 0"
          color="surface"
          rounded="xl"
          class="text-center py-16 px-6 ikamm-border mx-auto my-6"
          style="max-width: 640px;"
        >
          <v-avatar color="surface-variant" size="64" class="mb-4 ikamm-border">
            <v-icon icon="mdi-store-search-outline" color="primary" size="32"></v-icon>
          </v-avatar>
          <h3 class="text-h6 font-weight-bold text-white mb-2">
            {{ t.emptyTitle }}
          </h3>
          <p class="text-caption text-sm-body-2 text-muted mb-6">
            {{ t.emptyDesc }}
          </p>
          <v-btn
            color="primary"
            variant="flat"
            rounded="xl"
            class="text-ikamm-dark font-weight-bold text-none px-6"
            @click="resetFilters"
          >
            {{ t.resetFilters }}
          </v-btn>
        </v-sheet>

        <!-- Vuetify Grid -->
        <v-row v-else>
          <v-col
            v-for="project in filteredProjects"
            :key="project.id"
            cols="12"
            sm="6"
            lg="4"
          >
            <ProjectCard 
              :project="project"
              :is-saved="isFavorite(project.id)"
              :current-lang="currentLang"
              :t="t"
              @open="openModal"
              @toggle-favorite="toggleFavorite"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Detail Dialog Modal -->
    <ProjectModal 
      :project="selectedProject"
      :is-saved="selectedProject ? isFavorite(selectedProject.id) : false"
      :current-lang="currentLang"
      :t="t"
      @close="closeModal"
      @toggle-favorite="toggleFavorite"
      @request-quote="requestConsultation"
    />

    <!-- Company Contact Dialog Modal -->
    <ContactDialog 
      v-model="isContactOpen"
      :t="t"
    />

    <!-- Toast Notification -->
    <ToastNotification 
      :message="toastMessage" 
      @close="toastMessage = ''"
    />

    <!-- Corporate Footer with Complete Company Info -->
    <AppFooter 
      :t="t" 
      @open-contact="isContactOpen = true"
    />
  </v-app>
</template>
