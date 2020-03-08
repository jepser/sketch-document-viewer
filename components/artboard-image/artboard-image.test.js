import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Artboard from './artboard-image';

const BASE_PROPS = {
  src: 'http://url.com/image.jpg',
  alt: 'image alt',
  srcSet: ''
};

const mountComponent = (props = {}) =>
  mount(<Artboard {...BASE_PROPS} {...props} />);

describe('Artboard', () => {
  it('should render the loading image while the image has not load', () => {
    const wrapper = mountComponent();

    expect(
      wrapper.find('[data-qa="artboard-image-loading"]').exists()
    ).toBeTruthy();
  });

  it('should not render the loading image when the image has loaded', async () => {
    const wrapper = mountComponent();
    const image = wrapper.find('img[data-qa="artboard-image"]');

    await act(async () => {
      image.prop('onLoad')();
    });

    wrapper.update();

    expect(
      wrapper.find('[data-qa="artboard-image-loading"]').exists()
    ).toBeFalsy();
  });
});
