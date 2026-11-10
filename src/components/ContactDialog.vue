<script setup>
import { useDisplay } from 'vuetify'

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

const { xs } = useDisplay()
</script>

<template>
  <v-dialog
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :fullscreen="xs"
    max-width="700px"
    scrollable
    transition="dialog-transition"
  >
    <v-card
      color="surface"
      :rounded="xs ? '0' : 'xl'"
      class="ikamm-border overflow-hidden position-relative d-flex flex-column"
      elevation="24"
    >
      <!-- Close Button -->
      <v-btn
        icon="mdi-close"
        size="small"
        variant="flat"
        color="surface-variant"
        class="position-absolute ikamm-border"
        style="top: calc(14px + env(safe-area-inset-top, 0px)); right: 16px; z-index: 10;"
        @click="$emit('update:modelValue', false)"
      ></v-btn>

      <v-card-text 
        class="pa-5 pa-sm-8 overflow-y-auto"
        style="padding-top: calc(24px + env(safe-area-inset-top, 0px)) !important; padding-bottom: calc(24px + env(safe-area-inset-bottom, 0px)) !important;"
      >
        <!-- Header -->
        <div class="d-flex align-start align-sm-center ga-3 ga-sm-4 mb-5 pr-8">
          <v-avatar
            :size="xs ? 48 : 60"
            rounded="lg"
            class="ikamm-border-accent elevation-4 overflow-hidden flex-shrink-0"
          >
            <v-img
              src="/logo.jpg"
              alt="IKAMM Logo"
              cover
            ></v-img>
          </v-avatar>
          <div style="min-width: 0;">
            <div class="d-flex align-center flex-wrap ga-2 mb-1">
              <v-chip size="x-small" color="primary" variant="flat" class="font-weight-bold text-on-primary text-caption">
                OFFICIAL CONTACT
              </v-chip>
              <span class="text-caption text-muted">IKAMM HOME DECOR CO., LTD.</span>
            </div>
            <h2 class="font-serif text-subtitle-1 text-sm-h5 font-weight-bold text-white mb-1">
              {{ t.contactDialogTitle }}
            </h2>
            <p class="text-caption text-muted font-weight-light mb-0">
              {{ t.contactDialogSub }}
            </p>
          </div>
        </div>

        <!-- Quick Contact Buttons -->
        <div class="d-flex flex-column flex-sm-row flex-wrap ga-2.5 ga-sm-3 mb-6">
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
            <div class="d-flex flex-column ga-1.5 text-caption text-muted">
              <div class="d-flex align-center ga-2 flex-wrap">
                <v-icon icon="mdi-phone-outline" size="14" color="primary"></v-icon>
                <span>{{ t.telLabel }} <a href="tel:+66990869712" class="text-white text-decoration-none font-weight-medium hover-gold">+66 99 086 9712</a></span>
              </div>
              <div class="d-flex align-center ga-2 flex-wrap">
                <v-icon icon="mdi-chat-outline" size="14" color="primary"></v-icon>
                <span>{{ t.lineLabel }} <strong class="text-white">099 104 2639</strong></span>
              </div>
              <div class="d-flex align-start ga-2 flex-wrap">
                <v-icon icon="mdi-email-outline" size="14" color="primary" class="mt-0.5"></v-icon>
                <span style="word-break: break-word;">{{ t.emailLabel }} <a href="mailto:Service@ikammhomedecor.com" class="text-white text-decoration-none hover-gold">Service@ikammhomedecor.com</a> / <a href="mailto:Marketing@ikammhomedecor.com" class="text-white text-decoration-none hover-gold">Marketing@ikammhomedecor.com</a></span>
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
            size="default"
            class="text-none font-weight-bold w-100 w-sm-auto"
            @click="$emit('update:modelValue', false)"
          >
            {{ t.closeBtn }}
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.hover-gold:hover {
  color: #C5A059 !important;
  text-decoration: underline !important;
}
</style>
