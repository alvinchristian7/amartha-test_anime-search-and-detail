import { fireEvent, render, screen } from '@/test-utils';
import { GeneralError } from './GeneralError';

describe('GeneralError component', () => {
  it('has correctly renderred', () => {
    const handleRetry = jest.fn();
    render(
      <GeneralError
        refetch={handleRetry}
      />
    );
    expect(screen.getByAltText('Refresh Page')).toHaveAttribute('src', '/assets/icons/refresh-page.png');
    expect(screen.getByText('Connection Timeout')).toBeInTheDocument();
    expect(screen.getByText("We're having trouble connecting to our servers. Please check your internet connection and try again.")).toBeInTheDocument();
    const buttonRetry = screen.getByText('Retry');
    expect(buttonRetry).toBeInTheDocument();
    fireEvent.click(buttonRetry);
    expect(handleRetry).toHaveBeenCalledTimes(1);
    expect(screen.getByText('Contact Support')).toBeInTheDocument();
  });
});
