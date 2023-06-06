function Profile(props) {
  const { name, lastname } = props;
  return (
    <h1>
      name:{name} {lastname}
    </h1>
  );
}

export default Profile;
