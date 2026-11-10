<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  t: {
    type: Object,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <v-dialog
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    max-width="700px"
    scrollable
    transition="dialog-transition"
  >
    <v-card
      color="surface"
      rounded="xl"
      class="ikamm-border overflow-hidden position-relative pa-6 pa-sm-8"
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
        @click="$emit('update:modelValue', false)"
      ></v-btn>

      <!-- Header -->
      <div class="d-flex align-center ga-4 mb-6">
        <v-avatar
          size="60"
          rounded="lg"
          class="ikamm-border-accent elevation-4 overflow-hidden flex-shrink-0"
        >
          <v-img
            src="/logo.jpg"
            alt="IKAMM Logo"
            cover
          ></v-img>
        </v-avatar>
        <div>
          <div class="d-flex align-center ga-2 mb-1">
            <v-chip size="x-small" color="primary" variant="flat" class="font-weight-bold text-on-primary text-caption">
              OFFICIAL CONTACT
            </v-chip>
            <span class="text-caption text-muted">IKAMM HOME DECOR CO., LTD.</span>
          </div>
          <h2 class="font-serif text-h6 text-sm-h5 font-weight-bold text-white mb-1">
            {{ t.contactDialogTitle }}
          </h2>
          <p class="text-caption text-muted font-weight-light mb-0">
            {{ t.contactDialogSub }}
          </p>
        </div>
      </div>

      <!-- Quick Contact Buttons -->
      <div class="d-flex flex-wrap ga-3 mb-6">
        <v-btn
          color="primary"
          variant="flat"
          rounded="lg"
          size="default"
          prepend-icon="mdi-phone"
          class="text-on-primary font-weight-bold text-none flex-grow-1"
          href="tel:+66990869712"
        >
          +66 99 086 9712
        </v-btn>

        <v-btn
          color="surface-variant"
          variant="flat"
          rounded="lg"
          size="default"
          class="text-white font-weight-bold text-none ikamm-border flex-grow-1"
          href="mailto:Service@ikammhomedecor.com"
        >
          <template #prepend>
            <v-icon icon="mdi-email-outline" color="primary"></v-icon>
          </template>
          Service@ikammhomedecor.com
        </v-btn>

        <v-btn
          color="surface-variant"
          variant="flat"
          rounded="lg"
          size="default"
          class="text-white font-weight-bold text-none ikamm-border flex-grow-1"
          href="https://www.ikammhomedecor.com"
          target="_blank"
        >
          <template #prepend>
            <v-icon icon="mdi-web" color="primary"></v-icon>
          </template>
          www.ikammhomedecor.com
        </v-btn>
      </div>

      <!-- Detailed Office Addresses -->
      <div class="d-flex flex-column ga-4">
        <!-- Bangkok HQ -->
        <v-sheet
          color="surface-variant"
          rounded="xl"
          class="pa-4 ikamm-border"
        >
          <div class="d-flex align-center ga-2 text-caption text-primary font-weight-bold text-uppercase mb-2">
            <v-icon icon="mdi-office-building-marker" size="small"></v-icon>
            {{ t.bkkOfficeTitle }}
          </div>
          <p class="text-caption text-on-surface mb-3" style="line-height: 1.6;">
            {{ t.bkkAddress }}
          </p>
          <div class="d-flex flex-column ga-1 text-caption text-muted">
            <div class="d-flex align-center ga-2">
              <v-icon icon="mdi-phone-outline" size="14" color="primary"></v-icon>
              <span>{{ t.telLabel }} <a href="tel:+66990869712" class="text-white text-decoration-none font-weight-medium hover-gold">+66 99 086 9712</a></span>
            </div>
            <div class="d-flex align-center ga-2">
              <v-icon icon="mdi-chat-outline" size="14" color="primary"></v-icon>
              <span>{{ t.lineLabel }} <strong class="text-white">099 104 2639</strong></span>
            </div>
            <div class="d-flex align-center ga-2">
              <v-icon icon="mdi-email-outline" size="14" color="primary"></v-icon>
              <span>{{ t.emailLabel }} <a href="mailto:Service@ikammhomedecor.com" class="text-white text-decoration-none hover-gold">Service@ikammhomedecor.com</a> / <a href="mailto:Marketing@ikammhomedecor.com" class="text-white text-decoration-none hover-gold">Marketing@ikammhomedecor.com</a></span>
            </div>
          </div>
        </v-sheet>

        <!-- Philippines Branch -->
        <v-sheet
          color="surface-variant"
          rounded="xl"
          class="pa-4 ikamm-border"
        >
          <div class="d-flex align-center ga-2 text-caption text-primary font-weight-bold text-uppercase mb-2">
            <v-icon icon="mdi-earth" size="small"></v-icon>
            {{ t.phOfficeTitle }}
          </div>
          <p class="text-caption text-on-surface mb-3" style="line-height: 1.6;">
            {{ t.phAddress }}
          </p>
          <div class="d-flex flex-column ga-1 text-caption text-muted">
            <div class="d-flex align-center ga-2">
              <v-icon icon="mdi-phone-outline" size="14" color="primary"></v-icon>
              <span>{{ t.telLabel }} <a href="tel:+639085578763" class="text-white text-decoration-none font-weight-medium hover-gold">+63 90 855 78763</a></span>
            </div>
          </div>
        </v-sheet>
      </div>

      <!-- Action Bottom -->
      <div class="mt-6 pt-4 border-t d-flex justify-end" style="border-color: rgba(30, 58, 43, 0.4) !important;">
        <v-btn
          variant="tonal"
          color="primary"
          rounded="lg"
          size="small"
          class="text-none font-weight-bold"
          @click="$emit('update:modelValue', false)"
        >
          {{ t.closeBtn }}
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.hover-gold:hover {
  color: #C5A059 !important;
  text-decoration: underline !important;
}
</style>
