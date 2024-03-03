import { LocationPosition } from './position.model';

export class Location {
  constructor(
    public id: string,
    public userId: string,
    public imageUrl: string,
    public date: string,
    public title: string,
    public description: string,
    public entrytime: string,
    public genre: string,
    public price: number,
    //public location: string,
    public position: LocationPosition
  ) {}
}
