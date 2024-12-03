<script setup>
import { AppState } from '@/AppState';
import { artService } from '@/services/ArtService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, onMounted } from 'vue';


const artwork = computed(() => AppState.artwork)

onMounted(() => {
  logger.log('onMounted is Gud')
  displayArtwork()
})



async function displayArtwork() {
  try {
    await artService.displayArtwork()
  } catch (error) {
    logger.error('[Display Artwork]', error)
    Pop.error(error)
  }
}
</script>

<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1>Display Artwork</h1>
      </div>
    </section>
    <section class="row">
      <div class="col-12">
        {{ artwork }}
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
