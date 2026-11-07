<script setup>
defineProps({
  searchQuery: {
    type: String,
    default: ''
  },
  t: {
    type: Object,
    required: true
  }
})

defineEmits(['update:searchQuery', 'clear-search'])
</script>

<template>
  <div class="hero-gradient py-10 py-md-16">
    <v-container class="text-center" style="max-width: 900px;">
      <!-- Sub-badge -->
      <v-chip
        variant="outlined"
        color="primary"
        class="mb-4 text-uppercase font-weight-bold tracking-wider px-4"
        size="small"
        style="letter-spacing: 0.15em; background-color: rgba(197, 160, 89, 0.08);"
      >
        {{ t.heroTag }}
      </v-chip>

      <!-- Main Headline -->
      <h1 class="font-serif text-h4 text-sm-h3 text-md-h2 font-weight-bold text-white mb-3" style="line-height: 1.25;">
        {{ t.heroTitlePrefix }} <br class="d-none d-sm-inline"/>
        <span class="gold-text-gradient">{{ t.heroTitleGold }}</span>
      </h1>

      <!-- Description -->
      <p class="text-muted text-body-2 text-sm-body-1 mb-8 mx-auto font-weight-light" style="max-width: 680px; line-height: 1.7;">
        {{ t.heroDesc }}
      </p>

      <!-- Search Bar -->
      <div class="mx-auto" style="max-width: 580px;">
        <v-text-field
          :model-value="searchQuery"
          @update:model-value="$emit('update:searchQuery', $event)"
          :placeholder="t.searchPlaceholder"
          prepend-inner-icon="mdi-magnify"
          clearable
          variant="solo-filled"
          bg-color="surface"
          rounded="xl"
          density="comfortable"
          hide-details
          class="ikamm-border text-white elevation-4"
          @click:clear="$emit('clear-search')"
        ></v-text-field>
      </div>
    </v-container>
  </div>
</template>
