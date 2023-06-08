function capitalize(word) {
  let firstLetter = word.charAt(0).toUpperCase();
  let text = word.split("")
  text[0] = firstLetter
  return text.join("")
} 

module.exports = capitalize;