export default class FabultItemSheet extends ItemSheet {
    get template() {
        return `systems/fabula-ultima/templates/sheets/${this.item.type}-sheet.html`;
    }
}