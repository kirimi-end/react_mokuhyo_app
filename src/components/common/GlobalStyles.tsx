import { Global, css } from "@emotion/react"

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        body {
          background-color: #d1e1fa;
        }
      `}
    />
  )
}

export default GlobalStyles
