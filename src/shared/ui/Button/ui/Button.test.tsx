import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button ui component', () => {
    test('Рендерится без аргументов', () => {
        const text = 'click me';
        render(<Button>{text}</Button>);

        expect(screen.getByText(text)).toBeInTheDocument();
    });

    test('Рендерится с классом clear', () => {
        const text = 'click me';
        render(<Button theme={ThemeButton.CLEAR}>{text}</Button>);

        expect(screen.getByText(text)).toHaveClass('clear');
        // screen.debug();
    });
});
