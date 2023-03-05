import React from "react"
import { useRouter } from "next/router"
import { DocsThemeConfig, useConfig } from "nextra-theme-docs"

const config: DocsThemeConfig = {
  logo: <>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        VS Code群文档
      </span>
  </>,
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      "https://vscode.iw17.cc" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "VS Code群文档"} />
        <meta
          property="og:description"
          content={frontMatter.description || "VS Code群文档"}
        />
        <link rel="icon" type="image/png" href="/favicons/vscode.png" />
        <meta name="theme-color" content="#000"/>
      </>
    )
  },
  project: {
    link: "https://github.com/iw17/vscode",
  },
  chat: {
    link: "https://github.com/iw17/vscode/issues",
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== "/") {
      return {
        titleTemplate: "%s | VS Code群文档",
      }
    }
  },
  darkMode: true,

  docsRepositoryBase: "https://github.com/iw17/vscode",
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://vscode.iw17.cc" target="_blank">
          iw17
        </a>
        .
      </span>
    ),
  },
}

export default config
