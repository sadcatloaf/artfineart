import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Artwork } from "@/models/Artwork.js"






    class ArtService {
    async changeArtworkPage(pageNumber) {
        const response = await api.get(`/api/artworks?page=${pageNumber}`)
        logger.log('changed artwork page✅✅', response.data)
        const arts = response.data.artworks.map(artPOJO => new Artwork(artPOJO))
        AppState.artworks = arts
        AppState.currentPage = response.data.page
        AppState.totalPages = response.data.pages
    }

    async displayArtwork() {
        const response = await api.get('/api/artworks')
        logger.log('Displayed Artwork🖼️', response.data)
        const arts = response.data.artworks.map(artPOJO => new Artwork(artPOJO))
        AppState.artworks = arts
        AppState.currentPage = response.data.page
        AppState.totalPages = response.data.pages
    }

    async admireArtwork(id) {
        const response = await api.post(`/api/artworks/${id}/admire`)
        logger.log('admired artwork 💟', response.data)
    }
}
export const artService = new ArtService()