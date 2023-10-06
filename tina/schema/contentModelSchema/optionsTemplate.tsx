import { TinaTemplate } from "@tinacms/cli"
import { defineConfig, wrapFieldsWithMeta } from 'tinacms'
import React from "react"

const optionsTemplate = {
  label: "Options",
  name: "option",
  fields: [
    {
      type: 'string',
      label: 'Name',
      name: 'name',
      description:"id"
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
    }


  ]
}

export default optionsTemplate;