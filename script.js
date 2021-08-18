
/*let postImgPokemon = async(img) => {
    let element = document.getElementById('img-main1')
    await element.setAttribute('src',`${img}`)
}*/
function postImgPokemon(img,num) {
    document.getElementById(`img-main${num}`).setAttribute('src',`${img}`)
}
 
function pokemon() {
    let arrayPokemon= [];
    for (let index = 1; index <= 36; index++) {
      let id = Math.floor(Math.random()*898)
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
     .then(response => response.json())
     .then(data => {postImgPokemon(data.sprites.other["official-artwork"].front_default,index)})
    .catch(error => console.log(error))
        
    }
    
}
pokemon();
document.getElementById('btn').addEventListener('click',()=> {location.reload().getElementById('_body')
  pokemon();
})
/*async function postImgPokemon(imgUrl) {
    for (let index = 1; index <= 36 ; index++){
         document.getElementById(`img-main${index}`).setAttribute('src',`${imgUrl}`)
    }
}    */

