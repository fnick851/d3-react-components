import { sampleSize, random } from 'lodash'

const generateCircles = (collection: number[]) => {
  return sampleSize(collection, random(1, collection.length))
}

export default generateCircles
