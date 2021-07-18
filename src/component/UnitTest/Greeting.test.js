import { render,screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component',() => {
    test('renders Hello World as a text', () => {
        //Arrenge
        render(<Greeting />);
    
        //Act
    
        //Assert
        const helloWorldElement = screen.getByText(/Hello World/i, {exact: false});
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders It\' good to see you if button NOT clicked ', () => {
        //Arrenge
        render(<Greeting />);

        //Act

        //Assest
        const goodToSeeYouElement = screen.getByText("it's good to see you",{exact:false});
        expect(goodToSeeYouElement).toBeInTheDocument();
    })
    
    test('renders Changed! if the button was clicked', () => {
        //arrange
        render(<Greeting />);

        //act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //assets
        const goodToSeeYouElement = screen.getByText("Changed!");
        expect(goodToSeeYouElement).toBeInTheDocument();
    })
    
    test('does not renders It\'s good to see you if the button was clicked', () => {
        //arrege
        render(<Greeting />);

        //act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assest
        const goodToSeeYouElement = screen.queryByText(("It's good to see you"));
        expect(goodToSeeYouElement).toBeNull();
    })
    
});;

