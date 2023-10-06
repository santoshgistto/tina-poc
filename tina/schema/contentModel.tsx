import { Collection, TinaTemplate } from "@tinacms/cli"
import { Form, TinaCMS, defineConfig, wrapFieldsWithMeta } from 'tinacms'
import React from "react"
import referenceTemplate from "./contentModelSchema/referenceTemplate"
import commonFeildsTemplate from "./contentModelSchema/commonFieldTemplate"
import referenceListTemplate from "./contentModelSchema/referenceListTemplate"




export const ContentModel: Collection = {
  label: "Content Model",
  name: "contentModel",
  path: "content/model",
  format: "json",
  ui: {
    beforeSubmit: async ({
      form,
      cms,
      values,
    }: {
      form: Form
      cms: TinaCMS
      values: Record<string, any>
    }) => {
      const data = {
        ...values,
        //  format: 'json',
        "path": `content/${values.name}`
      }

      return Promise.resolve(data);
    },

  },

  fields: [
    {
      label: "Title",
      name: "label",
      type: "string"
    },

    {
      label: "name",
      name: "name",
      type: "string",
      description: "Id",
      isTitle: true,
      required: true,
    },

    {
      name: "fields",
      label: "Fields",
      type: "object",
      list: true,

      templates: [
        commonFeildsTemplate,
        referenceTemplate,
        referenceListTemplate,

        {
          label: "Options",
          name: "option",
          ui: {
            itemProps: (item) => {
              // Field values are accessed by item?.<Field name>
              // console.log("item ==>", item)
              return { label: item?.name };
            }
          },
          fields: [
            {
              type: 'string',
              label: 'Name',
              name: 'name'
            },
            {
              type: 'string',
              label: 'Label',
              name: 'label'
            },
            {
              label: "Options",
              name: "options",
              type: "string",
              list: true,
            },
            {
              label: 'Feild Type',
              name: 'type',
              type: 'string',
              options: [
                {
                  value: 'string',
                  label: 'String',
                },
                {
                  value: 'number',
                  label: 'Number',
                },
                {
                  value: 'datetime',
                  label: 'Datetime',
                },
                {
                  value: 'image',
                  label: 'Image',
                }
              ],
            },



          ]
        },

      ]
    },
    { // for demo purpose as before submit not updating 
      name: "format",
      type: "string",
      ui: {
        component: wrapFieldsWithMeta(({ field, input, meta }) => {
          input.onChange("json")
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
    { // for demo purpose as before submit not updating 
      name: "path",
      type: "string",
      ui: {
        component: wrapFieldsWithMeta(({ field, input, meta }) => {
          input.onChange("content/model/icon")
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
  ]
}