export default function() {
  let beers = [
    { name: 'Brew 1', style: 'tasty', image: null, awardwinner: false },
    { name: 'Brew 2', style: 'awesome', image: null, awardwinner: true }
  ];

  let team = [
    { name: 'Steve Dedman', title: 'Head Brewer', image: null, details: 'details about Steve...' },
    { name: 'A guy not named steve', title: 'awesome', image: null, details: 'details about Steve...' }
  ];

  let toJsonAPI = function(type, data){
    var idx = 0;
    var list = data.map(function(val){
      idx++;
      return {
        id: idx,
        type: type,
        attributes: val
      };
    });

    return list;
  };

  this.get('/beers', function(){
    return {
      data: toJsonAPI('beers', beers)
    };
  });

  this.get('/bios', function(){
    return {
      data: toJsonAPI('bios', team)
    };
  });


}