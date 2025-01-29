import { getHauler, getCargo } from "./database.js";


export const haulerList = () => {
    const haulers = getHauler()
    haulers.sort((a, b) => a.name.localeCompare(b.name));

    let haulerHTML = '<ul>'

    for (const hauler of haulers) {
        haulerHTML += `
        <li data-type="hauler" data-id="${hauler.id}"
        data-dockforeignkey="${hauler.dockId}">
        ${hauler.name}
        
        </li>
        `
        
    }
    return haulerHTML += '</ul>'
}



document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a hauler list item clicked?
        if (itemClicked.dataset.type === "hauler") {

            // Get the id of the hauler clicked
            const haulerId = itemClicked.dataset.id
            // Start a counter variable at 0
            let shipCounter = 0

            // Iterate all of the shipping ships
            const shippingShips = getCargo()
            for (const ship of shippingShips) {
                // Does the haulerId foreign key match the id?
                if (parseInt(haulerId) === ship.haulerId)
                        // Increase the counter by 1
                    shipCounter++
                
            }
                window.alert(`This hauler is carrying ${shipCounter} cargo ships`)
        }
    }
)

