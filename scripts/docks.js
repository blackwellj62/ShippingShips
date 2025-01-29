import { getDocks,getHauler } from "./database.js"


export const dockList = () => {
    const docks = getDocks
    docks.sort((a, b) => a.location.localeCompare(b.location));

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `
        <li data-type="dock" data-id="${dock.id}"
        data-name="${dock.location}">
        ${dock.location} can hold
        ${dock.volume} million tons of cargo
        </li>

        `
    }

    return docksHTML += "</ul>"
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.dataset.type === "dock"){
            const haulers = getHauler()
            let haulingShip = []
            const dockId = itemClicked.dataset.id
            const dockName = itemClicked.dataset.name
            
        for (const hauler of haulers) {
            if (hauler.dockId === parseInt(dockId)){
            haulingShip.push(hauler.name)
            }
        }
        if (haulingShip.length === 0){
            window.alert(`The ${dockName} dock is currently unloading nothing.`) 
        }
        else {
            window.alert(`The ${dockName} dock is currently unloading ${haulingShip}.`)
    }   
      }
    }
)