import type { BaseFrontmatter } from "@kobalte/solidbase/client"

export interface MyFrontmatter extends BaseFrontmatter {
  links?: {
    doc?: string
    api?: string
  }
}
