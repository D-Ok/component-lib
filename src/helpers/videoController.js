export default (video, isPause) => {
  if (!video) return

  if (isPause) video.pause()
  else video.play()
}
