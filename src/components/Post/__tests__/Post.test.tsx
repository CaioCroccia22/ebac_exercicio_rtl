import '@testing-library/jest-dom';
import {describe, expect, test} from '@jest/globals';
import { render, screen } from "@testing-library/react";
import Post from '..';

describe('Renderização do componente', () => {
    test('Verificar o que ta escrito', () => {
        // 1- renderizar o elemento
        render(<Post 
                imageUrl="https://s2-autoesporte.glbimg.com/H-lhFgCZfWn6guPS4cLPYo6SVIc=/0x0:1980x1195/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2024/d/q/GRRTZcToyhmar43bpSMA/batmovel-tumbler-dianteira-estatica.jpg">
                Olha só que legal minha miniatura do Batmóvel.
                </Post>
        )

        // 2- leitura do dom
        // eslint-disable-next-line jest/valid-expect
        expect(screen.getAllByTestId('imagem'))
    })
})