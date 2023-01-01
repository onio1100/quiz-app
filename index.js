import React from 'react';
import ReactDOM from 'react-dom/client';
import "./main.css";
import {kidsQuestionsSet} from "./questions-sets/kids-questions.js";
import {adultQuestionsSet} from "./questions-sets/adult-questions.js";
let globalDificulti = [false, 3];
let audioGlobal = new Audio();

function Answer(props){
    return(
        <div className='answer-wraper'>
            <p className='answer' onClick={props.event}>{props.answer}</p>
        </div>
    )
}
function WhatQuestion(props){

    function isActive(dotNumber){
        if(dotNumber > props.whatQuestion){
            return "";
        } else{
            return " active-dot";
        }
    }
    let arr = [];
    for (let i = 1; i < props.allQuestions + 1; i++){
        arr.push(<div key={i} className={"dot" + isActive(i)}></div>)
    }
    return(
        <div className='dots-conteiner'>
            {arr}
        </div>
    )
}
function AudioQuestion (props){
    let audioElement = new Audio(props.path);
            function play(audio){
                audio.play();
                audioGlobal = audio;
            }
            return(
                <div className='question-conteiner'>
                        <h1 className='question'>{props.question}</h1>
                        <div className='replay-button-wraper'>
                            <div className='replay-button' onClick={() => play(audioElement)}>play</div>
                        </div>
                    </div>
            )
}
function VisualQuestion(props){
    return(
        <div className='question-conteiner'>
            <h1 className='question'>{props.question}</h1>
            <div className='img-wraper'>
                <img className='question-img' src={props.path} alt={props.alt}/>
            </div>
        </div>
    )
}
function TextQuestion(props) {
    return(
        <div className='question-conteiner'>
            <h1 className='question'>{props.question}</h1>
        </div>
    )
} 
class Question extends React.Component{
    componentDidUpdate() {
        audioGlobal.pause()
    };
    componentWillUnmount() {
        audioGlobal.pause()
    };
    render(){
        let type = this.props.type; 
        switch (type) {
            case "audio":
                return(<AudioQuestion path={this.props.path} question={this.props.question} />);  
            case "visual":
                    return(<VisualQuestion path={this.props.path} alt={this.props.alt} question={this.props.question} />)
            case "text":
                return(<TextQuestion question={this.props.question} />)
            default:
                    console.log("question render error");
                    break;
    
        }
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            questionSet: props.data,
            allQuestions: props.numberOfQuestions,
            presetnQuestion: 1,
        }   
        this.comperAnswer = this.comperAnswer.bind(this);
    }
    randomAnswerOrder() {
        const presentQ = this.state.presetnQuestion - 1;
        let newArr = [...this.state.questionSet[presentQ].answers];
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = newArr[i];
            newArr[i] = newArr[j];
            newArr[j] = temp;
          }
        return newArr;
    }
    comperAnswer(e) {
        const value = e.target.innerHTML;
        const presentQ = this.state.presetnQuestion - 1;
        const answer = this.state.questionSet[presentQ].properAnswer;
        if(value === answer){
            let newState = this.state.presetnQuestion + 1;
            if(newState > this.state.allQuestions){
                root.render(<StartAndEndScreen type="win" />);
            }else {
                this.setState({presetnQuestion: newState});
            }
        }else{
            root.render(<StartAndEndScreen type="lose" />);
        }
    }
    render(){
        let dot = this.state.presetnQuestion;
        let presentQ = this.state.presetnQuestion - 1;
        let question = this.state.questionSet[presentQ].question;
        let questionType = this.state.questionSet[presentQ].questionType;
        let path = this.state.questionSet[presentQ].path;
        let alt = this.state.questionSet[presentQ].alt;
        let answers = this.randomAnswerOrder(); 
        return(
            <div className='app'>
                <WhatQuestion whatQuestion={dot} allQuestions={this.state.allQuestions}/>
                <Question question={question} type={questionType} path={path} alt={alt}/>
                <div className='answers-conteiner'>
                    <Answer answer={answers[0]} event={this.comperAnswer}/>
                    <Answer answer={answers[1]} event={this.comperAnswer}/>
                    <Answer answer={answers[2]} event={this.comperAnswer}/>
                    <Answer answer={answers[3]} event={this.comperAnswer}/>
                </div>
            </div>
        )
    }
}

class StartAndEndScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            questionNumber : globalDificulti[1],
            screenType: props.type,
            dificultiLevel: globalDificulti[0],
        }
        this.startGame = this.startGame.bind(this);
        this.handleRange = this.handleRange.bind(this);
    }

    handleRange(e){
        this.setState({questionNumber: parseInt(e.target.value)});
    }

    createDataSet(mode){
        let file;
        globalDificulti[0] = mode;
        globalDificulti[1] = this.state.questionNumber;
        switch (mode) {
            case "kids":
                file = [...kidsQuestionsSet];
                break;
            case "adult":
                file = [...adultQuestionsSet];
                break;
            default:
                console.log('error when DataSet create');
                break; 
        }
        file = file.sort(() => 0.5 - Math.random());
        file = file.slice(0, this.state.questionNumber);
        return file;
    }

    startGame(mode){
        let dataSet = this.createDataSet(mode);
        root.render(<App data={dataSet} numberOfQuestions={this.state.questionNumber} />);
    }   
    render(){
        switch (this.state.screenType) {
            case "win":
                return(
                    <div className='app'>
                        <h1 className='big-text'>You win</h1>
                        <div className='play-again-conteiner'>
                            <div className='play-again-button' onClick={() => this.startGame(this.state.dificultiLevel)}>
                                <p className='play-again'>play again</p>
                            </div>  
                            <div className='play-again-button' onClick={() => this.setState({screenType: "start"})}>
                                <p className='play-again'>change settings</p>
                            </div>  
                        </div>
                    </div>
                )
            case "lose":
                return(
                    <div className='app'>
                        <h1 className='big-text'>You lose</h1>
                        <div className='play-again-conteiner'>
                        <div className='play-again-button' onClick={() => this.startGame(this.state.dificultiLevel)}>
                                <p className='play-again'>play again</p>
                            </div> 
                            <div className='play-again-button' onClick={() => this.setState({screenType: "start"})}>
                                <p className='play-again'>change settings</p>
                            </div>   
                        </div>
                    </div>
                );
            case "start":
            default:
                return(
                    <div className='app'>
                        <h1 className='big-text'>Select difficulty level</h1>
                        <div className='game-mode-conteiner'>
                            <div className="game-mode-button" onClick={() => this.startGame("kids")}><p className='button-text'>kid</p></div>
                            <div className="game-mode-button" onClick={() => this.startGame("adult")}><p className='button-text'>adult</p></div>
                        </div>
                        <h2 className='medium-text number-text'>Select number of questions:<p className='medium-text number'>{this.state.questionNumber}</p></h2>
                        <div className='slider-conteiner'>
                            <input className='number-slider' type="range" min="1" max="10" onChange={this.handleRange} value={this.state.questionNumber} />
                        </div>
                    </div>
                )
        }
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StartAndEndScreen type="start" />);