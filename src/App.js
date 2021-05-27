import React from 'react'

import{ Component, useEffect, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "West Bengal",
    cities: [
      {
        name: "Kolkata",
        towns: [
          {
            name: "Gobindapur",
          },
          {
            name: "Sutanuti",
          },
        ],
      },
      {
        name: "Asansole",
        towns: [
          {
            name: "Sreerampur",
          },
          {
            name: "Singur",
          },
        ],
      },
      {
        name: "Bardhaman",
        towns: [
          {
            name: "Golapbag",
          },
          {
            name: "Birhata",
          },
        ],
      },
    ],
  },
  {
    name: "Delhi",
    cities: [
      {
        name: "Delhi Cantonment",
        towns: [
          {
            name: "Delhi Cantonment",
          },
          {
            name: "Jonapur",
          },
        ],
      },
      {
        name: "Bhalswa Jahangir Pur",
        towns: [
          {
            name: "Kamalpur Majra Burari",
          },
          {
            name: "Karawal Nagar",
          },
        ],
      },
      {
        name: "Mustafabad",
        towns: [
          {
            name: "Mirpur Turk",
          },
          {
            name: "Sultanpur",
          },
          {
            name: "Chattarpur",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Shilong",
          },
          {
            name: "kamakkhya",
          },
        ],
      },
      {
        name: "Silchar",
        towns: [
          {
            name: "Ambicapur Part–X",
          },
          {
            name: "Silchar Part–X",
          },
          {
            name: "Kanakpur Part–II",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Bamun Chuburi Gaon",
          },
          {
            name: "Dekar Gaon",
          },
        ],
      },
      {
        name: "Tinsukia",
        towns: [
          {
            name: "Tinsukia",
          },
          {
            name: "Lahari Kachari Gaon",
          },
        ],
      },
    ],
  },
  {
    name: "Telangana",
    cities: [
      {
        name: "Adilabad",
        towns: [
          {
            name: "Mancherial",
          },
          {
            name: "Nirmal",
          },
        ],
      },
      {
        name: "Karimnagar",
        towns: [
          {
            name: "Sircilla",
          },
          {
            name: "Metpally",
          },
        ],
      },
      {
        name: "Nizamabad",
        towns: [
          {
            name: "Kamareddy",
          },
          {
            name: "Bodhan",
          },
        ],
      },
    ],
  },
];


function Townprint(props){

    return (
        <>
          <li id={"town"+(props.index+1)}>{props.towns.name}</li>
        </>
    )
}

function Town(props){
   
    return (
       
        <>
           <ul>
               {
                   props.towns.map((town,index)=>{
                       return (
                           <Townprint index={index} towns={town}></Townprint>
                       )
                   })
               }
           </ul>
        </>

    )
    

}


function Cityprint(props){
   
    const [getFlag,setFlag] = useState(false);

    const hideANDshow=(e)=>{
        e.stopPropagation();
          if(getFlag)
             setFlag(false)
          else
            setFlag(true)  
    }

    return (
        <>
           <li id={"city"+(props.index+1)} onClick={hideANDshow}>{props.cities.name}
             { getFlag && <Town towns={props.cities.towns}></Town>}
           </li>
        </>
    )

}

function City(props){

  return (
      <>
          <ul>
              {
                  props.cities.map((city,index)=>{
                      return (
                          <Cityprint index={index} cities={city}></Cityprint>
                      )
                  })
              }
          </ul>
      </>
  )

}


function State(props){
    const [getFlag,setFlag] = useState(false);

    const hideANDshow2=(e)=>{
        e.stopPropagation();
        if(getFlag)
           setFlag(false)
        else
          setFlag(true)  
      }
   
    return (
        
        <>
          <li id={"state"+(props.index+1)} onClick={hideANDshow2}>{props.states.name}
              { getFlag && <City cities={props.states.cities}></City>}
          </li>
        </>
    )

}

function App() {
   

    return (
        <div id="main"> 
            <ul>
                {
                    states.map((state,index)=>{
                       
                        return    <State index={index} states={state}></State>
                        
                    })
                }
            </ul>
        </div>
    )
}

export default App;
