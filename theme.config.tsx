import React from "react"
import { DocsThemeConfig } from "nextra-theme-docs"

const config: DocsThemeConfig = {
  logo: <span>Vscode 群文档</span>,
  project: {
    link: "https://github.com/iw17/vscode",
  },
  chat: {
    link: "https://github.com/iw17/vscode/issues",
  },
  docsRepositoryBase: "https://github.com/iw17/vscode",
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://vscode.iw17.cc" target="_blank">
          Nextra
        </a>
        .
      </span>
    ),
  },
}

export default config
