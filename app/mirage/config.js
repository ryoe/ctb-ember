export default function() {
  let awards = [
    { event: 'Thirsty Orange', year: 2016, category: 'Peoples Choice', beer: 'details about Steve...', place: '2nd', details: '' },
    { event: 'Kingsport Oktoberfest', year: 2015, category: 'Best Lineup', beer: null, place: '1st', details: '' },
    { event: 'Kingsport Oktoberfest', year: 2015, category: 'Fruit Beer', beer: 'Misty Melon Watermelon Kolsh', place: '1st', details: '' }
  ];

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

  this.get('/beers', function(db, request){
    if (request.queryParams.awardwinner === 'true') {
      let awardWinners = beers.filter(function(beer){
        return beer.awardwinner === true;
      });

      return {
        data: toJsonAPI('beers', awardWinners)
      }
    } else {
      return {
        data: toJsonAPI('beers', beers)
      };      
    }
  });

  this.get('/bios', function(){
    return {
      data: toJsonAPI('bios', team)
    };
  });

  this.get('/awards', function(){
    return {
      data: toJsonAPI('awards', awards)
    };
  });


}