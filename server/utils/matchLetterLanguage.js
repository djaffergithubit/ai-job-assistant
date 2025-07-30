const matchLetterLanguage = (letterLanguage) => {
  switch (letterLanguage) {
    case 'Français':
      return 'French';
    case 'Anglais':
      return 'English';
    case 'Espagnol':
      return 'Spanish';
    default:
      return 'English'; 
  }
}

module.exports = { matchLetterLanguage }