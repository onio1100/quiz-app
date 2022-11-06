import lionWav from "../sounds/lion.wav";
import gooseWav from "../sounds/goose.wav";
import dogWav from "../sounds/dog.wav";
import criketWav from "../sounds/criket.wav";
import birdsWav from "../sounds/birds.wav";
import cowJpg from "../pictures/cow.jpg"
import elephantJpg from "../pictures/elephant.jpg"
import giraffeJpg from "../pictures/giraffe.jpg"
import hippoJpg from "../pictures/hippo.jpg"
import zebraJpg from "../pictures/zebra.jpg"

// question types : text, audio, visual,
// path are writen from perspective of index.js not question sets
// question template
// {
//     question: "",
//     questionType: "",
//     answers: ["","","", ""],
//     properAnswer: "",
//     path: ,
//     alt: ""
// },
const kidsQuestionsSet = [
    {
        question: "What animal makes that sound?",
        questionType: "audio",
        answers: ["lion","koala bear","wolf", "black bear"],
        properAnswer: "lion",
        path: lionWav,
        alt: "none"
    },
    {
        question: "What animal makes that sound?",
        questionType: "audio",
        answers: ["goose","bees","lion", "cow"],
        properAnswer: "goose",
        path: gooseWav,
        alt: "none"
    },
    {
        question: "What animal makes that sound?",
        questionType: "audio",
        answers: ["dog","tiger","zebra", "bear"],
        properAnswer: "dog",
        path: dogWav,
        alt: "none"
    },
    {
        question: "What animal makes that sound?",
        questionType: "audio",
        answers: ["criket","bees","dog", "cow"],
        properAnswer: "criket",
        path: criketWav,
        alt: "none"
    },
    {
        question: "What animal makes that sound?",
        questionType: "audio",
        answers: ["bird","lion","goose", "giraf"],
        properAnswer: "bird",
        path: birdsWav,
        alt: "none"
    },
    {
        question: "What animal is on the picture?",
        questionType: "visual",
        answers: ["cow","duck","dog", "zebra"],
        properAnswer: "cow",
        path: cowJpg,
        alt: "animal with horns and patches"
    },
    {
        question: "What animal is on the picture?",
        questionType: "visual",
        answers: ["elephant","bear","lion", "whale"],
        properAnswer: "elephant",
        path: elephantJpg,
        alt: "animal with big ears and proboscis"
    },
    {
        question: "What animal is on the picture?",
        questionType: "visual",
        answers: ["giraffe","cow","bird", "tigger"],
        properAnswer: "giraffe",
        path: giraffeJpg,
        alt: "animal with long neck and patches"
    },
    {
        question: "What animal is on the picture?",
        questionType: "visual",
        answers: ["hippo","giraffe","wolf", "crocodile"],
        properAnswer: "hippo",
        path: hippoJpg,
        alt: "animal with short legs and big head which live in water and on land"
    },
    {
        question: "What animal is on the picture?",
        questionType: "visual",
        answers: ["zebra","hippo","lion", "cat"],
        properAnswer: "zebra",
        path: zebraJpg,
        alt: "animal with black and white strips"
    },
    {
        question: "what is 5 + 5 = ?",
        questionType: "text",
        answers: ["10","15","2", "17"],
        properAnswer: "10",
        path: "none",
        alt: "none"
    },
    {
        question: "what is 4 * 8 = ?",
        questionType: "text",
        answers: ["32","88","28", "16"],
        properAnswer: "32",
        path: "none",
        alt: "none"
    },
    {
        question: "what is 15 - 7 = ?",
        questionType: "text",
        answers: ["8","22","7", "4"],
        properAnswer: "8",
        path: "none",
        alt: "none"
    },
    {
        question: "what is 15 / 3 = ?",
        questionType: "text",
        answers: ["5","6","3", "7"],
        properAnswer: "5",
        path: "none",
        alt: "none"
    },
    {
        question: "what is 2 * 8 + 2 = ?",
        questionType: "text",
        answers: ["20","18","34", "28"],
        properAnswer: "20",
        path: "none",
        alt: "none"
    },
    {
        question: "What's the name of a place you go to see lots of animals?",
        questionType: "text",
        answers: ["zoo","school","cinema", "shop"],
        properAnswer: "zoo",
        path: "none",
        alt: "none"
    },
    {
        question: "How many planets are in our solar system?",
        questionType: "text",
        answers: ["8","9","5", "12"],
        properAnswer: "8",
        path: "none",
        alt: "none"
    },
    {
        question: "Where does Santa Claus live?",
        questionType: "text",
        answers: ["north pole","south pole","texas", "irland"],
        properAnswer: "north pole",
        path: "none",
        alt: "none"
    },
    {
        question: "Whose nose grew longer every time he lied?",
        questionType: "text",
        answers: ["pinocchio","wolf","shrek", "puss in boot"],
        properAnswer: "pinocchio",
        path: "none",
        alt: "none"
    },
    {
        question: "What kind of cat is considered bad luck?",
        questionType: "text",
        answers: ["black cat","white cat","pink cat", "red cat"],
        properAnswer: "black cat",
        path: "none",
        alt: "none"
    },
];

export {kidsQuestionsSet};