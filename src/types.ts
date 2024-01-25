export type FBEvent = {
  eventName: string
  eventId?: string
  emails?: Array<string> | null
  phones?: Array<string> | null
  firstName?: string
  lastName?: string
  country?: string
  city?: string
  zipCode?: string
  contentName?: string
  contentIds?: Array<string> | null
  products?: {
    sku: string
    quantity: number
  }[],
  numItems?:number
  contents?: Array<string> | null
  value?: number
  currency?: string
  enableStandardPixel?: boolean
  testEventCode?: string
};
