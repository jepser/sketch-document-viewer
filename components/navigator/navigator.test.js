import { mount } from 'enzyme';
import Navigator from './navigator';
import Link from 'next/link';

const onPreviousMock = jest.fn();
const onNextMock = jest.fn();
const BASE_PROPS = {
  onPrevious: onPreviousMock,
  onNext: onNextMock,
  total: 10,
  current: 2
};

const mountComponent = props => mount(<Navigator {...BASE_PROPS} {...props} />);

describe('Navigator', () => {
  beforeEach(() => {
    onPreviousMock.mockClear();
    onNextMock.mockClear();
  });

  it('should render a previous button which calls onPrevious on click', () => {
    const wrapper = mountComponent();
    const button = wrapper.find('button[data-qa="navigator-previous-button"]');

    button.simulate('click');
    expect(onPreviousMock).toBeCalled();
  });

  it('should render a next button which calls onNext on click', () => {
    const wrapper = mountComponent();
    const button = wrapper.find('button[data-qa="navigator-next-button"]');

    button.simulate('click');
    expect(onNextMock).toBeCalled();
  });

  it('should render the total count frmo the total and current props', () => {
    const wrapper = mountComponent();
    const label = wrapper.find('[data-qa="navigator-counter"]');

    expect(label.text()).toBe('2 / 10');
  });
});
