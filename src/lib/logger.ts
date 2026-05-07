/* eslint-disable no-console */

type LogLevel = 'debug' | 'info' | 'warn' | 'error'

const LOG_LEVELS: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
}

const currentLevel: LogLevel =
  (process.env.LOG_LEVEL as LogLevel) ?? (process.env.NODE_ENV === 'production' ? 'warn' : 'debug')

function shouldLog(level: LogLevel): boolean {
  return LOG_LEVELS[level] >= LOG_LEVELS[currentLevel]
}

export const logger = {
  debug: (...args: unknown[]) => {
    if (shouldLog('debug')) console.debug('[lumen]', ...args)
  },
  info: (...args: unknown[]) => {
    if (shouldLog('info')) console.info('[lumen]', ...args)
  },
  warn: (...args: unknown[]) => {
    if (shouldLog('warn')) console.warn('[lumen]', ...args)
  },
  error: (...args: unknown[]) => {
    if (shouldLog('error')) console.error('[lumen]', ...args)
  },
}
