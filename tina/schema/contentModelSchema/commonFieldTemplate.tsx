import { TinaTemplate } from "@tinacms/cli";

const commonFeildsTemplate: TinaTemplate = {
  name: "feilds",
  label: "Commmon Fields",
  ui: {
    itemProps: (item) => {
      // Field values are accessed by item?.<Field name>
     // console.log("item ==>", item)
      return { label: item?.name };
    }
  },
  fields: [
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
          value: 'boolean',
          label: 'Boolean',
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
    {
      label: "Name",
      name: "name",
      type: "string",
      description: "This is id"
    },
    {
      label: "Label",
      name: "label",
      type: "string"
    },
    {
      label: "Required ?",
      name: "required",
      type: "boolean",
    },
    {
      label: "is List?",
      name: "list",
      type: "boolean",
    },
  ]
}

export default commonFeildsTemplate