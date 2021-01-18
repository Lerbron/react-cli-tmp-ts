import getSearchParams from './getSearchParams'
import { getLang } from './storage'

export default () => {
  let params= getSearchParams()
  if (params.lang) {
    return params.lang
  }
  let lang= getLang() || 'en'
  return lang
}