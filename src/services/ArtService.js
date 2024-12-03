import { logger } from "@/utils/Logger.js"
import { artApi } from "./AxiosService.js"





class ArtService {
    async displayArtwork() {
        const response = await artApi.get('/api/artworks')
        logger.log('Displayed Artwork🖼️', response.data)
    }
}
export const artService = new ArtService()