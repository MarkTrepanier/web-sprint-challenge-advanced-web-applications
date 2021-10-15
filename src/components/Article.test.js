import React from 'react';
import '@testing-library/jest-dom';

import {screen, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const testArticle={
        id: 5,
        headline: "Testing",
        createdOn: '11/11/11',
        author:"beginner",
        image: 134,
        summary: "Triple-digit temperatures led to a spike in demand across the region.",
        body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
    }
    const testArticleNoAuthor={
        id: 5,
        headline: "Testing",
        createdOn: '11/11/11',
        author:"",
        image: 134,
        summary: "Triple-digit temperatures led to a spike in demand across the region.",
        body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
    }

    const mockdel = jest.fn();
    const mockedsel = jest.fn();


test('renders component without errors', ()=> {
    render(<Article key={testArticle.id} article={testArticle} handleDelete={mockdel} handleEditSelect={mockedsel}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article key={testArticle.id} article={testArticle} handleDelete={mockdel} handleEditSelect={mockedsel}/>)
    const headline = screen.queryByTestId('headline')
    const author = screen.queryByTestId('author')
    expect(headline).toHaveTextContent('Testing')
    expect(author).toHaveTextContent('beginner')
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article key={testArticleNoAuthor.id} article={testArticleNoAuthor} handleDelete={mockdel} handleEditSelect={mockedsel}/>)
    const headline = screen.queryByTestId('headline')
    const author = screen.queryByTestId('author')
    expect(headline).toHaveTextContent('Testing')
    expect(author).toHaveTextContent('Associated Press')
});

test('executes handleDelete when the delete button is pressed', ()=> {
    render(<Article key={testArticleNoAuthor.id} article={testArticleNoAuthor} handleDelete={mockdel} handleEditSelect={mockedsel}/>)
    const delBtn = screen.getByTestId('deleteButton');
    userEvent.click(delBtn);
    expect(mockdel.mock.calls.length).toBe(1);
});

//Task List:
//1. Complete all above tests. Create test article data when needed.w