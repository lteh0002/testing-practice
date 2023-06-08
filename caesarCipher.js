function caesarCipher(str, shift) {
  const charArray = str.split('');
  const shiftedArray = charArray.map(char => {
    if (char.match(/[a-z]/i)) {
      const charCode = char.charCodeAt();
      let shiftedCode = charCode + shift;

      if (char.match(/[A-Z]/) && (shiftedCode > 90 || shiftedCode < 65)) {
        shiftedCode = (((shiftedCode - 65) % 26) + 26) % 26 + 65;
      } else if (char.match(/[a-z]/) && (shiftedCode > 122 || shiftedCode < 97)) {
        shiftedCode = (((shiftedCode - 97) % 26) + 26) % 26 + 97;
      }

      return String.fromCharCode(shiftedCode);
    }
    return char;
  });

  return shiftedArray.join('');
}

module.exports = caesarCipher;