
import { Collection, TinaTemplate } from "@tinacms/cli"
import contentModelTemplate from "./contentModelTemplate"

export const MainContentModel: Collection = {
    label: "Content Model",
    name: "contentModel",
    path: "content/contentModel",
    format: "json",
    fields: [
        {
            label: "Label",
            name: "label",
            type: "string"
        },
        {
            label:"Content Models",
            name:"collections",
            type:"object",
            list: true,
            templates:[
                contentModelTemplate
            ]
        }
    ]
}