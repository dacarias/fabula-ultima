import FabultItemSheet from "./sheets/FabultItemSheet.js";

Hooks.once("init", function () {
    console.log("Fabula Ultima | Initializing Fabula Ultima System")

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("fabult", FabultItemSheet, { makedefault:true });
});