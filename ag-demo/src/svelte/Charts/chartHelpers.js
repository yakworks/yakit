export { default as themeColors } from '@yakit/ag/src/themeColors'

export const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary');

export const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-secondary');

export const randomizeArray = function(arg) {
  var array = arg.slice()
  var currentIndex = array.length; var temporaryValue; var randomIndex

  while (currentIndex !== 0) {

    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
