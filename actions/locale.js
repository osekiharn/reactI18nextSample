export const CHANGE_LOCALE = 'CHANGE_LOCALE'

export function changeLocale(lang) {
  return {
    type: CHANGE_LOCALE,
    payload: lang
  }
}
