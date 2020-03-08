import { mount } from 'enzyme';
import ArtboardHeader from './artboard-header';

import Navigator from '@components/navigator';

const BASE_PROPS = {
  title: 'NES screenshot',
  current: 1,
  total: 10,
  onNext: jest.fn(),
  onPrevious: jest.fn()
};

const mountComponent = props => mount(<ArtboardHeader {...BASE_PROPS} />);

describe('ArtboardHeader', () => {
  it('should have a title', () => {
    const wrapper = mountComponent();

    expect(wrapper.find('[data-qa="artboard-header-title"]').text()).toBe(
      'NES screenshot'
    );
  });

  it('should pass current, total, onNext and onPrevious props to the navigator', () => {
    const wrapper = mountComponent();

    expect(wrapper.find(Navigator).props()).toMatchObject({
      current: 1,
      total: 10,
      onNext: expect.any(Function),
      onPrevious: expect.any(Function)
    });
  });
});
