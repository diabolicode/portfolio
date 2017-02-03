var app = angular.module("website", []);
app.controller("portfolioController", function(){
    this.portfolio = myPortfolio;
});

var myPortfolio = [
    {
        id: 0,
        title: "Software development",
        img: "img/portfolio/cabin.png",
        description: "Created an extension in VS Code to help content developers iterate faster.",
        client: "Microsoft",
        date: "August 2016",
        tags: ["Software Development", "Typescript"]
    },
    {
        id: 1,
        title: "Music",
        img: "img/portfolio/cake.png",
        description: "Active on SoundCloud.com under LadyChatterley",
        client: "SoundCloud",
        date: "July 2015",
        tags: ["Music"]
    },
    {
        id: 2,
        title: "Artist",
        img: "img/portfolio/circus.png",
        description: "Created many paintings",
        client: "Priya",
        date: "April 2015",
        tags: ["Art"]
    },
    {
        id: 3,
        title: "Fashion Designer",
        img: "img/portfolio/game.png",
        description: "Learning to sew",
        client: "Priya",
        date: "March 2017",
        tags: ["Sewing"]
    }
];
