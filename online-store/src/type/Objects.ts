export interface filterObjectType {
  amount: number[];
  brand?: string;
  gender?: string[];
  group?: string;
  popularity?: boolean;
  price: number[];
  volume?: number;
  year: number[];
  name?: string;
}
export interface statusObjectType {
  amount?: boolean;
  brand?: boolean;
  gender?: boolean;
  group?: boolean;
  popularity?: boolean;
  price?: boolean;
  volume?: boolean;
  year?: boolean;
  name?: boolean;
}

export interface goodElemType {
  amount: number;
  brand: string;
  gender: string[];
  group: string;
  name: string;
  popularity: boolean;
  price: number;
  url: string;
  volume: number;
  year: number;
}
