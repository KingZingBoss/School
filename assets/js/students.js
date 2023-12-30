function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var obj = document.getElementById(id);
    var starttime;
    var fn = (ms) => {
        let progress = 0;
        if(starttime === undefined) {
            starttime = ms;
        } else {
            progress = ms - starttime;
            if (progress >= duration) {
                // the `+ ' ' + progress + 'ms';` is just to show the duration, wouldn't use that in final code
                current = end.toLocaleString() + "+"  ;
            } else {
                current = start + Math.floor(progress/duration * range);
            }
        }
        obj.innerHTML = current.toLocaleString();
        if (progress < duration) {
            requestAnimationFrame(fn);
        }
    };
    requestAnimationFrame(fn);
}
animateValue('students', 0, 50, 3000);

function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var obj = document.getElementById(id);
    var starttime;
    var fn = (ms) => {
        let progress = 0;
        if(starttime === undefined) {
            starttime = ms;
        } else {
            progress = ms - starttime;
            if (progress >= duration) {
                // the `+ ' ' + progress + 'ms';` is just to show the duration, wouldn't use that in final code
                current = end.toLocaleString() + "+"  ;
            } else {
                current = start + Math.floor(progress/duration * range);
            }
        }
        obj.innerHTML = current.toLocaleString();
        if (progress < duration) {
            requestAnimationFrame(fn);
        }
    };
    requestAnimationFrame(fn);
}
animateValue('students2', 0, 50, 3000);