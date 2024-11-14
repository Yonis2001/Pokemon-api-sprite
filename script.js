// ! FECTH = Makes http requests to fetch resources.
// fetch(url,{options})

//fetch("https://pokeapi.co/api/v2/pokemon/dratini")
//.then(response=> console.log(response))
//.then(response=> response.json())
//.then(data=> console.log(data.name))
//.catch(error=> console.error(error));

async function fetchData(){
    try{
        const pokemonName=document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response.ok){
            throw new Error("Could not fetch")
        }
        const data= await response.json();
        const pokemonSprite= data.sprites.front_default;
        const imgElement=document.getElementById("pokemonSprite");
        imgElement.src=pokemonSprite;
    }
    catch(error){
        console.error(error)
        
    }
}