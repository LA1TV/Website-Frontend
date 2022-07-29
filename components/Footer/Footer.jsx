import Link from '../Link'
import Paragraph from '../Paragraph'
import React from 'react'

const Footer = () => (
  <>
    <hr/>
    <Paragraph smallprint>&copy; LA1TV {new Date().getFullYear()}.
    Affiliated with <Link href="https://lancastersu.co.uk/groups/la1tv">Lancaster University Students&apos; Union</Link>.
    Admins of this site can <Link href="/admin">sign in here</Link>.</Paragraph>
  </>
)

export default Footer
