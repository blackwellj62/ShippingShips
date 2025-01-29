import { dockList } from "./docks.js";
import { haulerList } from "./haulerShips.js";
import { cargoList } from "./cargoShips.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ships</h1>
<article class="details">
<section class="detail--column list details__docks">
<h2>Docks</h2>
${dockList()}
</section>
<section class="detail--column list details__haulers">
<h2>Hauler Ships</h2>
${haulerList()}
</section>
<section class="detail--column list details__cargo">
<h2>Cargo Ships</h2>
${cargoList()}
</section>
</article>
`
mainContainer.innerHTML = applicationHTML