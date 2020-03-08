import { mount } from 'enzyme';

import ArtboardImage from '@components/artboard-image';
import ArtboardViewer from './artboard-viewer';

const onPreviousMock = jest.fn();
const onNextMock = jest.fn();
const BASE_PROPS = {
  files: [
    {
      url: '1.jpg',
      width: 200
    },
    {
      url: '2.jpg',
      width: 300
    }
  ],
  name: 'Super artboard'
};

const mountComponent = props =>
  mount(<ArtboardViewer {...BASE_PROPS} {...props} />);

describe('ArtboardViewer', () => {
  it('should not render anything if files are not provided', () => {
    const wrapper = mountComponent({ files: [] });

    expect(wrapper.isEmptyRender()).toBeTruthy();
  });
  it('should render the ArtboardImage with the src, srcSet and alt props', () => {
    const wrapper = mountComponent();

    expect(wrapper.find(ArtboardImage).props()).toMatchObject({
      src: '1.jpg',
      srcSet: '1.jpg 200,2.jpg 300',
      alt: 'Super artboard'
    });
  });
});
