# CSV Upload and Reader App

- An app which reads the csv file and display its content in tabular form.

## Technology used

- Ejs
- Express
- Node Js
- Jquery

## Features

- User can upload any csv file into the system - using Multer JS
- Display a list of all uploaded csv files - CSV is parsed and converted into JSON and stored in the Mongo Database
- When the user selects a file, it displays all the data (with column headers) in a table on the page (front
  end)
- There is a search box which searches on the front end itself and displays the matching rows
  of the table only (empty search box displays all the data).
- There is a sorting button (ascending and descending) for each column on the front end
- There is a validation on the front end and server side on being able to upload only csv
  type of files
- There is a pagination of the data displayed in the table to a max of 100 records per
  page

## Installation

- Simply pull the project files and install all the dependencies provided in package.json file. Once all the packages have installed successfully then go to terminal with correct directory of the project and give the command 'npm start', Project will start to run on local port 8000.
