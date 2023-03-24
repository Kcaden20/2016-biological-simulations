terra.registerCreature({
  type: 'secondCreature',
  color: [120, 0, 240],
  sustainability: 6,
  actionRadius: 2, 
  reproduceLv: 1
});

terra.registerCreature({
	type: 'green',
	color: [255,255,0],
	sustainability: 5, 
	reproduceLv: .8
});

terra.registerCreature({
  type: 'simplePlant',
  color: [120, 0, 240],
  size: 10,
  reproduceLv: 0.8,
  wait: function() { this.energy += 3; },
  move: false
});

// initialize our environment
var ex1 = new terra.Terrarium(15, 15, {id: 'ex1'});
ex1.grid = ex1.makeGridWithDistribution([['secondCreature', 10], ['simplePlant', 50], ['green', 40]]);

ex1.animate();