export default class FabultItemSheet extends ItemSheet {
    get template() {
        return `systems/fabula-ultima/templates/sheets/${this.item.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.fabult;

        return data;
    }
}