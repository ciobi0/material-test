export interface NewCat {
    name: string,
    breed: string,
    description?: string, //? can be null
    image?: string, //image url
    imageAlt?: string,
    likes: number
}

export interface Cat extends NewCat {
    id: number
}
