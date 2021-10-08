//import { signIn, signOut, useSession } from 'next-auth/client'

import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton() {
  const userAuthenticated = false
  return userAuthenticated ? (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#04d361" />
      JonathanAmarall
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#eba417" />
      Sign in with github
    </button>
  )
}
