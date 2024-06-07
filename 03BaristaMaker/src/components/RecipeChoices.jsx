import React from 'react'

function RecipeChoices({ handleChange, label, choices, checked}) {
    return (
        <div className="radio-buttons"> 
            {choices.length > 0 && choices.map((choice) => (
                <li key={choice}>
                    <input type="radio" id={choice} value={choice} name={label} onChange={handleChange} checked={checked == choice}/>
                    {choice}
                </li>
            ))}
        </div>
    )
}

export default RecipeChoices