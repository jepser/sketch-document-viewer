import { mount } from 'enzyme';
import Artboard from './artboard';
import Link from 'next/link';

const BASE_PROPS = {
  id: 'ab10',
  name: 'Super artboard',
  thumbnail: 'https://sketch.cloud/image.jpg',
  documentId: 'aaa'
};

const mountComponent = props => mount(<Artboard {...BASE_PROPS} />);

describe('Artboard', () => {
  it('should have a name', () => {
    const wrapper = mountComponent();

    expect(
      wrapper
        .find('[data-qa="artboard-name"]')
        .last()
        .text()
    ).toBe('Super artboard');
  });

  it('should have a image with the correct src and alt', () => {
    const wrapper = mountComponent();
    const image = wrapper.find('[data-qa="artboard-image"]').last();

    expect(image.prop('alt')).toBe('Super artboard');
    expect(image.prop('src')).toBe('https://sketch.cloud/image.jpg');
  });

  it('should have a link with the href to the artboard id', () => {
    const wrapper = mountComponent();

    expect(wrapper.find(Link).prop('href')).toBe('/aaa/artboard/ab10');
  });
});
