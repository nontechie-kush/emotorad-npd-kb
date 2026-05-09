export default {
  logo: <span style={{ fontWeight: 700 }}>⚡ e-motorad NPD KB</span>,
  project: {
    link: 'https://github.com/nontechie-kush/emotorad-npd-kb',
  },
  docsRepositoryBase: 'https://github.com/nontechie-kush/emotorad-npd-kb/blob/main',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="e-motorad New Product Development Knowledge Base" />
      <title>e-motorad NPD KB</title>
    </>
  ),
  footer: {
    text: `e-motorad NPD Knowledge Base © ${new Date().getFullYear()}`,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – e-motorad NPD KB',
    }
  },
}
