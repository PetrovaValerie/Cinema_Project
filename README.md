<!-- LOGO -->
![Logo][logo]
<div align="center">
<a href="#title">
<h1>PIXEMA</h1>
</a>
Movie APP based on Kinopoisk API
<hr/>
<img src="https://shields.io/badge/react-black?logo=react&style=for-the-badge%22" alt="React badge">
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#description">Description</a>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li><a href="#details">Details</a></li>
  </ol>
</details>

<!-- DESCRIPTION -->
## Description
Pixema is a free movie database. The service provides following opportunities:

- watch through all movie database or serials specifically;
- search for movies and use filtering;
- look through detailed movie information and other similar movies;
- the users can authorize;
- change the application theme (dark/light).

<!-- INSTALLATION -->
## Installation
1. Clone the repository:
    `git clone https://github.com/PetrovaValerie/Cinema_Project.git`
2. Install dependencies:
    `npm install`
3. Start local server in your browser:
   `npm run start`

<!-- DETAILS -->
## Details
Once you started the app, you can see home page with all movies presented. 
You can switch between the movies/TV series views

![Home page][home]

To toggle between dark/light modes, click the switch at the footer

![Toggle themes][light-theme]

In order to use simple search at the top of the page, type in the search input area a movie title.
Or choose a category filter on the left side of the homepage.

By clicking at the movie card,the user can see detailed movie information

![Detailed information][single-card]

The user can also create an account (sign up / sign in / log out) by clicking on the "Register" button.

![Registration-form][register]


[🔼 Back to the Content ](#description)







[//]: # (Images)
[logo]: screens/logo.png
[home]: screens/homepage.png
[light-theme]: screens/lightmode.png
[single-card]: screens/single-card.png
[register]: screens/register.png