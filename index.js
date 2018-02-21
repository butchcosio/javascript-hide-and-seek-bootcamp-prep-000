function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div.target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n) {
      var rankedLists = document.querySelectorAll('ul.ranked-list')
      for (let i = 0, l = rankedLists.length; i < l; i++) {
      rankedLists[i].innerHTML= parseInt(rankedLists[i].innerHTML+n)
      }
}
