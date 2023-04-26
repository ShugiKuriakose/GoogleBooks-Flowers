## GoogleBooks-Flowers



- link

![Main Page](assets/MainPage.png)
![Book Details Modal](assets/BookDetailsModal.png)

---

## Requirements / Purpose

- MVP

- Fetch and display a list of books related to flowers from the following REST API: https://www.googleapis.com/books/v1/volumes?q=flowers
- Present the fetched data in a table, including book title, authors, and published date.
- Enable users to view more details of a selected book, such as title, subtitle, authors, image, and description.
- Encourage the candidates to showcase their creativity and add a personal touch to the application.
- Include a README file explaining the app's features and the creative elements introduced.

## Build Steps

- npm install
- npm run dev

---

## Features

- Single page react application with a header, search form and table to display the search results.

- Floral background and colors were used to match the theme as the main purpose of the app is to display flower related books.

- The landing page of the application consists of a table that fetches and displays a list of books related to flowers from the following REST API: https://www.googleapis.com/books/v1/volumes?q=flowers by default. If an error occurs while fetching data, the user will see a message indicating that an error has occurred, rather than the application appearing to do nothing. In case of search returning no results, a message is displayed to let the user know that no books were found for the particular search.  

- The data is presented in a table which includes the book title, authors, and published date. The fetched data in some cases have missing information. For example the author or published date may be missing. App handles the missing data by displaying error messages to let the user know that the information is not available. 
- The table headings are clickable and provides sorting functionality. Books can be sorted by title, author and published date. By default the sort order is ascending. The sort order alternates between ascending and descending with each click.

- The 'More Info' button enables users to view more details of a selected book such as title, image and description. Clicking on the button opens a modal which displays the details of the selected books.

- The table headings are clickable and provides sorting functionality. Books can be sorted by title, author and published date by clicking on the table headings.

- Book search feature enables user to search for books and displays the fetched results in the table.

---

## Known issues

- Sorting has errors because of missing information in the fetched data.

---

## Future Goals

- Implement data cleaning to fix errors in sorting.
- Add more tests to ensure robust performance

---

## What did you struggle with?

- The challenging part of this project was writing tests for each component because of lack of experience in this area.

---

# Technology

- React
- React Testing Library
- Typescript
- SCSS
