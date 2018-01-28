import _ from 'lodash'

export const images = (icon) => {
  return `https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/32@2x/icon/${_.toLower(icon)}@2x.png`
}

export const apiBaseURL = 'https://api.coinmarketcap.com'

export default {
  images,
  apiBaseURL
}
