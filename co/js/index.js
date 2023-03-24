terra.registerCreature({
  type: 'red cell',
  color: [255, 0, 0],
  sustainability: 6,
  actionRadius: 2, 
  reproduceLv: 1
});

terra.registerCreature({
	type: 'turq cell',
	color: [0,255,221],
	sustainability: 5, 
	reproduceLv: .8,
	size: 100
});

terra.registerCreature({
  type: 'blue cell',
  color: [0, 15, 181],
  size: 10,
  reproduceLv: 0.8,
  wait: function() { this.energy += 3; },
  move: false
});

// initialize our environment
var ex1 = new terra.Terrarium(15, 15, {id: 'odyssey',
	trails:1,
	 background: [22, 22, 22],
	 cellSize: 30
});
ex1.grid = ex1.makeGridWithDistribution([['red cell', 0], ['blue cell', 50], ['turq cell', 50]]);

ex1.animate();