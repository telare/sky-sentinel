import Welcome from "../welcome/welcome";

export function meta() {
  return [
    { title: "SkySentinel" },
    { name: "description", content: "Welcome to SkySentinel!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
