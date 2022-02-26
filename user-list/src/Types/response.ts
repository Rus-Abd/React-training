export default interface response {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface ServerResponse {
  data: ServerData;
}
export interface ServerData {
  name: string;
  city: string;
  company: number;
}
export interface AxiosResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: any;

  request?: any;
}
