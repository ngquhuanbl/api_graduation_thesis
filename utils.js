module.exports = {
  randomIntegerBetween: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getRandomColor: function() {
    const letters = '0123456789ABCD';
    let color = '#';
    let i = 0;
    for (i; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 14)];
    }
    return color;
  }
}