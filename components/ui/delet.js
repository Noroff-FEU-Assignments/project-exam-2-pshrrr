<nav>
  <li className={router.pathname == "/" ? "active" : ""}>
    <Link href="/">Home</Link>
  </li>
  <li className={router.pathname == "/projects" ? "active" : ""}>
    <Link href="/projects">Projects</Link>
  </li>
  <li className={router.pathname == "/contact" ? "active" : ""}>
    <Link href="/contact">Contact</Link>
  </li>
  <li className={router.pathname == "/login" ? "active" : ""}>
    <Link href="/login">Admin</Link>
  </li>
</nav>;
