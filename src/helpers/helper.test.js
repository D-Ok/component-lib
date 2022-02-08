import videoController from './videoController'
import numberToText from './numberToText'

describe('helpers', () => {

  describe('videoController', () => {
    let videoEl;
    let pause ;
    let play ;

    beforeEach( () => {
      videoEl = document.createElement('video')

      pause = jest
          .spyOn(window.HTMLMediaElement.prototype, 'pause')
          .mockImplementation(() => {})

      play = jest
          .spyOn(window.HTMLMediaElement.prototype, 'play')
          .mockImplementation(() => {})
    })

    it('Should be available to pause ', () => {
      videoController(videoEl, true);

      expect(pause).toBeCalled();
      expect(play).not.toBeCalled();
    })

    it('Should be available to play ', () => {
      videoController(videoEl);

      expect(pause).not.toBeCalled();
      expect(play).toBeCalled();
    })
  })

  describe('numberToText', () => {

    it('Should not be changed if less 1000', () => {

      const numbers = [999, 0, -1];
      numbers.forEach((n) => {
        let result = numberToText(n)
        expect(result).toBe(n);
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

