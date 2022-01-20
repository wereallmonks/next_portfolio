export const projects = [
  {
    id: "1",
    title: "Valencia Volleyball",
    description:
      "A website built utilizing Gatsby frontend with Strapi as the source for the headless CMS",
    summary:
      "For this High School Voleyball wesbite, the data used to populate the properties of the content types formulated in Strapi, not only to render in the pages, but also depending on the content type, had to programmatically create pages from the provided data fields. This was achieved by creating a gatsby-node.js file and utilizing the slug generated in Strapi to create pages in Gatsby. Additionally, the Cloudinary API was installed to handle all median assets uploaded by the client in Strapi. The utility framework TaildwindCSS was used for the styling within Gatsby.",
    projectUrl: "https://www.valenciavolleyball.com/",
    stack: ["Gatsby.js", "React", "Strapi CMS", "Tailwind CSS"],
    image:
      "https://res.cloudinary.com/dsfa5pvfb/image/upload/v1642549298/screely-vikings-screenshot1_tuwtsj.png",
  },
  {
    id: "2",
    title: "Is it a Palindrome?",
    description: "A Ruby web application to detect Palindromes.",
    summary:
      "In this project, one important step was creating and then publishing a gem based on my palindrome detector. This allowed me to test my code using TDD (test-driven development) for my Ruby ecosystem. My Ruby gem was then used for my final project and is also available for public use. Sinatra is used as the back-end web application to handle any form submission in my web app.",
    projectUrl: "https://morning-depths-84327.herokuapp.com/",
    stack: ["Ruby", "Sinatra"],
    image:
      "https://res.cloudinary.com/dsfa5pvfb/image/upload/v1642550674/screely-palindrome_wa4du0.png",
  },
  {
    id: "3",
    title: "React Piano",
    description: "This is a piano app using React hooks.",
    summary:
      "A React app that utilizes the soundfont-player (a soundfont loader/player to play MIDI sounds using WebAudio API). By creating the two components, AudioContext and AudioPlayer, the audio context and instrument name are used to create notes and finally play the instrument using a Piano file within the App.js file.",
    projectUrl: "https://github.com/wereallmonks/react-piano",
    stack: ["React"],
    image:
      "https://res.cloudinary.com/dsfa5pvfb/image/upload/v1642550881/screely-react-piano_vfnk4j.png",
  },
  {
    id: "4",
    title: "Weather App",
    description:
      "This app utilizes the OpenWeatherMap API and Node.js and allows a user to search the weather of any city",
    summary:
      "In this app, the backend will hold our server code that will take in information from our front-end client.",
    projectUrl: "https://github.com/wereallmonks/Weather_app",
    stack: ["Node.js"],
    image:
      "https://res.cloudinary.com/dsfa5pvfb/image/upload/v1629138950/Screen_Shot_2021-08-16_at_11.34.52_AM_eudj9y.png",
  },
  {
    id: "5",
    title: "This Thriving Life",
    description:
      "Lifestyle blog which uses a decoupled custom Wordpress build as the backend CMS and Gatsby for front end.",
    summary:
      "This Thriving Life is a lifestyle blog built with a decoupled CMS using Wordpress and Gatsby. Extensive use of GraphQL as well as Algolia for search and Disqus for comments have been added to the build. The site is styled with TailwindCSS and uses React carousel and reveal plugins for better UX.",
    projectUrl: "https://github.com/wereallmonks/thriving_life",
    stack: ["Gatsby.js", "React", "Wordpress", "TailwindCSS"],
    image:
      "https://res.cloudinary.com/dsfa5pvfb/image/upload/v1642637028/screely-tl_ngej4u.png",
  },
];
