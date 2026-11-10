<script setup>
defineProps({
  t: {
    type: Object,
    required: true
  }
})

defineEmits(['open-contact'])
</script>

<template>
  <v-footer 
    color="background" 
    class="border-t pt-12 pb-6 mt-auto" 
    style="border-color: rgba(30, 58, 43, 0.4) !important;"
  >
    <v-container style="max-width: 1440px;">
      <!-- Main Footer Columns -->
      <v-row class="mb-8">
        <!-- Col 1: Brand & Slogan -->
        <v-col cols="12" md="4" class="mb-4 mb-md-0">
          <div class="d-inline-flex align-center ga-3 mb-3">
            <v-avatar
              size="56"
              rounded="lg"
              class="ikamm-border-accent elevation-4 overflow-hidden bg-surface"
            >
              <v-img
                src="/logo.jpg"
                alt="IKAMM Logo"
                cover
              ></v-img>
            </v-avatar>
            <div class="d-flex flex-column justify-center">
              <span 
                class="font-serif font-weight-black text-white text-body-1 text-no-wrap"
                style="letter-spacing: 0.14em !important; line-height: 1.15;"
              >
                {{ t.brandName }}
              </span>
              <span 
                class="text-uppercase font-weight-bold text-caption text-primary mt-1 text-no-wrap"
                style="font-size: 9px !important; letter-spacing: 0.22em !important;"
              >
                {{ t.brandSub }}
              </span>
            </div>
          </div>
          <h4 class="text-body-2 font-weight-bold text-white mb-2">
            {{ t.companyName }}
          </h4>
          <p class="text-caption text-muted font-weight-light mb-4" style="line-height: 1.7; max-width: 320px;">
            {{ t.footerSub }} — High-end Bespoke Spatial Architecture & Integrated Luxury Home Systems.
          </p>
          <v-btn
            size="small"
            color="primary"
            variant="outlined"
            rounded="lg"
            prepend-icon="mdi-chat-processing-outline"
            class="text-none font-weight-bold text-caption"
            @click="$emit('open-contact')"
          >
            {{ t.navContact }}
          </v-btn>
        </v-col>

        <!-- Col 2: Bangkok Headquarters -->
        <v-col cols="12" sm="6" md="4" class="mb-4 mb-sm-0">
          <div class="text-caption text-primary font-weight-bold text-uppercase mb-3 d-flex align-center ga-2" style="letter-spacing: 0.08em;">
            <v-icon icon="mdi-office-building-marker" size="small"></v-icon>
            {{ t.bkkOfficeTitle }}
          </div>
          <p class="text-caption text-on-surface font-weight-light mb-3" style="line-height: 1.7;">
            {{ t.bkkAddress }}
          </p>
          <div class="text-caption text-muted d-flex flex-column ga-1">
            <div class="d-flex align-center ga-2">
              <v-icon icon="mdi-phone-outline" size="14" color="primary"></v-icon>
              <span>{{ t.telLabel }} <a href="tel:+66990869712" class="text-white text-decoration-none hover-gold font-weight-medium">+66 99 086 9712</a></span>
            </div>
            <div class="d-flex align-center ga-2">
              <v-icon icon="mdi-chat-outline" size="14" color="primary"></v-icon>
              <span>{{ t.lineLabel }} <strong class="text-white">099 104 2639</strong></span>
            </div>
          </div>
        </v-col>

        <!-- Col 3: International & Contact Details -->
        <v-col cols="12" sm="6" md="4">
          <!-- Philippines Branch -->
          <div class="text-caption text-primary font-weight-bold text-uppercase mb-3 d-flex align-center ga-2" style="letter-spacing: 0.08em;">
            <v-icon icon="mdi-earth" size="small"></v-icon>
            {{ t.phOfficeTitle }}
          </div>
          <p class="text-caption text-on-surface font-weight-light mb-2" style="line-height: 1.7;">
            {{ t.phAddress }}
          </p>
          <div class="text-caption text-muted d-flex align-center ga-2 mb-4">
            <v-icon icon="mdi-phone-outline" size="14" color="primary"></v-icon>
            <span>{{ t.telLabel }} <a href="tel:+639085578763" class="text-white text-decoration-none hover-gold font-weight-medium">+63 90 855 78763</a></span>
          </div>

          <!-- Digital Contact Info -->
          <div class="pt-3 border-t d-flex flex-column ga-1 text-caption text-muted" style="border-color: rgba(30, 58, 43, 0.4) !important;">
            <div class="d-flex align-center ga-2">
              <v-icon icon="mdi-email-outline" size="14" color="primary"></v-icon>
              <span>{{ t.emailLabel }} <a href="mailto:Service@ikammhomedecor.com" class="text-white text-decoration-none hover-gold">Service@ikammhomedecor.com</a></span>
            </div>
            <div class="d-flex align-center ga-2 pl-6">
              <span><a href="mailto:Marketing@ikammhomedecor.com" class="text-white text-decoration-none hover-gold">Marketing@ikammhomedecor.com</a></span>
            </div>
            <div class="d-flex align-center ga-2 mt-1">
              <v-icon icon="mdi-web" size="14" color="primary"></v-icon>
              <span>{{ t.websiteLabel }} <a href="https://www.ikammhomedecor.com" target="_blank" class="text-primary text-decoration-none font-weight-bold hover-gold">www.ikammhomedecor.com</a></span>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Bottom Copyright Bar -->
      <div 
        class="pt-6 border-t d-flex flex-column flex-sm-row align-center justify-space-between ga-2 text-caption text-muted"
        style="border-color: rgba(30, 58, 43, 0.4) !important;"
      >
        <div>{{ t.footerCopyright }}</div>
        <div class="d-flex align-center ga-4">
          <a href="tel:+66990869712" class="text-muted text-decoration-none hover-gold">Tel: +66 99 086 9712</a>
          <span>•</span>
          <a href="mailto:Service@ikammhomedecor.com" class="text-muted text-decoration-none hover-gold">Service@ikammhomedecor.com</a>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<style scoped>
.hover-gold:hover {
  color: #C5A059 !important;
  text-decoration: underline !important;
}
</style>
