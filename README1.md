# Whether Weather

Developer: Kristian Colville

// insert responsive image here

[Visit Whether Weather](https://whetherweather96.netlify.app/)

## Table of Contents
* [Project Goals](#project-goals)
    * [Personal Goals](#personal-goals)
* [User Experience (UX)](#user-experience-ux)
    * [Target Audience](#target-audience)
* [Design](#design)
    * [Color Scheme](#color-scheme)
    * [Typography](#typography)
* [Technologies & Tools](#technologies--tools)
* [Languages Used](#languages-used)
* [Features](#features)
    * [Pages](#pages)
    * [Core Components](#core-components)
* [Data](#data)
* [Testing](#testing)
    * [Google Lighthouse Results](#google-lighthouse-results)
* [Bugs](#bugs)
* [Development & Deployment](#development--deployment)
    * [Version Control](#version-control)
    * [Cloning the Repository](#cloning-this-repository)
    * [Netlify](#netlify)
* [Credits](#credits)































## Development & Deployment

### Version Control

I used [Visual Studio Code](https://code.visualstudio.com/) as a local repository and IDE & [GitHub](https://github.com/) as a remote repository.

1. Firstly, I needed to create a new repository on Github [web-2-setu](https://github.com/KristianColville1/web-2-setu).
2. I opened that repository on my local machine by copying the URL from that repository and cloning it from my IDE for use.
3. Visual Studio Code opened a new workspace for me.
4. I created files and folders to use.
5. To push my newly created files to GitHub I used the terminal by pressing Ctrl + shift + `.
6. A new terminal opened and then I used the below steps.

    - `git add (name of the file)` *This selects the file for the commit*
    - `git commit -m "Commit message: (i.e. Initial commit)"` *Allows the developer to assign a specific concise statement to the commit*
    - `git push` *The final command sends the code to GitHub*

### Cloning this Repository

If you would like to clone this repository please follow the bellow steps.

Instructions:

1. Log into GitHub.  
2. Go to the repository you wish to clone.  
3. Click the green "Code" button.  
4. Copy the URL provided under the HTTPS option.  
5. Open your preferred IDE with Git installed.  
6. Open a new terminal window in your IDE.  
7. Enter the following command exactly: `git clone the-URL-you-copied-from-GitHub`.  
8. Press Enter.

### Netlify

I used [Netlify](https://www.netlify.com/) for deploying my project.

1. First, I created an account on [Netlify](https://www.netlify.com/).
2. I then connected my GitHub repository to Netlify by clicking the "New site from Git" button on the dashboard.
3. I selected GitHub as my provider and authorized Netlify to access my GitHub account.
4. I chose the repository I wanted to deploy from the list of my available options.
5. I made sure to specify the build command and publish directory. This project utilises the **_site** directory for static build.
6. After confirming the settings, I clicked "Deploy site."
7. Netlify then started building and deploying the project, and once finished, it provided a URL for accessing the live site.

Netlify also automatically set up continuous deployment. Any new changes pushed to the repository will trigger a new deployment on Netlify.


## Credits
* Bulma extension for toggle switch
* Initial weather code images that helped with initial start of project until release 3 weather code images: https://gist.github.com/stellasphere/9490c195ed2b53c707087c8c2db4ec0c
* Icons used where created by the author Freepick on Flaticon.