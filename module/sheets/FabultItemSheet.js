export default class FabultItemSheet extends ItemSheet {
    get template() {
        return `systems/fabula-ultima/templates/sheets/${this.item.type}-sheet.html`;
    }

    getData() {
        const baseData = super.getData();

        let sheetData = {
            owner: this.item.isOwner,
            editable: this.isEditable,
            item: baseData.item,
            data: baseData.item.data.data,
            config: CONFIG.fabult
        };

        console.log(this);

        return sheetData;
    }
}