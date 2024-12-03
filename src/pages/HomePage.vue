<script setup>
import { AppState } from '@/AppState';
import { artService } from '@/services/ArtService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, onMounted } from 'vue';


const artworks = computed(() => AppState.artworks)
const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)

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
        <p>Page {{ currentPage }} of {{ totalPages }}</p>
      </div>
    </section>
    <section class="row">
      <div v-for="artwork in artworks" :key="artwork.id" class="col-3">
        <img :src="artwork.imgUrl" alt="" class="img-fluid">
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
