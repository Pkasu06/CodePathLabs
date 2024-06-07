import React, { useState } from 'react'
import { options } from '../../constants'
import RecipeChoices from './RecipeChoices'
import drinks from '../../drinks.json'

const BaristaForm = () => {

    const [currentDrink, setCurrentDrink] = useState({
        "name": "",
        "ingredients": {
            "temp": "",
            "syrup": "",
            "milk": "",
            "blended": "",
        }
    })
    const [inputs, setInputs] = useState({
        'temperature': '',
        'syrup': '',
        'milk': '',
        'blended': '',
    })

    const onNewDrink = () => {

    }

    const onCheckAnswer = () => {

    }

    return (
        <div>
            <h2>Hi, I would like to order a: </h2>
            <form>
                <div className="ingredient-list">
                    <h3>Temperature</h3>
                    {inputs["temperature"] && <div className="answer-space">{inputs["temperature"]}</div>}
                    <RecipeChoices handleChange={(e) => setInputs({
                        ...inputs,
                        [e.target.name] : e.target.value
                    })} 
                    label="temperature" choices={options["temperature"]} checked={inputs["temperature"]}/>
                </div>
                <div className="ingredient-list">
                    <h3>Syrup</h3>
                    {inputs["syrup"] && <div className="answer-space">{inputs["syrup"]}</div>}
                    <RecipeChoices handleChange={(e) => setInputs({
                        ...inputs,
                        [e.target.name] : e.target.value
                    })} 
                    label="syrup" choices={options["syrup"]} checked={inputs["syrup"]}/>
                </div>
                <div className="ingredient-list">
                    <h3>Milk</h3>
                    {inputs["milk"] && <div className="answer-space">{inputs["milk"]}</div>}
                    <RecipeChoices handleChange={(e) => setInputs({
                        ...inputs,
                        [e.target.name] : e.target.value
                    })} 
                    label="milk" choices={options["milk"]} checked={inputs["milk"]}/>
                </div>
                <div className="ingredient-list">
                    <h3>Blended</h3>
                    {inputs["blended"] && <div className="answer-space">{inputs["blended"]}</div>}
                    <RecipeChoices handleChange={(e) => setInputs({
                        ...inputs,
                        [e.target.name] : e.target.value
                    })} 
                    label="blended" choices={options["blended"]} checked={inputs["blended"]}/>
                </div>
            </form>
            <button type="submit" onClick={onCheckAnswer} className="btn">Check Answer</button>
            <button type="new-drink-button" onClick={onNewDrink} className="btn">New Drink</button>
        </div>
    )
}

export default BaristaForm