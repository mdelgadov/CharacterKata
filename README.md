# CharacterKata

This is a kata built on and typescript, jasmine.


## Getting Started

* Clone this repository.
* Run `npm install` from the project root.
* Go to first stage: git checkout master
* run build: gulp
* run watch: gulp watch


The master branch is very basic, only an index.html, an app.ts, some scatered classes inherited by the original
project (https://github.com/xmakina/typescriptjasminegulp)

The class character.ts has the data and functions to self describe a given character.
The character.specs.ts tests the functions of the character.ts

The idea is to create a character that will speak on our application:

inigo: Hello, My name is Inigo Montoya, you killed my father, prepare to die...
daenerys: I'm Daenerys Targaryen Stormborn, queen of the andals and the first man...

In future stages, the app will show characters, allow them to talk and have pun lines regarding each other...
All of it doing using good old TDD.

Miguel Delgado