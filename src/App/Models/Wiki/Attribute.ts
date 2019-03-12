import { fromDefault } from "../../../Data/Record";
import { Categories } from "../../Constants/Categories";
import { EntryWithCategory } from "./wikiTypeHelpers";

export interface Attribute {
  id: string
  name: string
  category: Categories
  short: string
}

export const Attribute =
  fromDefault<Attribute> ({
    id: "",
    name: "",
    short: "",
    category: Categories.ATTRIBUTES,
  })

export const isAttribute =
  (r: EntryWithCategory) => Attribute.A.category (r) === Categories.ATTRIBUTES
