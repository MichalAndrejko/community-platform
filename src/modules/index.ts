import { remoteConfig } from 'src/utils/firebase'

export async function getSupportedModules(): Promise<string[]> {
  await remoteConfig.fetchAndActivate()
  return JSON.parse(remoteConfig.getValue('enabledModules').asString())
}

export enum MODULE {
  HOWTO = 'howto',
  MAP = 'map',
  EVENTS = 'events',
  RESEARCH = 'research',
  ACADEMY = 'academy',
}

/**
 * The default configuration which will be used
 * if no configuration options for `enabledModules` is
 * found on the remote configuration associated with the 
 * current firebase project.
 */
remoteConfig.defaultConfig.enabledModules = JSON.stringify([
  MODULE.MAP,
  MODULE.HOWTO,
  MODULE.EVENTS,
  MODULE.ACADEMY,
])
