var videoUrl = "https://raw.githubusercontent.com/corbella83/Video360/main/thundra/thundra360.m3u8";
var PanoViewer = eg.view360.PanoViewer;
var panoviewer = document.querySelector(".viewer");
var container = document.querySelector(".viewer .container");
var video = document.getElementById("video");
var btn = document.getElementById("play");

if (Hls.isSupported()) {
  var hls = new Hls();
  hls.loadSource(videoUrl);
  hls.attachMedia(video);
} else if (video.canPlayType("application/vnd.apple.mpegurl")) {
  video.src = videoUrl;
}

video.addEventListener("play", () => {
  var PanoViewer = eg.view360.PanoViewer;
  var container = document.querySelector(".container");
  var viewer = new PanoViewer(container, {
    video: video,
    projectionType: "equirectangular" });


  window.addEventListener("resize", function () {
    panoViewer.updateViewportDimensions();
  });

  document.querySelector(".play-container").style.display = "none";

  window.addEventListener("resize", function (e) {
    viewer.updateViewportDimensions();
  });

  PanoControls.init(panoviewer, viewer);
  PanoControls.showLoading();
});

document.querySelector(".play-container .play").addEventListener("click", function () {
  video.play();
});