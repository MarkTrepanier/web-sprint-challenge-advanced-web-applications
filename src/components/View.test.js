import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';
import mockArticleService from '../services/articleServices';
jest.mock('../services/articleServices')

const testArticlesNone=[]
const testArticles=[
    {
        id: 5,
        headline: "Testing",
        createdOn: '11/11/11',
        author:"beginner",
        image: 134,
        summary: "Triple-digit temperatures led to a spike in demand across the region.",
        body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
    },
    {
        id: 6,
        headline: "Testing1",
        createdOn: '11/12/11',
        author:"beginner1",
        image: 134,
        summary: "Triple-digit temperatures led to a spike in demand across the region.",
        body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
    },
    {
    id: 7,
    headline: "Testing2",
    createdOn: '11/13/11',
    author:"beginner2",
    image: 134,
    summary: "Triple-digit temperatures led to a spike in demand across the region.",
    body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
    }
]

test("renders zero articles without errors", async () => {
    mockArticleService.mockResolvedValue();
    render(<View/>)

});

// test("renders three articles without errors", async ()=> {
//     mockArticleService.mockResolvedValueOnce(testArticles);
//     render(<View/>)
// });

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.