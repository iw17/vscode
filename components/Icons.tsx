import Image from "next/image"

const loader = ({src}) => {
    return `${src}`
}

function VSCode() {
  return <Image loader={loader} src="/favicons/vscode.png" alt="" width={28} height={28} />
}

export { VSCode }
