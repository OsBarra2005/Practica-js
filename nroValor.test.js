spin=Math.floor(Math.random()*(11-5)+5);
test('El valor sera mayor o igual 37*5', () => {
    expect(spin).toBeGreaterThanOrEqual(37*5);
  });

 

test('El valor esperado ha de ser menor o igual 37*10', () => {
    expect(spin).toBeLessThanOrEqual(37*10);
});