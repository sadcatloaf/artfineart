<script setup>
import { AppState } from '@/AppState';
import { artService } from '@/services/ArtService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, onMounted } from 'vue';
import AdmirePage from './AdmirePage.vue';


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

async function changePage(pageNumber) {
  try {
    await artService.changeArtworkPage(pageNumber)
  }
  catch (error) {
    logger.log('Changed artwork page', error)
    Pop.error(error);
  }

}
async function admireArtwork(id) {
  try {
    await artService.admireArtwork(id)
  }
  catch (error) {
    logger.error('Admired Artwork', error)
    Pop.error(error);
  }
}
</script>

<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1>Display Artwork</h1>
        <button @click="changePage(currentPage - 1)" :disabled="currentPage == 1" type="button"
          :title="`Go to page ${currentPage - 1}`">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="changePage(currentPage + 1)" :disabled="currentPage == 35 || currentPage == totalPages"
          type="button" :title="`Got to page ${currentPage + 1}`">Next</button>
      </div>
    </section>
    <section class="row grid">
      <div v-for="artwork in artworks" :key="artwork.id" class="col-3">
        <img :src="artwork.imgUrl" alt="" class="img-fluid item">

        <button @click="admireArtwork(artwork.id)" class="m-2">
          <i class="mdi mdi-heart "></i>
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.grid {
  columns: 18rem;
  gap: 1rem;
  counter-reset: grid;
}

.item+.item {
  margin-top: 1rem;
}

.item {
  break-inside: avoid;
  padding: 1rem;
  border-radius: 1rem;
}

.item::before {
  counter-increment: grid;
  content: counter(grid);
}

.item:nth-child(3n) {
  aspect-ratio: 1;

}

.item:nth-child(3n - 1) {
  aspect-ratio: 2 / 3;

}
</style>
