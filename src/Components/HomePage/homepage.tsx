import "./homepage.css";

export function HomePage() {
  function handleSignOut(e: any) {
    e.preventDefault();
  }
  return (
    <div className="ContainerHome">
      <h2>Welcome</h2>
      <a href="/login">
        <button>Sair</button>
      </a>
    </div>
  );
}
