import { logout } from "./lib/auth";

export default function Home() {
  return (
    <>
      <div>
        <h1>I am a good intern!</h1>
        <form
        action={async () => {
          "use server";
           logout();
        }}
      >
        <button type="submit">Logout</button>
      </form>
      </div>
    </>
  );
}
