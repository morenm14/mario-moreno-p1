(function(){

var data = [
    {
        name: "1. All Nighter",
        description: "Stay focused with electronic and trap beats.",
        creator: "Spotify",
        songs: 83,
        likes: 296716,
        selector: "p1"
    },
    {
        name: "2. Class of 2020",
        description: "Your very own time capsule: A nostalgic look back on the past four years.",
        creator: "Spotify",
        songs: 100,
        likes: 46137,
        selector: "p2"
    },
    {
        name: "3. Make Out Jams",
        description: "Set the mood just right.",
        creator: "Spotify",
        songs: 59,
        likes: 716263,
        selector: "p3"
    },
    {
        name: "4. Study Break",
        description: "Discover new artist while you take a break.",
        creator: "Spotify",
        songs: 75,
        likes: 314586,
        selector: "p4"
    },
    {
        name: "5. Deep Study",
        description: "Deep beats to study to.",
        creator: "Spotify",
        songs: 80,
        likes: 3204,
        selector: "p5"
    }
];

    function Package (data){
        this.name = data.name;
        this.description = data.description;
        this.creator = data.creator;
        this.songs = data.songs;
        this.likes = data.likes;
        this.selector = data.selector;

        this.getFormattedLikes = function () {
            return this.likes.toLocaleString();
        };
    };
/***************************************
* Utility Functions
****************************************/
    
    var getTodaysDate = function () {
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function(id){
        return document.getElementById(id);
    };

    var writePackageInfo = function(package){
        var selector = package.selector,
        nameEl = getEl(selector+ "-name"),
        descEl = getEl(selector + "-description"),
        songsEl = getEl(selector+ "-songs"),
        creatorEl = getEl(selector + "-creator"),
        likesEl = getEl(selector + "-likes");

        //write package data to DOM elements

        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        creatorEl.textContent = package.creator;
        songsEl.textContent = package.songs;
        likesEl.textContent = package.getFormattedLikes(); 
           
        
    };

    var dateEl = getEl("date");
        dateEl.textContent = getTodaysDate();

    var allNighter = new Package(data [0]);
    writePackageInfo(allNighter);
    var classOf= new Package(data [1]);
    writePackageInfo(classOf);
    var makeOut = new Package(data [2]);
    writePackageInfo(makeOut);
    var studyBreak = new Package(data [3]);
    writePackageInfo(studyBreak);
    var deepStudy = new Package(data [4]);
    writePackageInfo(deepStudy);
    
}());
