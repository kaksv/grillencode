import { checkEnv } from './common'

export function getCaptchaSiteKey() {
  return checkEnv(
    process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY,
    'NEXT_PUBLIC_CAPTCHA_SITE_KEY',
    true
  )
}

export function getMainSpaceId() {
  const spaceIds = checkEnv(
    process.env.NEXT_PUBLIC_SPACE_IDS,
    'NEXT_PUBLIC_SPACE_IDS',
    true
  )
  return spaceIds.split(',')[0]
}

export function getSpaceIds() {
  const spaceIds = checkEnv(
    process.env.NEXT_PUBLIC_SPACE_IDS,
    'NEXT_PUBLIC_SPACE_IDS',
    true
  )
  return spaceIds.split(',')
}

export function getAmpId() {
  return checkEnv(process.env.NEXT_PUBLIC_AMP_ID, 'NEXT_PUBLIC_AMP_ID')
}

export function getGaId() {
  return checkEnv(process.env.NEXT_PUBLIC_GA_ID, 'NEXT_PUBLIC_GA_ID')
}

export function getBaseUrl() {
  return (
    checkEnv(process.env.NEXT_PUBLIC_BASE_URL, 'NEXT_PUBLIC_BASE_URL') ||
    'https://grill.chat/'
  )
}
