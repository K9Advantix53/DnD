# DnD Planner (wip)

**DnD Planner** is a encyclopedia/character tracker for Dungeons and Dragons (5th ed.) [You can see this code in use here.](http://greylockdnd.herokuapp.com/) To run this code on your local machine:

```
$ git clone https://github.com/K9Advantix53/DnD.git
$ cd DnD
$ bundle install
$ rake db:create && rake db:migrate && rake db:seed
$ rails s
```
In a separate terminal window:
```
$ npm install
$ npm start
```

## Technologies in this Project
This project is built using **React on Rails**. This project was mainly a way for me to explore external APIs ([dnd 5e API](http://dnd5eapi.co/)) thouroughly. It also allowed me to learn some frontend features for React.js such as the conditional loaders based off of component state. Due to the incomplete nature of the [dnd 5e API](http://dnd5eapi.co/), I had to use some hack-y code to get all the data consistently.
