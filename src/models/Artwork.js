export class Artwork {
constructor(data) {
    this.id = data.id
    this.color = data.color
    this.height = data.height
    this.imgUrl = data.imgUrls.small
    this.description = data.description
    this.slug = data.slug
    this.width = data.width
    this.attribution = data.attribution
}



}