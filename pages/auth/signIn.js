import { getCsrfToken, getSession} from "next-auth/react"
import { signIn } from "next-auth/react"

export default function SignIn({ csrfToken }) {

  return (
    <form method="post" action="/api/auth/callback/credentials">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Email
        <input name="Email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit" >Sign in</button>
    </form>
  )
}

export async function getServerSideProps(context) {

  const session = await getSession(context);
  return {
    props: {
      csrfToken: await getCsrfToken(context),
      session,
    },
  }
}