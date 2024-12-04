const Logout = ({logout}) => {

  const my_logout = () => {
    logout()
  }
  return (
    <>
      <button onClick={() => my_logout()}>Logout</button>
    </>
  )
}

export default Logout