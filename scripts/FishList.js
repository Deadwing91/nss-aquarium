// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()
    //console.log(fishes)
    console.log(fishes)
    // Start building a string filled with HTML syntax
    let htmlString = ''

    // Create HTML representations of each fish here
    for (const fish of fishes) {
    

        // Why is there a backtick used for this string?
        /*htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish_img.name}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>`
    */
        htmlString += `<li class="fish_img">
        <img
          src="${fish.Image}" 
          alt="${fish.Name}" width="400px">
        <div class="fish_info">
          Name: ${fish.Name} <br>
          Length: ${fish.Length} <br>
          Food: ${fish.Food} <br>
          Location: ${fish.Location} <br>
        </div>
      </li>`

    }
    //htmlString += `</article>`

    return htmlString
}