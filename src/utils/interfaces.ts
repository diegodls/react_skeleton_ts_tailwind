export interface RandomUserResponse {
  results: RandomUserResult[];
  info: RandomUserInfo;
}

export interface RandomUserResult {
  gender: string;
  name: RandomUserName;
  location: Location;
  email: string;
  login: RandomUserLogin;
  dob: RandomUserDob;
  registered: RandomUserRegistered;
  phone: string;
  cell: string;
  id: RandomUserId;
  picture: RandomUserPicture;
  nat: string;
}

export interface RandomUserName {
  title: string;
  first: string;
  last: string;
}

export interface RandomUserLocation {
  street: RandomUserStreet;
  city: string;
  state: string;
  country: string;
  postcode: any;
  coordinates: RandomUserCoordinates;
  timezone: RandomUserTimezone;
}

export interface RandomUserStreet {
  number: number;
  name: string;
}

export interface RandomUserCoordinates {
  latitude: string;
  longitude: string;
}

export interface RandomUserTimezone {
  offset: string;
  description: string;
}

export interface RandomUserLogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface RandomUserDob {
  date: string;
  age: number;
}

export interface RandomUserRegistered {
  date: string;
  age: number;
}

export interface RandomUserId {
  name: string;
  value?: string;
}

export interface RandomUserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface RandomUserInfo {
  seed: string;
  results: number;
  page: number;
  version: string;
}
