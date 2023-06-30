

import { Footer, Login, Navbar } from "@components";


export default function signinLayout({ children }: { children: React.ReactNode }) {
  return (

    <section>

        <Login />
        {children}

    </section>

  );
}