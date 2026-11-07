<script setup>
defineProps({
  message: {
    type: String,
    default: ''
  }
})

defineEmits(['close'])
</script>

<template>
  <v-snackbar
    :model-value="!!message"
    @update:model-value="!$event && $emit('close')"
    location="bottom right"
    color="surface"
    rounded="xl"
    elevation="12"
    class="ikamm-border-accent"
    timeout="3200"
  >
    <div class="d-flex align-center ga-3">
      <v-icon icon="mdi-check-circle" color="primary" size="20"></v-icon>
      <span class="text-caption text-sm-body-2 font-weight-medium text-white">{{ message }}</span>
    </div>
  </v-snackbar>
</template>
