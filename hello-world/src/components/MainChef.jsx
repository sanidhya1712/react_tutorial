import chefLogo from '../assets/chef-claude-icon.png';

export default function Header() {
    const ingredients = ["Chicken", "Tomatoes", "Oregano"]
    const ingredientTag = ingredients.map(item=>
        <li key={item}>{item}</li>
    )
    function handleClick(event) {
        event.preventDefault()
        console.log("this button was clicked");
        
    }
    return (
        <main>
            <form onSubmit={handleClick}className='add-ingredient-form'>
                <input type="text" placeholder='e.g. oregeno' aria-label='Add ingredient'/>
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientTag}
            </ul>
        </main>
    )
}