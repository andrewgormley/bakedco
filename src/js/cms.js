import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import tailwind from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/styles.scss";

import WorkPreview from "./cms-preview-templates/work";
import AboutPreview from "./cms-preview-templates/about";
import JobsPreview from "./cms-preview-templates/jobs";
import ContactPreview from "./cms-preview-templates/contact";

CMS.registerPreviewStyle(tailwind, { raw: true });
CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("work", WorkPreview);
CMS.registerPreviewTemplate("about", AboutPreview);
CMS.registerPreviewTemplate("jobs", JobsPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.init();
