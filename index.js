function receivesAFunction(callback) {
    callback(); // Call the provided function
  }
  const spy = chai.spy();
  receivesAFunction(spy);
  //expect(spy).to.have.been.called();
    
  function returnsANamedFunction() {
    // Define the named function
    function namedFunction() {
      // Do something
    }
  
    return namedFunction; // Return the named function
  }
  

  function returnsAnAnonymousFunction() {
    // Define an anonymous function
    return function() {
      // Do something
    };
  }
  