import { logger } from "@/utils/Logger.js"
import { artApi } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Artwork } from "@/models/Artwork.js"





class ArtService {
    async displayArtwork() {
        const response = await artApi.get('/api/artworks')
        logger.log('Displayed Artwork🖼️', response.data)
        const art = response.data.artworks.map(artPOJO => new Artwork(artPOJO))
        AppState.artwork = art
    }
}
export const artService = new ArtService()