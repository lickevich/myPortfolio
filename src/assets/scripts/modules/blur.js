const blur = function() {
    const wrapper = document.querySelector('.reviews__feedback');
    const form = document.querySelector('.reviews__feedback__blur');

    return {
        set: function() {
            const imgWidth = document.querySelector('.reviews__back').offsetWidth,
                  positionLeft = -wrapper.offsetLeft,
                  positionTop = -wrapper.offsetTop,
                  blurCss = form.style;

            blurCss.backgroundSize = `${imgWidth}px auto`;
            blurCss.backgroundPosition = `${positionLeft}px ${positionTop}px`;
        }
    };
}

blur.set();

window.onresize = function() {
    blur.set();
}