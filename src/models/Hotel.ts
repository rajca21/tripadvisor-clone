export interface PriceRange {
  min: number;
  max: number;
}

export const getAveragePrice = (priceRage: PriceRange) => {
  return (priceRage.min + priceRage.max) / 2;
};

export class SearchHotel {
  public id: number;
  public name: string;
  public rating: number;
  public reviews: number;
  public priceRange: PriceRange;
  public image: string;

  constructor(
    id: number,
    name: string,
    rating: number,
    reviews: number,
    priceRange: PriceRange,
    image: string
  ) {
    this.id = id;
    this.name = name;
    this.rating = rating;
    this.reviews = reviews;
    this.priceRange = priceRange;
    this.image = image;
  }
}

export class HotelDetails {
  public id: number;
  public name: string;
  public rating: number;
  public reviews: number;
  public image: string;
  public email: string;
  public link: string;
  public website: string;
  public address: string;
  public phone: string;

  constructor(
    id: number,
    name: string,
    rating: number,
    reviews: number,
    image: string,
    email: string,
    link: string,
    website: string,
    address: string,
    phone: string
  ) {
    this.id = id;
    this.name = name;
    this.rating = rating;
    this.reviews = reviews;
    this.image = image;
    this.email = email;
    this.link = link;
    this.website = website;
    this.address = address;
    this.phone = phone;
  }
}
