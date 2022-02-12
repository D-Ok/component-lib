import {VideoControllerType} from "../domain/types/VideoControllerType";

const videoController: VideoControllerType = (video, isPause) => {
  if (!video) return

  if (isPause) video.pause()
  else video.play()
}

export default videoController;
