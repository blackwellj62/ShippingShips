import { getCargo, getHauler } from "./database.js";

export const cargoList = () => {
    const cargos = getCargo()
    
    
    let cargoHTML = '<ul>'
    for (const cargo of cargos) {
        cargoHTML += `
        <li data-type="cargo" data-id="${cargo.id}"
        data-haulerforeignkey="${cargo.haulerId}"
        data-name="${cargo.name}">
        ${cargo.name}
        </li>
        `
        
    }
    
    return cargoHTML += '</ul>'
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "cargo"){

            // Get the haulerId value of the shipping ship clicked
            const haulerId = itemClicked.dataset.haulerforeignkey
            const cargoName = itemClicked.dataset.name
            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }
            const haulers = getHauler()

            // Iterate the array of hauler objects
            for (const hauler of haulers) {
                
                // Does the haulerId foreign key match the id of the current hauler?
                if (parseInt(haulerId) === hauler.id)
    
                    // Reassign the value of `haulingShip` to the current hauler
                     haulingShip = hauler.name
            }

                window.alert(`${cargoName} is being hauled by ${haulingShip}`)
            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
        }
    }
)