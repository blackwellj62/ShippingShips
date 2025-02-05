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
<img id="image" src="https://www.picclickimg.com/uncAAOSwRUJm7dV5/Vintage-1977-Empire-Tuggsy-Tug-Boat-I-Toot-I.webp" alt="tugboat"
</section>
<section class="cargo">
<h2>Cargo Ships</h2>
${cargoList()}
<img id="image" src="https://stfc.space/assets/103-CmWrMQph.png" alt="The Enterprise">
</section>
</article>
`
mainContainer.innerHTML = applicationHTML