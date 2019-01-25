
export default class Cloth {
    label       : string;
    brand       : string;
    year        : number;  
    stars       : number;
    image       : string;
    category    : string;

    constructor(label : string = '', brand : string = '', year : number = 2018, stars: number = 0, image : string = '', category : string)
    {
        this.label = label;
        this.brand = brand;
        this.year  = year;
        this.stars = stars;
        this.image = image;
        this.category = category;
    }

}