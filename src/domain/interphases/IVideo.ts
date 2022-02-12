interface IVideo{
    videoUrl: string,
    playOnView: boolean,
    muted: boolean,
}

export interface IVideoContainer extends IVideo{
    className: string
}

export interface IVideoElement extends IVideo{
    isLoad: boolean
}
