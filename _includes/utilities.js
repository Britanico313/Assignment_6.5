
function namerandom() {
  
    const names = ['Rhonda', 'Brian', 'Emily', 'Chloe', 'David', 'Patrick', 'Sophie', 'Adam', 'Kamdyn', 'Ethan', 'Ricardo'];
    
    return {
      
      get name() {
        
        return names[Math.floor(Math.random() * names.length)];
      },
    }
  }