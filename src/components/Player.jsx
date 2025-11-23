import {useState} from 'react';
export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [ playerName, setPlayerName] = useState(initialName);
    const [isEditting, setIsEditting] = useState(false);

    function handleEditClick() {
        //setIsEditting(!isEditting);
        setIsEditting((editting) => !editting);
        if(isEditting){
            onChangeName(symbol, playerName);
        }
        
    }
    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }

    let edittablePlayerName = <span className="player-name">{playerName}</span>;
    let buttonCaption = 'Edit';
    if(isEditting) {
        edittablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
        buttonCaption = 'Save';
    }

    


    return(
         <li className={isActive ? 'active': undefined}>
            <span className="player">
            {edittablePlayerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{buttonCaption}</button>
          </li>
    );
}