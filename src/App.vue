<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useDisplay } from 'vuetify'
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

const { xs } = useDisplay()

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
const toastMessage = ref('')
const isContactOpen = ref(false)
const projects = ref(initialProjects)
const gridCols = ref(4) // 6 = 2 cols, 4 = 3 cols, 3 = 4 cols
const showScrollTop = ref(false)

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

  // Escape & Arrow navigation shortcut
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleKeydown = (e) => {
  if (e.key === 'Escape') {
    if (isContactOpen.value) {
      isContactOpen.value = false
    } else if (selectedProject.value) {
      closeModal()
    }
  } else if (selectedProject.value && !isContactOpen.value) {
    if (e.key === 'ArrowRight') {
      nextProject()
    } else if (e.key === 'ArrowLeft') {
      prevProject()
    }
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

    return matchesCategory && matchesSearch
  })
})

const getCategoryCount = (catId) => {
  if (catId === 'all') return projects.value.length
  return projects.value.filter(p => p.categoryId === catId).length
}

// Modal Handlers & Navigation
const openModal = (project) => {
  selectedProject.value = project
}

const closeModal = () => {
  selectedProject.value = null
}

const currentProjectIndex = computed(() => {
  if (!selectedProject.value) return -1
  return filteredProjects.value.findIndex(p => p.id === selectedProject.value.id)
})

const hasPrevProject = computed(() => currentProjectIndex.value > 0)
const hasNextProject = computed(() => currentProjectIndex.value >= 0 && currentProjectIndex.value < filteredProjects.value.length - 1)

const prevProject = () => {
  if (hasPrevProject.value) {
    selectedProject.value = filteredProjects.value[currentProjectIndex.value - 1]
  }
}

const nextProject = () => {
  if (hasNextProject.value) {
    selectedProject.value = filteredProjects.value[currentProjectIndex.value + 1]
  }
}

const resetFilters = () => {
  activeCategory.value = 'all'
  searchQuery.value = ''
}

// Toast
const showToast = (msg) => {
  toastMessage.value = msg
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    toastMessage.value = ''
  }, 3200)
}

const requestConsultation = () => {
  // Open contact dialog directly for convenient contact
  isContactOpen.value = true
}
</script>

<template>
  <v-app class="bg-background">
    <!-- Header with IKAMM Brand & Contact Button -->
    <HeaderNavbar 
      :current-lang="currentLang"
      :t="t"
      @reset-filters="resetFilters"
      @change-language="changeLanguage"
      @open-contact="isContactOpen = true"
    />

    <!-- Main Content Area -->
    <v-main>
      <!-- Hero Banner -->
      <HeroBanner 
        v-model:search-query="searchQuery"
        :total-projects="projects.length"
        :t="t"
        @clear-search="searchQuery = ''"
      />

      <!-- Category Filter Tabs (Sticky) -->
      <CategoryFilters 
        :categories="categories"
        :active-category="activeCategory"
        :filtered-count="filteredProjects.length"
        v-model:grid-cols="gridCols"
        :get-category-count="getCategoryCount"
        :current-lang="currentLang"
        :t="t"
        @select-category="activeCategory = $event"
      />

      <!-- Projects Gallery Grid -->
      <v-container class="pb-16 pt-2 px-3 px-sm-4" style="max-width: 1440px;">
        <!-- Empty State -->
        <v-sheet
          v-if="filteredProjects.length === 0"
          color="surface"
          rounded="xl"
          class="text-center py-12 py-sm-16 px-4 px-sm-6 ikamm-border mx-auto my-6"
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
            class="text-on-primary font-weight-bold text-none px-6"
            @click="resetFilters"
          >
            {{ t.resetFilters }}
          </v-btn>
        </v-sheet>

        <!-- Vuetify Grid -->
        <v-row v-else :dense="xs">
          <v-col
            v-for="project in filteredProjects"
            :key="project.id"
            cols="12"
            sm="6"
            :lg="gridCols"
            class="mb-2 mb-sm-0"
          >
            <ProjectCard 
              :project="project"
              :current-lang="currentLang"
              :t="t"
              @open="openModal"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Floating Quick Actions (Back to Top & Quick Contact) -->
    <div class="position-fixed d-flex flex-column align-end ga-2 floating-actions">
      <v-scale-transition>
        <v-btn
          v-if="showScrollTop"
          icon="mdi-arrow-up"
          color="surface-variant"
          :size="xs ? 'small' : 'default'"
          rounded="circle"
          elevation="8"
          class="ikamm-border text-white"
          title="Back to Top"
          @click="scrollToTop"
        ></v-btn>
      </v-scale-transition>

      <v-btn
        color="primary"
        :size="xs ? 'default' : 'large'"
        rounded="pill"
        elevation="12"
        prepend-icon="mdi-chat-processing"
        class="text-on-primary font-weight-bold text-none px-4 px-sm-5 gold-glow"
        @click="isContactOpen = true"
      >
        {{ t.navContact }}
      </v-btn>
    </div>

    <!-- Detail Dialog Modal -->
    <ProjectModal 
      :project="selectedProject"
      :has-prev="hasPrevProject"
      :has-next="hasNextProject"
      :current-lang="currentLang"
      :t="t"
      @close="closeModal"
      @request-quote="requestConsultation"
      @prev-project="prevProject"
      @next-project="nextProject"
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
