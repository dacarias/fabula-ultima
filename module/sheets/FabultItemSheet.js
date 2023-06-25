export default class FabultItemSheet extends ItemSheet {
    get template() {
        return `systems/fabula-ultima/templates/sheets/${this.item.type}-sheet.html`;
    }

    async getData(options) {
        const context = await super.getData(options);
        context.systemData = context.data.system;
        context.descriptionHTML = await TextEditor.enrichHTML(context.systemData.description, {
            secrets: this.document.isOwner,
            async: true
        });
        context.config = CONFIG.fabult;
        return context;
    }
}