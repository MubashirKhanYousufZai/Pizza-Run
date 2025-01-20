
// This file is auto-generated on 'sanity dev'
// Modifications to this file is automatically discarded
import {renderStudio} from "sanity"
import studioConfig from "..\\..\\sanity.config.ts"

renderStudio(
  document.getElementById("sanity"),
  studioConfig,
  {reactStrictMode: false, basePath: "/"}
)
export default {
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "price", title: "Price", type: "number" },
    { name: "image", title: "image", type: "image" },
  ],
};
