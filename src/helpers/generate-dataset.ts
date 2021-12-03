import { random } from 'lodash'

const generateDataset = () =>
  Array(10)
    .fill(null)
    .map(() => [random(1, true) * 80 + 10, random(1, true) * 35 + 10])

export default generateDataset
