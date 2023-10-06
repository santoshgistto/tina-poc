import { TinaTemplate } from "@tinacms/cli";
import commonFeildsTemplate from "./contentModelSchema/commonFieldTemplate";
import referenceTemplate from "./contentModelSchema/referenceTemplate";

const contentModelTemplate: TinaTemplate = {
    name: "collections",
    label: "ADD CONTENT TYPE",
    ui: {
        itemProps: (item) => {
            // Field values are accessed by item?.<Field name>
            // console.log("item ==>", item)
            return { label: item?.name };
        }
    },
    fields: [
        {
            label: "Label",
            name: "label",
            type: "string"
        },
        {
            label: "Name",
            name: "name",
            type: "string",
            isTitle: true,
            required: true
        },
        {
            label: "Path",
            name: "path",
            type: "string"
        },
        {
            name: "fields",
            label: "Fields",
            type: "object",
            list: true,

            templates: [
                commonFeildsTemplate,
                referenceTemplate,
            ]
        }

    ]
}
export default contentModelTemplate;