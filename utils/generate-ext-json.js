#!/usr/bin/env node

const GIT_REF = process.env.SN_THEME__GIT_REF || "main";
const GIT_REF_TYPE = process.env.SN_THEME__GIT_REF_TYPE || "heads";
const IDENTIFIER =
  process.env.SN_THEME__IDENTIFIER || "com.marc-sensenich.sn-nord-theme";
const NAME = process.env.SN_THEME__NAME || "Nord";
const DESCRIPTION =
  process.env.SN_THEME__DESCRIPTION ||
  "An arctic, north-bluish clean and elegant Standard Notes theme.";
const VERSION = process.env.SN_THEME__VERSION || "latest";
const CSS_URL =
  process.env.SN_THEME__CSS_URL ||
  `https://raw.githubusercontent.com/marc-sensenich/sn-nord-theme/${GIT_REF}/dist/dist.css`;
const DOWNLOAD_URL =
  process.env.SN_THEME__DOWNLOAD_URL ||
  `https://github.com/marc-sensenich/sn-nord-theme/archive/refs/${GIT_REF_TYPE}/${GIT_REF}.zip`;
const LATEST_URL =
  process.env.SN_THEME__LATEST_URL ||
  "https://marc-sensenich.github.io/sn-nord-theme/ext.json";
const MARKETING_URL =
  process.env.SN_THEME__MARKETING_URL ||
  "https://github.com/marc-sensenich/sn-nord-theme";

let extJSON = {
  identifier: IDENTIFIER,
  area: "themes",
  content_type: "SN|Theme",
  name: NAME,
  description: DESCRIPTION,
  version: VERSION,
  url: CSS_URL,
  download_url: DOWNLOAD_URL,
  latest_url: LATEST_URL,
  marketing_url: MARKETING_URL,
  dock_icon: {
    type: "circle",
    background_color: "#88C0D0",
    foreground_color: "#88C0D0",
    border_color: "#88C0D0",
  },
};

console.log(JSON.stringify(extJSON, null, 2));
