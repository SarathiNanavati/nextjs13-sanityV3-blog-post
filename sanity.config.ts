import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { sanityTheme } from "./theme";
import StudioNavbar from "./components/ui/StudioNavbar";
import Logo from "./components/ui/Logo";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: "/cms",
  name: "Blog_Content_Studio",
  title: "Blog Content Studio",
  projectId: projectId!,
  dataset: dataset!,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  theme: sanityTheme,
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
});
