import { render, screen } from '@/test-utils';
import { EmptyState } from './EmptyState';

describe('EmptyState component', () => {
  it('has correctly renderred', () => {
    render(<EmptyState searchText="Hello World" />);
    expect(screen.getByAltText('Empty Data')).toHaveAttribute('src', '/assets/icons/empty-trash.svg');
    expect(screen.getByText('Search for "Hello World" was not found')).toBeInTheDocument();
    expect(screen.getByText('Please try again with different title.')).toBeInTheDocument();
  });
});
