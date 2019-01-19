
const blogAside = document.querySelector('.blog__aside');
const articles = document.querySelectorAll('.blog__article__item');
const links = document.querySelectorAll('.blog__nav__link');
const blogList = document.querySelector('.blog__nav__list');

links[0].parentElement.classList.add('is-active');

function windowScroller(reqmove, duration) {
    const requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame
    window.requestAnimationFrame = requestAnimationFrame
  
    const scrollHeight = window.scrollY
    const diffY =
      scrollHeight < reqmove
        ? reqmove - scrollHeight
        : -1 * (scrollHeight - reqmove)
  
    const animate = (draw, duration) => {
      const start = performance.now()
      requestAnimationFrame(function move(time) {
        let timePassed = time - start
        if (timePassed > duration) timePassed = duration
        draw(timePassed)
        if (timePassed < duration) requestAnimationFrame(move)
      })
    }
  
    animate(timePassed => {
      window.scroll(0, scrollHeight + diffY * Math.min(timePassed / duration, 1))
    }, duration)
}

function fixed() {
    if (blogAside.parentElement.getBoundingClientRect().top <= 0) {
        blogAside.classList.remove('blog__aside--absolute');
        blogAside.classList.add('blog__aside--fixed');
    } else {
        blogAside.classList.remove('blog__aside--fixed');
        blogAside.classList.add('blog__aside--absolute');
    }
}

function checkCurrentArticle() {
    for (let i = 0; i < articles.length; i++) {
        if (
            articles[i].getBoundingClientRect().y < 50 &&
            articles[i].getBoundingClientRect().y > 
              -articles[i].getBoundingClientRect().height
           ) {
            const prevArticle = links[i].parentElement.previousElementSibling;
            const nextArticle = links[i].parentElement.nextElementSibling;

            if (prevArticle) {
                prevArticle.classList.remove('is-active');
            }
            if (nextArticle) {
                nextArticle.classList.remove('is-active');
            }

            links[i].parentElement.classList.add('is-active');
        }
    }
}

function toArticle(name) {
    for (let item of articles) {
        if (name === item.dataset.name) {
            let scrollPos = item.getBoundingClientRect().top + window.scrollY
            windowScroller(scrollPos, 300)
        }
    }
}

blogList.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('blog__nav__link') && !e.target.parentElement.classList.contains('is-active')) {
        toArticle(e.target.getAttribute('data-name'));
    }
});

fixed();

window.addEventListener("scroll", e => {
    fixed();
    checkCurrentArticle();
});