export class Link {

  id: number;
  address: string;
  title: string;
  type: string;
  dateAdded: Date;
  tags: string[];

  constructor(id: number,
    address: string,
    title: string,
    type: string,
    dateAdded: Date,
    tags: string[]
  ){
    this.id = id;
    this.address = address;
    this.title = title;
    this.type = type;
    this.dateAdded = dateAdded;
    this.tags = tags;
  }
}

