import { TinaTemplate } from "@tinacms/cli"
import React from "react"
import { wrapFieldsWithMeta } from "tinacms"

const referenceTemplate: TinaTemplate = {
    label: "Reference",
    name: "reference",
    ui:{
        itemProps: (item) => {
            // Field values are accessed by item?.<Field name>
            console.log("item ==>", item)
            return { label: item?.label };
        }
    },
    fields: [
        {
            type: 'string',
            label: 'Label',
            name: 'label',
        },
        {
            label: "Type",
            name: "type",
            type: "string",
            ui: {
                component: wrapFieldsWithMeta(({ field, input, meta }) => {
                    input.onChange("reference")
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
            type: 'string',
            label: 'Name',
            name: 'name'
        },
        {
            label: "References",
            name: "collections",
            type: "string",
            list: true,
        },
        {
            label: "Required ?",
            name: "required",
            type: "boolean",
        }


    ]
}

export default referenceTemplate;