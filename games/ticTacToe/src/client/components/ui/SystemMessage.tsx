import React from 'react'
import Typography from '@mui/joy/Typography'
import type { GameResult } from 'core/types'

export interface SystemMessageProps {
  currentPlayer: string | null
  result: GameResult
}

const createMessage = ({
  currentPlayer,
  result,
}: SystemMessageProps): String => {
  if (result !== undefined) {
    return 'draw' in result
      ? 'ゲーム終了: 引き分け'
      : `ゲーム終了: プレイヤー ${result.winner} の勝利`
  }
  if (currentPlayer === null) {
    return ''
  }
  return `プレイヤー ${currentPlayer} のターンです`
}

const SystemMessage: React.FC<SystemMessageProps> = (props) => {
  const message = createMessage(props)
  return <Typography>{message}</Typography>
}
export default SystemMessage
