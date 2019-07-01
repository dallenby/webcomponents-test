import { expect } from '@open-wc/testing';
import ImageGallery from '../src/image-gallery.js';

describe('<image-gallery>', () => {
  it('should in in the index', () => {
    expect(index.ImageGallery).to.equal(ImageGallery);
  });
})