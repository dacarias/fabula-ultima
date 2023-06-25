import { fabult } from "./config.js"
import FabultItemSheet from "./sheets/FabultItemSheet.js";

Hooks.once("init", function () {
    console.log("Fabula Ultima | Initializing Fabula Ultima System")

    CONFIG.fabult = fabult;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("fabult", FabultItemSheet, { makeDefault: true });
});