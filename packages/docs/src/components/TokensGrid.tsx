import { colors } from '@caioquirinomedeiros/tokens'
import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokensGrid(props: TokensGridProps) {
  const { tokens, hasRemValue = false } = props

  return (
    <table className='tokens-grid'>
      <thead>
        <th>Name</th>
        <th>Value</th>
        {!!hasRemValue && <th>Pixels</th>}
      </thead>

      <tbody>
        {Object.entries(tokens).map(([tokenKey, tokenValue]) => {
          return (
            <tr key={tokenKey}>
              <td>{tokenKey}</td>
              <td>{tokenValue}</td>
              {!!hasRemValue && (
                <td>{Number(tokenValue.replace('rem', '')) * 16}px</td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
