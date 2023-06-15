/* eslint-disable import/no-extraneous-dependencies */
import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/componentRender/componentRender';
import { SideBar } from './SideBar';

describe('SideBar', () => {
  test('test render', () => {
    componentRender(<SideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    componentRender(<SideBar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
