# UWBHackathon
This project was developed during the University of Washington Bothell (UWB) [2019 Hackathon: Hack the Internet](https://uwbhacks.com/) on April 19, 2019. The goal was to develop a web-based application. This one-day event lasted for 13 hours, including several workshops lead by industry professionals.

## Community Cookbook
The concept is a website where students can easily share and look up simple recipes - ones that don't require anything but common ingredients, common kitchen utensils, and little time. For this, we needed a website, including a home page, recipe submission form, and a way to view recipes.</br>
At the end of this 13-hour Hackathon, we demo'd an aesthetic and functional website that records very simple recipes submissions.</br>
Between the mixer, workshops, and final presentations, we spent about 8 hours working our project the day of the hackathon.</br>

For a quick overview, check out the [PDF of the slides that accompanied our demo](../blob/master/UWBHacks%20Presentation.pdf).

[**The Team**](#the-team)</br>
[**The Outcome**](#the-outcome)</br>
[**The Challenge**](#the-challenge)</br>
[**The Process**](#the-process)</br>
[**Statements from the Team**](#statements-from-the-team)</br>
[**Other Things We Learned**](#other-things-we-learned)</br>

### The Team
[**Andrew Wietecha**](https://github.com/ATecha) - input form, database, backend</br>
[**Cheng Kong**](https://github.com/ChengLoong) - web design, hosting and domain setup</br>
[**Haya**](https://github.com/hayam8) - web design, Javascript</br>

### The Outcome
[Community Cookbook](http://uwbhack.club/)</br>
*Note: The website may not be up anymore. We used DigitalOcean for domain and hosting, from the [GitHub Student Developer Pack](https://education.github.com/pack), which only provides trial/short-term hosting.</br>

Screenshot of homepage:
![Image of home page, showing image links, page text, and navigation menu](https://github.com/ATecha/UWBHackathon/blob/master/img/homepage.jpg?raw=true "Homepage")</br>

Screenshot of Firebase entries: </br>
![Image of a real database entries in Firebase real-time database](https://github.com/ATecha/UWBHackathon/blob/master/img/liveDBdemo.jpg?raw=true "database sample")

### The Challenge
Our team had enthusiasm, but (at the time of the Hackathon) little web design experience, and no backend knowledge. Fortunately, we all also have a passion for learning, and the curiosity to experiment - which is part of what hackathons are all about!

### The Process

###### Design
We had planned to use Bootstrap and nginx to speed up the web design process. Cheng spent some time reading up on Bootstrap, but ultimately decided on a simpler approach using HTML and CSS.
Haya built a clean Javascript navigation menu, and Cheng "prettified" our site by adding CSS and additional HTML to the bare-bones HTML skeleton Andrew provided.

###### Hosting
For hosting, we used a trial of DigitalOcean, available to student devs. Cheng set up the server following the directions from the student package, which tied this repo to the website. Unfortunately, this also means that for the backend to function, the API key is exposed. Andrew attempted to SSH into the host, seeing if direct uploads were possible (thus bypassing the repo). The host denied uploads, and while we could have spent time setting up another account, or messing with account permissions, we decided our time would be better spent focusing on the website's core functionality. The important part is that we had working hosting.</br>
We're aware that exposing an API key is a grave mistake, and should never, ever be done for production code. Ever. This was a quick, 1-day project, and we opted to focus primarily on functionality and learning new technologies. If/when this project is developed into something more long-term, the API would be first changed to an uncompromised one, and second, hidden from any public repo, including histories.

###### Backend
Since we're already using Javascript for parts of the website, Andrew thought maybe a small "database" could be stored and referenced as a JSON file. Without any JS experience, or experience with JSON files, he was unsure how to implement this idea.
He asked one of the many Mentors, Craig, for suggestions to this backend issue. Craig suggested [Firebase](https://firebase.google.com/), which provides a real-time, JSON-like database, and helped Andrew with the initial setup. Andrew spent most of his time figuring out how to get the form to correctly work with Firebase, learning about both Firebase and Javascript (with a bit of jQuery) in the process.</br>
Andrew also wanted to show that recipes could be retrieved from the database and displayed on a recipe page, but didn't get to this task before the demo.</br>
Future improvements Andrew would like to work on are: retrieve and display recipes, use human-meaningful keys for recipes, hide API key, allow multiple checkboxes submitted to "one" database value. On the form side: entry validation (such as limiting data type, string length).

### Statements from the Team
*"This was my first hackathon, and now I see why people love them so much! I had the chance to learn some new technologies I wouldn't have otherwise made time for. It was nice to be able to just experiment and learn - without the pressure of having to deliver a fully-functional product by some due date. It allowed me to just play around, explore, and improvise."* - Andrew

### Other Things We Learned
* **You can always simplify.** As we worked, we realized that what seemed like a minimum viable product was itself complex and could be pared down to even simpler features/functionality. We prioritized what provided minimum functionality, knowing that once a small version of a feature is working, it can be expanded on to build out to the original goal we had in mind.

* Making last-minute changes to master branch is a good exercise in **merge conflict resolution**
