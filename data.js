export const projects = [
  {
    id: "1",
    title: "Valencia Volleyball",
    description:
      "A website built utilizing Gatsby frontend with Strapi as the headless CMS",
    summary:
      "In this project, Tailwind CSS was used for stylizing the pages within Gatsby. The data used to populate the properties of the content types formulated in Strapi, not only had to render in the pages, but also depending on the content type, had to programmatically create pages from that data. This was achieved by creating a gatsby-node.js file and utilizing the slug generated in Strapi to create pages in Gatsby. Additionally, the Cloudinary API was for the media in Strapi.",
    projectUrl: "https://www.valenciavolleyball.com/",
    stack: ["Gatsby.js", "React", "Strapi CMS", "Tailwind CSS"],
    image:
      "https://res.cloudinary.com/dsfa5pvfb/image/upload/c_limit,h_666/v1616453917/valencia_vb.jpg?mw=600",
  },
  {
    id: "2",
    title: "Is it a Palindrome?",
    description: "A Ruby web application to detect Palindromes.",
    summary:
      "In this project, one important step was creating and then publishing a gem based on my palindrome detector. This allowed me to test my code using TDD (test-driven development) for my Ruby ecosystem. My Ruby gem was then used for my final project and is also available for public use. Sinatra is used as the back-end web application to handle any form submission in my web app.",
    projectUrl: "https://morning-depths-84327.herokuapp.com/",
    stack: ["Ruby"],
    image:
      "https://res.cloudinary.com/dsfa5pvfb/image/upload/v1629138943/Screen_Shot_2021-08-16_at_11.24.52_AM_a7gn6n.png",
  },
  {
    id: "3",
    title: "React Piano",
    description: "This is a piano app using React hooks",
    summary:
      "A React app that utilizes the soundfont-player (a soundfont loader/player to play MIDI sounds using WebAudio API). By creating the two components, AudioContext and AudioPlayer, the audio context and instrument name are used to create notes and finally play the instrument using a Piano file within the App.js file.",
    projectUrl: "https://github.com/wereallmonks/react-piano",
    stack: ["React"],
    image:
      "https://res.cloudinary.com/dsfa5pvfb/image/upload/v1629138942/Screen_Shot_2021-08-16_at_11.27.55_AM_pgpi5q.png",
  },
  {
    id: "4",
    title: "Weather App",
    description: "This app utilizes the OpenWeatherMap API and Node.js",
    summary:
      "In this app, the backend will hold our server code that will take in information from our front-end client.",
    projectUrl: "https://github.com/wereallmonks/Weather_app",
    stack: ["Node.js"],
    image:
      "https://res.cloudinary.com/dsfa5pvfb/image/upload/v1629138950/Screen_Shot_2021-08-16_at_11.34.52_AM_eudj9y.png",
  },
];
