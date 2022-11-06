import badGoodAndUglyMp3 from "../sounds/bad good and ugly.mp3";
import ghostbustersMp3 from "../sounds/ghostbusters.mp3";
import rockyMp3 from "../sounds/rocky.mp3";
import spiderManMp3 from "../sounds/spider-man.mp3";
import starWarsMp3 from "../sounds/star wars.mp3";
import floppyDiskJpg from "../pictures/Floppy disk.jpg";
import NESPng from "../pictures/NES.png";
import TamagotchiJpg from "../pictures/Tamagotchi.jpeg";
import vanGoghJpg from "../pictures/Van Gogh.jpg";
import vaultBoyPng from "../pictures/vault boy.png";

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
const adultQuestionsSet = [
    {
        question: "What is capital of australia?",
        questionType: "text",
        answers: ["Canberra","Berlin","Sydney", "New York"],
        properAnswer: "Canberra",
        path: "none",
        alt: "none"
    },
    {
        question: "Which country was Nelson Mandela the president of?",
        questionType: "text",
        answers: ["South Africa","USA","Canada", "France"],
        properAnswer: "South Africa",
        path: "none",
        alt: "none"
    },
    {
        question: "What’s Garfield’s favourite food? ",
        questionType: "text",
        answers: ["lasagna","pizza","steak", "salmon"],
        properAnswer: "lasagna",
        path: "none",
        alt: "none"
    },
    {
        question: "In which museum can you find the Mona Lisa?",
        questionType: "text",
        answers: ["Le Louvre","The British Museum","Musei Vaticani", "National Museum of China"],
        properAnswer: "Le Louvre",
        path: "none",
        alt: "none"
    },
    {
        question: "How many Harry Potter books are there?",
        questionType: "text",
        answers: ["7","8","12", "5"],
        properAnswer: "7",
        path: "none",
        alt: "none"
    },
    {
        question: "From what movie is this song?",
        questionType: "audio",
        answers: ["Ghostbusters","Titanic","The Lion King", "Cinderella"],
        properAnswer: "Ghostbusters",
        path: ghostbustersMp3,
        alt: "none"
    },
    {
        question: "From what movie is this song?",
        questionType: "audio",
        answers: ["Spider-Man: Into The Spider-Verse","Skyfall","Jurassic Park", "Harry Potter and the Sorcerer's Stone"],
        properAnswer: "Spider-Man: Into The Spider-Verse",
        path: spiderManMp3,
        alt: "none"
    },
    {
        question: "From what movie is this song?",
        questionType: "audio",
        answers: ["Rocky III","Harry Potter and the Sorcerer's Stone","Titanic", "Bohemian Rhapsody"],
        properAnswer: "Rocky III",
        path: rockyMp3,
        alt: "none"
    },
    {
        question: "From what movie is this song?",
        questionType: "audio",
        answers: ["Star Wars The Empire Strikes Back","Toy Story","Avatar", "Joker"],
        properAnswer: "Star Wars The Empire Strikes Back",
        path: starWarsMp3,
        alt: "none"
    },
    {
        question: "From what movie is this song?",
        questionType: "audio",
        answers: ["The Good, The Bad, and the Ugly","The Lion King","Zootopia", "Top Gun: Maverick"],
        properAnswer: "The Good, The Bad, and the Ugly",
        path: badGoodAndUglyMp3,
        alt: "none"
    },
    {
        question: "What was the name of the first game console released by Sega?",
        questionType: "text",
        answers: ["SG-1000","Sega Dreamcast","Sega Saturn", "Sega Genesis"],
        properAnswer: "SG-1000",
        path: "none",
        alt: "none"
    },
    {
        question: "What is the world's best-selling album of all time?",
        questionType: "text",
        answers: ["Thriller","Pieces of You","Purple Rain", "Ropin' The Wind"],
        properAnswer: "Thriller",
        path: "none",
        alt: "none"
    },
    {
        question: "How many bones does a human adult have?",
        questionType: "text",
        answers: ["206","355","191", "87"],
        properAnswer: "206",
        path: "none",
        alt: "none"
    },
    {
        question: "Which cell in the body can live the longest?",
        questionType: "text",
        answers: ["Brain Cells","White blood cells","Muscle cells", "Red blood cells"],
        properAnswer: "Brain Cells",
        path: "none",
        alt: "none"
    },
    {
        question: "Which company was the first to put a commercial on television?",
        questionType: "text",
        answers: ["Bulova Watch Co","Macy's","Colgate", "Coca-Cola"],
        properAnswer: "Bulova Watch Co",
        path: "none",
        alt: "none"
    },
    {
        question: "What is this?",
        questionType: "visual",
        answers: ["Nintendo Entertainment System","Super Nintendo Entertainment System","Nintendo 64", "Nintendo GameCube"],
        properAnswer: "Nintendo Entertainment System",
        path: NESPng,
        alt: "nintendo console"
    },
    {
        question: "What is this?",
        questionType: "visual",
        answers: ["Floppy disk","CD disk","Memory card", "Smart cards"],
        properAnswer: "Floppy disk",
        path: floppyDiskJpg,
        alt: "old memory media"
    },
    {
        question: "What is this?",
        questionType: "visual",
        answers: ["Tamagotchi","game boy","PSP", "3DS"],
        properAnswer: "Tamagotchi",
        path:TamagotchiJpg ,
        alt: "small simple pocket console"
    },
    {
        question: "What is this character name?",
        questionType: "visual",
        answers: ["Vault Boy","Fallout Boy","Happy Men", "Shellter Boy"],
        properAnswer: "Vault Boy",
        path: vaultBoyPng,
        alt: "Fallout game iconic character"
    },
    {
        question: "Who painted this painting?",
        questionType: "visual",
        answers: ["Van Gogh","Leonardo da vinci","Pablo Picasso", "Salvador Dalí"],
        properAnswer: "Van Gogh",
        path: vanGoghJpg,
        alt: "famous painting"
    },
];

export {adultQuestionsSet};