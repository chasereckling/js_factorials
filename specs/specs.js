describe('factorial', function(){

  it('return 120 for 5!', function(){
    expect(factorial(5)).to.equal(120);
  });

  it('returns 1 for 0', function(){
    expect(factorial(0)).to.equal(1);
  });
});
