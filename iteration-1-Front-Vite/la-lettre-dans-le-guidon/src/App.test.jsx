import React from 'react';

import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';


import App from './App';

describe('App render tests', () => {
    test('Should render the app', () => {
        render(<App />);
        const linkElement = screen.getByText(
            /Salut je suis un futur site stylée de Vélo Litteraire/i,
        );
        expect(linkElement).toBeDefined();
    });
});