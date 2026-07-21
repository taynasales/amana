import brandmarkSrc from "@/assets/brandmark.svg";

export default function Header(): HTMLElement {
  const header = document.createElement("header");

  const container = document.createElement("div");
  container.className = "shell flex items-center";

  const brandmark = document.createElement("img");
  brandmark.setAttribute("src", brandmarkSrc);
  brandmark.className = "w-12 h-auto";

  container.prepend(brandmark);

  header.prepend(container);

  return header;
}
