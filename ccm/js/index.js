terra.registerCreature({
  type: 'cell one',
  color: [168, 0, 157],
  sustainability: 6,
  actionRadius: 4, 
  reproduceLv: 1
});

terra.registerCreature({
	type: 'cell two',
	color: [168,50,0],
	sustainability: 5, 
	reproduceLv: .8,
	size: 100
});

terra.registerCreature({
  type: 'cell three',
  color: [181, 166, 0],
  size: 10,
  reproduceLv: 0.8,
  wait: function() { this.energy += 3; },
  move: false
});


terra.registerCreature({
  type: 'cell four',
  color: [0, 181, 48],
  size: 10,
  reproduceLv: 0.8,
  wait: function() { this.energy += 3; },
  move: false
});

// initialize our environment
var ex1 = new terra.Terrarium(20, 20, {id: 'ex1',
	trails:.1,
	 background: [255, 255, 255],
	 cellSize: 10,
	 neighborhood: 'vonNeumann'
});
ex1.grid = ex1.makeGridWithDistribution([['cell one', 25], ['cell two', 25], ['cell three', 25], ['cell four', 25]]);

ex1.animate();