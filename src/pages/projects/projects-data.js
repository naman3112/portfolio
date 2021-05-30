// project images
import Attendance from "../../assets/img/projects/attendance.png";
import Breakout from "../../assets/img/projects/breakout.png";
import Ecom from "../../assets/img/projects/ecom.jpg";
import Scribble from "../../assets/img/projects/scribble.png";
import TkGames from "../../assets/img/projects/tkgames.png";
import TSA from "../../assets/img/projects/tsa.png";
import tfm from "../../assets/img/projects/tfm.png";
import digi from "../../assets/img/projects/digiclock.jpeg";
import vigil from "../../assets/img/projects/vigil.png";
import jolly from "../../assets/img/projects/jolly.png";
//skills
import HTML5 from "../../assets/img/skills/html-5.svg";
import CSS3 from "../../assets/img/skills/css3.svg";
import NODE_JS from "../../assets/img/skills/nodejs.svg";
import EXPRESS from "../../assets/img/skills/express.svg";
import GITHUB_PAGES from "../../assets/img/skills/github.svg";
import JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import PYTHON from "../../assets/img/skills/python.svg";
import MYSQL from "../../assets/img/skills/mysql.svg"
import TKINTER from '../../assets/img/skills/tkinter.jpg'
import NLP from '../../assets/img/skills/nlp.PNG'
import PYPLOT from '../../assets/img/skills/matplotlib.svg'
import cs from "../../assets/img/projects/cs.png"
import REACT from "../../assets/img/skills/react.svg";
import icccn from "../../assets/img/projects/icccn.png"
import patent from "../../assets/img/projects/patent.png"
export const projects = [
   
    {
        date: "Feb,2021",
        text: "Website for UK conference",
        img: icccn,
        desc: "Built website during my internship at universal inovators",
        features: [],
        techs: [{
            img: REACT,
            text: "ReactJs"
        }],
        links: [{
            url: "https://icccn.co.uk/",
            text: "Click here for  Live Link"
        },]
    },
   
    {
        date: "Jan,2021",
        text: "Website for Patent conference",
        img: patent,
        desc: "Built website during my internship at universal inovators",
        features: [],
        techs: [{
            img: REACT,
            text: "ReactJs"
        }],
        links: [{
            url: "https://iciip-patent.com/",
            text: "Click here for Live Link"
        },]
    },
   
   
   
   
   
   
    {
        date: "Nov,2019",
        text: "Intelligent Traffic Management System",
        img: tfm,
        desc: "• Worked Upon Ultrasonic sensors , RFIds , ESP-32, micro-controllers,arduino for designing architecture of the system",
        features: ["• Feasable for implementation for real scenario", "• Real time monitoring were done with the help of flutter based apllication on smart phone", "Bomb brick!", "Easy-Medium-Hard choice to play"],
        techs: [{
            img: HTML5,
            text: "Google Firebase"
        },{
            img: CSS3,
            text: "ESP-32"
        },{
            img: JAVASCRIPT,
            text: "JAVASCRIPT"
        },{
            img: GITHUB_PAGES,
            text: "GitHub Deployement"
        }],
        links: [{
            url: "https://drive.google.com/drive/folders/1f9Nl4VSfSjOsFEmEpxdW0KdOo1LerFYB?usp=sharing",
            text: "SEE DEMO VIDEO"
        },{
            url: "https://github.com/naman3112/LIGHT-THE-TRAFFIC-USING-LIGHT",
            text: "SOURCE CODE"
        }]
    },
    {
        date: "Oct 2019",
        text: "Affordable 7 segment clock",
        img: digi,
        desc: "It's  a digital clock having an ability to communicate with you phone using internet",
        features: ["transfering messages" ,"diffefrent alarms", "remote access and other various basic functionalities","being feasable for production" ],
        techs: [{
            img: HTML5,
            text: "HTML5"
        },{
            img: CSS3,
            text: "CSS3"
        },{
            img: NODE_JS,
            text: "NODE_JS"
        },{
            img: EXPRESS,
            text: "EXPRESS"
        }],
        links: [{
            url: "",
            text: "WATCH VIDEO"
        },{
            url: "https://github.com/naman3112/DIGI-WIFI-CLOCK",
            text: "SOURCE CODE"
        }]
    },
    {
        date: "Aug,2020",
        text: "Vigil-19",
        img: vigil,
        desc: "It's a tracker band for contract tracing during pandemics like Covid-19",
        features: ["Contact tracing", "Checking the spread of disease", "Feasable for production", "Continuous logs"],
        techs: [{
            img: NODE_JS,
            text: "NODE_JS"
        },{
            img: EXPRESS,
            text: "EXPRESS"
        },{
            img: JAVASCRIPT,
            text: "JAVASCRIPT"
        },{
            img: MYSQL,
            text: "MYSQL"
        }],
        links: [{
            url: "https://drive.google.com/file/d/133OiFOSiDVb15dhstP-OurRtd4x71CfN/view?usp=sharing",
            text: "WATCH VIDEO"
        }]
    },
    {
        date: "Nov, 2019",
        text: "CS Visual masters",
        img: cs,
        desc: "A project that aims to provide smooth learning experience of data structures and algorithms using visual simulations",
        features: ["Queue data structure simulation", "Stacks Visualisation", "Various problems on back tracking", "other algorithms"],
        techs: [{
            img: REACT,
            text: "ReactJs"
        }],
        links:[{
            url: "https://github.com/m-a-y-a-n-k/CSVisuals",
            text: "SOURCE CODE"
        }]
    },{
        date: "Jan, 2021",
        text: "Jolly Rockers Productions(ReactJs based website)",
        img: jolly,
        desc: "It’s frontend is devloped usingReactJswhereasReact-router and router npm packagesfor smooth navigation between tabs",
        features: ["Responsive among variousextra small,small, medium and large devices", "Hosted on S3 machine ofAWS"],
        techs: [{
            img: NODE_JS,
            text: "NODE_JS"
        },{
            img: EXPRESS,
            text: "EXPRESS"
        },{
            img: JAVASCRIPT,
            text: "JAVASCRIPT"
        },{
            img: MYSQL,
            text: "MYSQL"
        }],
        links:[{
            url: "https://github.com/naman3112/Jolly-rockers",
            text: "SOURCE CODE"
        },
        {
            url: "http://jollyrockersprodutions.xyz/",
            text: "Live Link"
        }
    ]
    },
]