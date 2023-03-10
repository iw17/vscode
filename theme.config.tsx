import React from "react"
import { useRouter } from "next/router"
import { DocsThemeConfig, useConfig } from "nextra-theme-docs"

const config: DocsThemeConfig = {
  logo: (
    <>
      <span style={{ marginLeft: ".4em" }}>VS Code 群文档</span>
    </>
  ),
  head: function Head() {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const vscDoc = "VS Code 群文档"
    const url =
      "https://vscode.iw17.cc" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta
          property="og:title"
          content={frontMatter.title || vscDoc}
        />
        <meta
          property="og:description"
          content={frontMatter.description || vscDoc}
        />
        <link rel="icon" type="image/png" href="/favicons/vscode.png" />
        <meta name="theme-color" content="#000" />
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
    const vscDoc = "VS Code 群文档"
    const title_map = new Map([
        ["/official-docs", "官方文档"],
        ["/friends", "友链与友群"],
        ["/faq", "常见问题"],
    ])
    if (asPath === "/") {
        return {
            titleTemplate: vscDoc,
        }
    } else if (title_map.has(asPath)) {
        return {
            titleTemplate: title_map.get(asPath) + " | " + vscDoc
        }
    } else if ((asPath as string).startsWith("/tutorials")) {
        return {
            titleTemplate: "配置环境 - %s | " + vscDoc
        }
    } else {
        return {
            titleTemplate: "%s | " + vscDoc
        }
    }
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: "system",
  },

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
