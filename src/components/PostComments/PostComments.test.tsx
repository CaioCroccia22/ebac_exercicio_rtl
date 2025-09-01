import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';


describe('Teste para o componente PostComment', () => {
    it('Deve renderizar dois comentários corretamente', () => {
        render(<PostComment/>);
        expect(screen.getAllByTestId('text')).toHaveLength(2)
    });
});