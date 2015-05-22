Files to Run:
Run home.html
typeSuggestions.html is for the search page
past.html is for the past results link

Process and Challenges/Bugs:
I spent a couple of hours deciding what I wanted to do for my final project, writing up the proposal, and setting up the User Interface and doing research into the questions I should ask for the quiz. It took me a while after trying to make the UI manually that I should just use Bootstrap, which was a lot easier and prettier. BootStrap is so cool! This took me 4 hours because of indecisiveness, trying to build the UI manually at first, and doing research on personaliy types.

I started off implementing home.html with its corresponding css and js files. The bug I encountered here was figuring out how to create a modal. I first tried just showing and hiding the results of the quiz, but that was ugly, and I ran into bugs there too. I also had trouble figuring out how I would keep track of values in the Model, whether I could just update on submit or update continuously with the ranges. I felt in the end that updating on submit was more efficient, but it wasn't working at first. This took 3 hours total.

I then implemented the search page for the personality types. I played with the idea of having the search actually go to a new page, and I started off doing this, but it didn't work out, since I couldn't find a way to get the input text from the Search. I decided to do the method of hiding and showing a div. Here I encountered a bug where the search input value in the text box kept returning undefined. (This took me another 3 hours.)

Lastly, I implemented LocalStorage to save past quiz results, so people can track how their results do or don't change, and to see if their is a pattern in the personalities that they are friends with. This took approximately another 2 hours. I decided later to keep track of friends' personality types too, which took longer, because I first tried to do this without creating a Backbone model, and then I realized it was a lot easier with Backbone.

I then spent another 1 hour fixing bugs and problems. (For instance I learned you can do .each for classes but not IDs in the updateFunction of home.js.) This project was fun because I learned how to use different libraries like Bootstrap, Leaflet, and Chart. I also was able to put together everything we learned this semester like Build.js (and use it on something other than Pokemon) and the AutoCompleter, and lastly see how JavaScript can be used for data visualization, which is personally something I am very interested in.

Things I learned:
Using libraries like Chart.js, Leaflet, Bootstrap
Using Backbone for things other than Pokemon
Understanding how to use html and css more