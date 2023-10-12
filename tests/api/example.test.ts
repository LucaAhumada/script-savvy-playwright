import { test, expect } from '@playwright/test'
import { Library } from '../../src/api/client'
import { AxiosHttpClient } from '../../src/http/AxiosHttpClient'

const httpClient = new AxiosHttpClient('https://library-api.postmanlabs.com')
const library = new Library(httpClient, {
    type: 'API Key',
    keyName: 'api-key',
    value: 'postmanrulz',
})

// test('@API Response must return books', async () => {
//     await test.step('Send GET Request', async () => {
//         const response = await library.get('books');
//         expect(Array.isArray(response.data), 'Should receive an array').toBe(true);
//     });
// });

// test('@API Response must return a non-empty array with Books', async () => {
//     await test.step('Send GET Request', async () => {
//         const response = await library.get('books');
//         expect(response.data.length, 'Should receive a non-empty array').toBeGreaterThan(0);
//     });
// });

// test('@API book in response should have all necessary properties', async () => {
//     await test.step('Send GET Request', async () => {
//         const response = await library.get('books');

//         // The properties we expect to see in each book
//         const expectedProperties = ['id', 'title', 'author', 'genre', 'yearPublished', 'checkedOut', 'isPermanentCollection', 'createdAt'];

//         // We assume that the most recently created book is the first one in the array
//         const mostRecentBook = response.data[0];

//         // Check if each property exists in the mostRecentBook
//         for (let prop of expectedProperties) {
//             await test.step(`Should have property ${prop}`, async () => {
//                 const hasProperty = mostRecentBook.hasOwnProperty(prop);
//                 expect(hasProperty).toBe(true);
//             });
//         }
//     });
// });

// test('@API Add/Delete a book from the Library', async () => {
//     let bookId;

//     await test.step('Send POST Request', async () => {
//         const book = await library.post('books', {
//             title: "Playwright Automation",
//             author: "Luca Ahumada",
//             genre: "programming",
//             yearPublished: 2023
//         });
//         bookId = book.data.id;
//         expect(bookId).toBeTruthy();
//     });

//     await test.step('Send DELETE Request', async () => {
//         const response = await library.delete(`books/${bookId}`);
//         expect(response.status).toBe(204);
//     });

//     await test.step('Try to GET deleted book', async () => {
//         try {
//             await library.get(`books/${bookId}`);
//         } catch (error) {
//             const errorMessage = error.response.data.message;
//             expect(errorMessage).toContain(`Book with id '${bookId}' not found`);
//         }
//     });
// });
