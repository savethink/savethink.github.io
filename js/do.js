const srcs = [
  "https://cos.zhangyujie.top/ju.mp4",
  "https://cos.zhangyujie.top/ju2.mp4",
  "https://cos.zhangyujie.top/lin.mp4",
];
function changeVal() {
  var voice = document.querySelector("#voice");
  var video = document.querySelector("#sp");
  if (video.muted) {
    video.muted = false;
    voice.setAttribute("src", "./public/open.png");
  } else {
    video.muted = true;
    voice.setAttribute("src", "./public/close.png");
  }
}
//播放暂停
function ispaly() {
  var bofang = document.querySelector("#bofang");
  var video = document.querySelector("#sp");
  if (video.paused) {
    bofang.setAttribute("src", "./public/play.png");
    video.play();
  } else {
    bofang.setAttribute("src", "./public/pause.png");
    video.pause();
  }
}
//切换
function nextPaly() {
  var bofang = document.querySelector("#bofang");
  var video = document.querySelector("#sp");
  var src = video.src;
  var index = srcs.indexOf(src);
  if (index == srcs.length - 1) {
    video.src = srcs[0];
  } else {
    video.src = srcs[index + 1];
  }
  //更改播放图标
  bofang.setAttribute("src", "./public/play.png");
}
