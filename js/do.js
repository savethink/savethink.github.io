const srcs = [
  "https://savethink0711.gitee.io/source/video/1.avi",
  "https://savethink0711.gitee.io/source/video/2.avi",
  "https://savethink0711.gitee.io/source/video/3.avi",
];
function changeVal() {
  let voice = document.querySelector("#voice");
  let video = document.querySelector("#sp");
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
  let bofang = document.querySelector("#bofang");
  let video = document.querySelector("#sp");
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
  let bofang = document.querySelector("#bofang");
  let video = document.querySelector("#sp");
  let src = video.src;
  let index = srcs.indexOf(src);
  if (index == srcs.length - 1) {
    video.src = srcs[0];
  } else {
    video.src = srcs[index + 1];
  }
  //更改播放图标
  bofang.setAttribute("src", "./public/play.png");
}
