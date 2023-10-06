import { TinaTemplate } from "@tinacms/cli"
import React from "react"
import { wrapFieldsWithMeta } from "tinacms"
import referenceTemplate from "./referenceTemplate"

const referenceListTemplate: TinaTemplate = {
    label: "Reference Array",
    name: "object",
    fields: [
        {
            label: "Type",
            name: "type",
            type: "string",
            ui: {
                component: wrapFieldsWithMeta(({ field, input, meta }) => {
                    input.onChange("object")
                    return (
                        <div>
                            <input
                                disabled
                                id="no"
                                {...input}
                            />
                        </div>
                    )
                })
            }
        },
        {
            label: "name",
            name: "name",
            type: "string",
        },
        {
            label: "List ?",
            name: "list",
            type: "boolean",
        },
        {
            type: 'string',
            label: 'Label',
            name: 'label',
        },
        {
            type: "object",
            name: "fields",
            list: true,
            templates :[
                referenceTemplate
            ]
        }
    ]
}

export default referenceListTemplate;