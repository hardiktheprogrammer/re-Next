function profile(props) {
  console.log(props);

  props.name = "jakob";
  return (
    <h1>
      Name:{props.name}
      {props.lastname}
    </h1>
  );
}
export default profile;
