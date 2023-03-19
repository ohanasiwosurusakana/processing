var windowSize=window.innerWidth;
document.documentElement.style.setProperty('--main_box_height',windowSize * (949/1425.0) + 'px');

window.onresize = function () {

    windowSize = window.innerWidth;
  
    document.documentElement.style.setProperty('--main_box_height',windowSize * (949/1425.0) + 'px');
};
