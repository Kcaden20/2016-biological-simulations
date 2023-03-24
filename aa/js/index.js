var cyclic = new terra.Terrarium(200, 200);

terra.registerCA({
  type: 'cyclic',
  colors: ['255,0,0,1', '255,96,0,1', '255,191,0,1', '223,255,0,1', '128,255,0,1', '32,255,0,1', '0,255,64,1', '0,255,159,1', '0,255,255,1', '0,159,255,1', '0,64,255,1', '32,0,255,1', '127,0,255,1', '223,0,255,1', '255,0,191,1', '255,0,96,1'],
  colorFn: function () { return this.colors[this.state];},
   process: function (neighbors, x, y) {
    var next = (this.state + 1) % 2;
    var changing = neighbors.some(function (spot) {
      return spot.creature.state === next;
    });
    if (changing) this.state = next;
    return true;
  }
}, function () {
  this.state = Math.floor(Math.random() * 500);
});

cyclic.grid = cyclic.makeGrid('cyclic');
cyclic.animate();