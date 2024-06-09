import { render, screen } from '@/test-utils';
import { CardAnime } from './CardAnime';

describe('CardAnime component', () => {
  it('has correctly renderred', () => {
    render(
      <CardAnime
        id={1}
        title="Test title"
        year={1994}
        desc="just a title"
        srcImg="https://cdn.myanimelist.net/"
        badges={['test', 'test2']}
      />
    );
    expect(screen.getByTestId('card-anime-image')).toHaveAttribute(
      'src',
      'https://cdn.myanimelist.net/'
    );
    expect(screen.getByTestId('card-anime-title')).toHaveTextContent('Test title (1994)');
    expect(screen.getByTestId('card-anime-desc')).toHaveTextContent('just a title');
    const allBadgesEl = screen.getAllByTestId('card-anime-badge');
    expect(allBadgesEl[0]).toHaveTextContent('test');
    expect(allBadgesEl[1]).toHaveTextContent('test2');
  });
});
