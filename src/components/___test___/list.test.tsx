import React from 'react';
import ListCards from '../List';
import * as ReactDOM from 'react-dom';
import { render, screen, cleanup} from '@testing-library/react'

describe('List component tests' , () => {

    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        // eslint-disable-next-line testing-library/no-render-in-setup
        ReactDOM.render(<ListCards />, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', ()=> {
        // eslint-disable-next-line testing-library/no-node-access
        const inputs = container.querySelectorAll('input')
        expect(inputs).toHaveLength(1);
        expect(inputs[0].name).toBe('query');
    });
    
    // it('Renders correctly initial document with data-test', ()=> {
    //     expect(container.querySelector("[data-test='query-input']")).toBeInTheDocument();
    // })

})
