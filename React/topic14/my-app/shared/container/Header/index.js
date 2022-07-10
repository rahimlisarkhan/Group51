// import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const { push } = useRouter();

  return (
    <ul>
      <li onClick={() => push("/")}>Home</li>
      <li onClick={() => push("/about")}>About</li>
      <li onClick={() => push("/contact")}>Contact</li>
      <li onClick={() => push("/product")}>Product</li>
    </ul>
  );
};

{
  /* <ul>
<li>
    <Link href="/">
        Home
    </Link>
</li>
<li>
    <Link href="/about">
        About
    </Link>
</li>
<li>
    <Link href="/contact">
        Contact
    </Link>
</li>
<li>
    <Link href="/product">
        Product
    </Link>
</li>
</ul> */
}
