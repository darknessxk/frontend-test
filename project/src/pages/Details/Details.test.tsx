import React from 'react';
import { render, screen } from '@testing-library/react';
import Comp from './index';

test('renders details component', () => {
    render(<Comp />);
});
