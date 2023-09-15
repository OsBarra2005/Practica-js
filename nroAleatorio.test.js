spin=Math.floor(Math.random()*(11-5)+5);
test('valor esperado ser mayor o igual a 37,5', () => {
    expect(spin).toBeGreaterThanOrEqual(37*5);
  });

 

test('valor esperado sera menor o igual a 37*10', () => {
    expect(spin).toBeLessThanOrEqual(37*10);
  });

 