import { Cat } from "./cat";
export class LocalData {
    static localCats: Array<Cat> = [
        {
            id: 0,
            name: "Trixie",
            breed: "British shorthari",
            description: "Trixie is a craxy lovable kitty",
            image: "https://cupisici.ro/wp-content/uploads/2020/03/British-Shorthair-2.jpg",
            likes: 2
        },
        {
            id: 1,
            name: "Thor",
            breed: "Siberian",
            description: "The norse god of fluffyness",
            image: "https://www.animalepierdute.ro/wp-content/uploads/2019/07/pisica-siberiana-siberian-cat.jpg",
            likes: 4
        },
        {
            id: 2,
            name: "Garfield",
            breed: "Persian Tabby",
            description: "Someone said lasagna???",
            image: "https://thediscerningcat.com/wp-content/uploads/2021/02/ginger-persian-cat.jpg",
            likes: 3
        },
        {
            id: 3,
            name: "Tomiță",
            breed: "Mixed breed",
            description: "Here kitty kitty...",
            image: "https://www.citynews1130.com/wp-content/blogs.dir/sites/9/2017/06/05/cat.jpg",
            likes: 1
        }
    ]
}