import { useState } from 'react';
import '../styles/styles.css';

export default function AutoFilterDropDown({ data, fieldName, valueChange }) {

    const [keyWord, setKeyWord] = useState('');
    const [listToDisplay, setListToDiplay] = useState(data);

    function onSelectionChanged(item) {
        valueChange(item);
        setKeyWord(item[fieldName]);
        setListToDiplay(data.filter(option => item[fieldName] === option[fieldName]));
    }

    function keyWordChanged(newkeyWord) {
        setKeyWord(newkeyWord);
        setListToDiplay(data.filter(item => item[fieldName].toLowerCase().includes(newkeyWord.toLowerCase())));
    }

    function highlightSubString(word, keyWord) {
        const parts = word.split(new RegExp(`(${keyWord})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === keyWord.toLowerCase() ?
                <span key={index} className="highlight">{part}</span> : part
        );
    }

    return (
        <div class="dropdown" >
            <hr />
            <input type="text" placeholder={'enter your ' + fieldName} value={keyWord} onChange={(e) => keyWordChanged(e.target.value)} />
            <ul className="dropdown-content">
                {listToDisplay.map(item =>
                    <li key={item.id} onClick={() => onSelectionChanged(item)}>{highlightSubString(item[fieldName], keyWord)}</li>
                )}
            </ul>            
        </div>

    )
}