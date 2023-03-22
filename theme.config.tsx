import React from "react";
import { useRouter } from "next/router.js";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <span style={{ marginLeft: ".4em" }}>VS Code 群文档</span>
    </>
  ),
  head: function Head() {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const vscDoc = "VS Code 群文档";
    const url =
      "https://vscode.iw17.cc" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || vscDoc} />
        <meta
          property="og:description"
          content={frontMatter.description || vscDoc}
        />
        <link rel="icon" type="image/png" href="/favicons/vscode.png" />
        <meta name="theme-color" content="#000" />
      </>
    );
  },
  project: {
    link: "https://github.com/iw17/vscode",
  },
  chat: {
    link: "https://github.com/iw17/vscode/issues",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    const vscDoc = "VS Code 群文档";
    const sep = " | ";
    const title_map = new Map([
      ["/about", "关于"],
      ["/faq", "常见问题"],
      ["/friends", "友链友群"],
      ["/official-docs", "官方文档"],
      ["/tutorials", "配置环境"],
    ]);
    if (asPath === "/") {
      return {
        titleTemplate: vscDoc,
      };
    } else if (title_map.has(asPath)) {
      return {
        titleTemplate: title_map.get(asPath) + sep + vscDoc,
      };
    } else {
      return {
        titleTemplate: "%s" + sep + vscDoc,
      };
    }
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: "system",
  },

  docsRepositoryBase: "https://github.com/iw17/vscode/tree/main",
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="/" target="_blank">
          iw17
        </a>
        . Powered by{" "}
        <a href="https://nextra.site" target="_blank">
          Nextra
        </a>
        .
      </span>
    ),
  },
};

export default config;
