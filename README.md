# web-2-setu

tech tools allowed:
HTML
CSS
Bulma
JavaScript
Eleventy
Netlify

weather code images: https://gist.github.com/stellasphere/9490c195ed2b53c707087c8c2db4ec0c

## Overview:

Whether weather have kindly given access to use their new API.
Need to show the data by location. Received a data folder containing the api data.

## Requirements:

### Release 1: The Dashboard

* Create a dashboard that shows a list of cities and the weather using the weather codes
* Interacting with a city will bring you the City Focus page for that city
* It should be possible to get back to the dashboard from City Focus

Note: It is clear from the infographic picture of the assignment that we are expected to use parameter routing:
example: https://www.whether-weather.com/city-focus?city=berlin

### Release 2: User preferences

* A user should be able to select their favourite cities via a user preferences page
* These cities are highlighted (or separated) in some way in the dashboard
* Preferences are stored locally in the browser local storage so they are available on every visit
* Clearing the browser cache will clear the preference and that is what we want
* Note: Favourite Cities is only expected in this release

### Release 3: Impress Us

Use the data as you wish, show us what you can do
Suggestions:

* Add hourly summaries to City Focus
* Add preferences for wind speed and temp units
* Clicking on a day other than today in City Focus will open City Focus on that day
* Introduce “Feels Like” using (apparent temperature metric)
* Introduce wind gusts and other metrics that may be useful
* Selectable city on City Focus
* Default city on City Focus
* Default to “last seen city” on City Focus
* Navigation bar
* Up to you!

## Assignment Details

* Using JavaScript, HTML and CSS step through each release or iteration as shown previous and develop a weather forecasting website
* The website must use the data provided, you cannot add or remove data
* The website must be multiple pages of HTML, no single page webapps allowed
* The technologies you are allowed to use to develop your website itself are:
* HTML, CSS, Bulma, JavaScript, Eleventy, Netlify
* There is no server-side component, everything is client side apart from deployment on Netlify
* You cannot use libraries like React, Angular etc
* This assignment is worth 60% of your final grade

## Git

This repository tracks the iterative development of the weather forecasting website assignment for Whether Weather.

The structure supports multiple stages of delivery from Proof-of-Concepts (POC) to full Releases using branches and commits to document each phase of the work.

git checkout -b branch_name

git push --set-upstream origin branch_name

git checkout main

git pull origin branch_name

git push origin main

## Strategy

The assignment requires submitting multiple iterations of the same project:

- POC 1 ---> POC 3
- Release 1 ---> Release 3

My strategy is to:

* Initialize the repository with a solid foundation.
* Create a dedicated branch for each POC and Release.
* Ensure each branch builds upon the last, with meaningful, isolated commits representing real deliverable checkpoints.
* Use Eleventy with NunJucks for templating, Bulma for styling and implement a clear MVC architecture in JavaScript.

### My Timeline

Project Starting Point: April 6
Expected Final Submission: The week of May 18th (changes expected)
Approximate Project Duration: 6 weeks

Com

### Git Scope & Branching

| Branch | Description                  |
| ------ | ---------------------------- |
| main   | Stable Version Release Ready |
| poc1   | Proof of concept 1           |
| poc1   | Proof of concept 2           |
| poc1   | Proof of concept 3           |
|        |                              |
| rel1   | Release 1: Dashboard         |
| rel2   | Release 2: Preferences       |
| rel3   | Release 3: Impress Us        |

### Software Architecture

Will use JavaScript in an MVC pattern.

Models: Responsible for managing data
Views: Rendering the data onto the DOM
Controllers: Coordinating interactions
