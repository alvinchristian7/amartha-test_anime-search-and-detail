import { render, screen } from '@/test-utils';
import { ImageFill } from './ImageFill';

describe('ImageFill component', () => {
  it('has correctly renderred', () => {
    render(<ImageFill boxProps={{ w: 160, h: 160 }} src="/assets/icons/refresh-page.png" alt="Refresh Page" />);
    expect(screen.getByAltText('Refresh Page')).toHaveAttribute('src', '/assets/icons/refresh-page.png');
  });
});
