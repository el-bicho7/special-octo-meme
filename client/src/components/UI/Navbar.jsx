export default function Nav({ links }) {
  return (
    <nav className="bg-secondary inline-block	p-2">
      <ul className="flex flex-col flex-wrap">
        {links.map((link) => <li className="my-2">{link}</li>)}
      </ul>
    </nav>
  );
}
