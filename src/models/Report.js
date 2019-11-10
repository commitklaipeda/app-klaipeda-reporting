// @flow
export type ReportItem = {
  id: number,
  createdAt: number,
  title: string,
  content: string,
  address: string,
  thumbnail: string,
  images: string[],
  coordinates: {
    lat: number,
    lng: number,
  },
}
