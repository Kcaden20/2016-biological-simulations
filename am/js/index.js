// using terra.js
// rileyjshaw.com/terra
var height = 400;
var width = 400;

var cyclic = new terra.Terrarium(width, height, {cellSize:20});

terra.registerCA({type: 'cyclic',
  colors: ['100,100,20,1', '205,90,1,1', '255,101,0,1', '223,255,0,1', '128,22,0,1', '32,255,0,1', '0,255,64,1', '0,15,59,1', '0,205,55,1', '0,159,255,1', '0,64,255,1', '32,0,255,1', '127,0,255,1', '223,0,255,1', '255,0,191,1', '255,0,96,1', '15,0,46,1', '205,200,6,1', '105,10,32,1', '50,220,222,1', '115,10,12,1', '52,40,52,1', '105,20,32,1', '45,30,42,1'],
  colorFn: function () { return this.colors[this.state];},
  process: function (neighbors, x, y) {
    var next = (this.state + 1) % 24;
    var changing = neighbors.some(function (spot) {
      return spot.creature.state === next;
    });
    if (changing) this.state = next;
    return true;
  }
}, function () {
  this.state = Math.floor(Math.random() * 24);
});

cyclic.grid = cyclic.makeGrid('cyclic');
cyclic.animate(800);

