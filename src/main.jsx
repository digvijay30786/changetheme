import "./main.css";
export default function Main() {
  return (
    <div className="formStyle">
      <form className="design">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
