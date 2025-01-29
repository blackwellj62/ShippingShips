const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Tuggsy" , dockId: 3},
        { id: 2, name: "Razzle Dazzle" , dockId: 1},
        { id: 3, name: "BoatMan" , dockId: 4},
        { id: 4, name:  "Haul-o-matic 5000", dockId: 3},
        { id: 5, name:"Pioneering Spirit"  , dockId: 3},
        { id: 6, name:"Boaty McBoatface"  , dockId:1},
        { id: 7, name: "Seawise Giant"  , dockId: 4},
    ],
    cargo: [
        {id: 1, name: "The Enterprise", haulerId: 4},
        {id: 2, name: "Voyager", haulerId: 4},
        {id: 3, name: "The SS Minnow", haulerId: 1},
        {id: 4, name: "Not Penny's Boat", haulerId: 3 },
        {id: 5, name: "The Millennium Falcon", haulerId: 2},
        {id: 6, name: "The Love Boat", haulerId: 2},
        {id: 7, name: "The Ceritos", haulerId: 6},
        {id: 8, name: "The Ocho", haulerId: 5},
        {id: 9, name: "Deep Sea Nine", haulerId: 4},
        {id: 10, name: "The Orca", haulerId: 7},
    ]
}



export const getDocks = structuredClone(database.docks)


export const getHauler = () => {
    return database.haulers.map(hauler => ({...hauler}))
}

export const getCargo = () => {
    return database.cargo.map(cargo => ({...cargo}))
}