class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase(0) + string.slice(1);
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let firstWord = string.split(' ').slice(0, 1)
    let otherWords = string.split(' ').slice('1')
    let titleArr = []
    
    
    titleArr.push(this.capitalize(firstWord[0]))
    for(const word of otherWords) {
      if(!exceptions.includes(word)){
        titleArr.push(this.capitalize(word))
      }
      else {
        titleArr.push(word)
      }
    }
    return titleArr.join(' ')
  }

}