import chefHat from '/src/assets/chef-hat.png'

export default function Header() {
    return(
        <header>
            <img src={chefHat} alt='Chef Claude logo.' />
            <h1>Chef Claude</h1>
        </header>
    )
}