(function(rxjs) {
  var notVisibleMsPerFrame = 10;

  var navbar = document.querySelector('#main-menu');
  var navbarY = navbar.offsetTop;

  var scrollPosition$ = rxjs.Observable.fromEvent(window, 'scroll')
      .debounceTime(notVisibleMsPerFrame)
      .map(function() { return window.scrollY; });

  scrollPosition$
    .filter(function(scrollY) { return scrollY >= navbarY; })
    .subscribe(function() {
      navbar.classList.add('fixed-top');
    });

  scrollPosition$
    .filter(function(scrollY) { return scrollY < navbarY; })
    .subscribe(function() {
      navbar.classList.remove('fixed-top');
    });
})(Rx);
