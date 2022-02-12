import videoController from './videoController'
import numberToText from './numberToText'

const videoControlsDefinition = {
  configurable: true,
  get () {
    setTimeout(() => (this.onloadeddata && this.onloadeddata()))
    return () => {}
  }
}

Object.defineProperty(global.window.HTMLMediaElement.prototype, 'play', videoControlsDefinition)
Object.defineProperty(global.window.HTMLMediaElement.prototype, 'pause', videoControlsDefinition)

describe('helpers', () => {

  describe('videoController', () => {
    let videoEl: HTMLVideoElement;

    beforeEach( () => {
      videoEl = document.createElement('video')
    })

    it('Should be available to pause ', () => {
      let pause = jest.spyOn(window.HTMLMediaElement.prototype, 'pause')
      let play = jest.spyOn(window.HTMLMediaElement.prototype, 'play')

      videoController(videoEl, true);

      expect(pause).toHaveBeenCalled();
      expect(play).not.toHaveBeenCalled();
    })

    it('Should be available to play ', () => {
      let play = jest.spyOn(window.HTMLMediaElement.prototype, 'play')

      videoController(videoEl, false);

      expect(play).toHaveBeenCalled();
    })
  })

  describe('numberToText', () => {

    it('Should not be changed if less 1000', () => {

      const numbers = [999, 0, -1];
      const expects = ['999', undefined, undefined];
      numbers.forEach((n, i) => {
        let result = numberToText(n)
        expect(result).toBe(expects[i]);
      })

    })

    it('Should not with k if less 1000000', () => {

      const numbers = [1000, 999999, 38087, 39999];
      const expects = ['1k', '999k', '38k', '39k'];

      numbers.forEach((n, i) => {
        let result = numberToText(n)
        expect(result).toBe(expects[i]);
      })

    })

    it('Should not with m if more 1000000', () => {

      const numbers = [1000000, 1111111111, 99999999];
      const expects = ['1m', '1111m', '99m'];

      numbers.forEach((n, i) => {
        let result = numberToText(n)
        expect(result).toBe(expects[i]);
      })

    })
  })

})

